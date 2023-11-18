import React, { Component } from 'react'
import { Button, Form, Input, message, Modal, Select, Switch, Table } from 'antd'
import { connect } from 'dva'
import { request_post } from '@/utils/request_tool'

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getUserList'],
}))
class User extends Component {
  state = {
    params: {
      page: 1,
      page_rows: 10,
      search: '',
    },
    visible: false,
    data: {},
  }

  componentDidMount () {
    this.fetch(this.state.params)
  }

  handleTableChange = pagination => {
    this.setState(
      {
        params: {
          ...this.state.params,
          page: pagination.current,
          page_rows: pagination.pageSize,
        },
      },
      () => {
        this.fetch(this.state.params)
      }
    )
  }

  fetch (params) {
    const { dispatch } = this.props
    dispatch({
      type: 'api/getUserList',
      payload: params,
    })
  }

  showEditModel = (id, capacity, title, appid, is_admin) => {
    this.setState(
      {
        visible: true,
        data: {
          id: id,
          capacity: capacity,
          title: title,
          appid: appid,
          is_admin: is_admin,
        },
      },
      () => {
        //
      }
    )
  }

  onEditFormFieldChange = e => {
    if (e === 1 || e === 0) {
      this.setState({
        data: {
          ...this.state.data,
          is_admin: e,
        },
      })
    } else {
      switch (e.target.name) {
        case 'title':
          this.setState({
            data: {
              ...this.state.data,
              title: e.target.value,
            },
          })
          break
        case 'appid':
          this.setState({
            data: {
              ...this.state.data,
              appid: e.target.value,
            },
          })
          break
        case 'appsecret':
          this.setState({
            data: {
              ...this.state.data,
              appsecret: e.target.value,
            },
          })
          break
        case 'capacity':
          this.setState({
            data: {
              ...this.state.data,
              capacity: e.target.value,
            },
          })
          break
      }
    }
  }

  handleEditOk = () => {
    this.setState(
      {
        confirmLoading: true,
      },
      () => {
        let url = this.state.data.id ? '/api/editUser' : '/api/addUser'
        request_post(url, this.state.data).then(res => {
          this.setState({ confirmLoading: false })
          if (res.code === 200) {
            message.success('保存成功')
            this.setState(
              {
                visible: false,
                params: {
                  ...this.state.params,
                  page: 1,
                },
              },
              () => {
                this.fetch(this.state.params)
              }
            )
          }
        })
      }
    )
  }

  onSwithChange = (is_use, id) => {
    const { dispatch } = this.props
    dispatch({
      type: 'api/editUser',
      payload: {
        id: id,
        is_use: is_use,
      },
    }).then(() => {
      this.setState(
        {
          params: {
            ...this.state.params,
            page: 1,
          },
        },
        () => {
          this.fetch(this.state.params)
        }
      )
    })
  }

  render () {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '用户账号',
        dataIndex: 'appid',
        key: 'appid',
      },
      {
        title: '磁盘容量',
        dataIndex: 'capacity_str',
        key: 'capacity_str',
      },
      {
        title: '用户类型',
        dataIndex: 'is_admin',
        key: 'is_admin',
        render: (text, record) => <div>{record.is_admin === 1 ? '超级管理员' : '普通用户'}</div>,
      },
      {
        title: '状态',
        dataIndex: 'is_use',
        key: 'is_use',
        render: (text, record) => (
          <div>
            <Switch
              checkedChildren="启用"
              unCheckedChildren="禁用"
              onChange={checked => {
                this.onSwithChange(checked ? 1 : 0, record.id)
              }}
              defaultChecked={record.is_use === 1 ? true : false}
            />
          </div>
        ),
      },
      {
        title: '创建人',
        key: 'creator_appid',
        render: (text, record) => (
          <div>
            {record.creator_appid}/{record.creator_name}
          </div>
        ),
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                this.showEditModel(
                  record.id,
                  record.capacity,
                  record.title,
                  record.appid,
                  record.is_admin
                )
              }}
            >
              编辑
            </a>
          </span>
        ),
      },
    ]

    const { _loading, api } = this.props

    const pagination = {
      current: api.getUserList.page,
      total: api.getUserList.total,
      pageSize: this.state.params.page_rows,
      showTotal: (total, range) => `总共 ${total} 条数据`,
    }

    return (
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <Modal
          title={this.state.data.id ? '编辑用户' : '新增用户'}
          visible={this.state.visible}
          onOk={this.handleEditOk}
          confirmLoading={this.state.confirmLoading || false}
          okText="保存"
          onCancel={() => {
            this.setState({
              visible: false,
              confirmLoading: false,
            })
          }}
        >
          <Form
            labelCol={{
              xs: { span: 24 }, sm: { span: 4 },
            }}
            wrapperCol={{
              xs: { span: 24 }, sm: { span: 20 },
            }}
          >
            <Form.Item required label="用户名称">
              <Input
                onInput={this.onEditFormFieldChange}
                name="title"
                value={this.state.data.title}
                placeholder="请输入用户名称"
              />
            </Form.Item>

            <Form.Item required label="用户账号">
              <Input
                onInput={this.onEditFormFieldChange}
                name="appid"
                value={this.state.data.appid}
                placeholder="请输入用户账号"
                disabled={!!this.state.data.id}
              />
            </Form.Item>

            <Form.Item label="登录密码">
              <Input.Password
                onInput={this.onEditFormFieldChange}
                name="appsecret"
                value={this.state.data.appsecret}
                placeholder="请输入登录密码"
              />
            </Form.Item>

            <Form.Item required label="配给容量">
              <Input
                type="number"
                onInput={this.onEditFormFieldChange}
                name="capacity"
                value={this.state.data.capacity}
                placeholder="请输入磁盘容量大小"
                addonAfter="(单位：GB)"
              />
            </Form.Item>

            <Form.Item required label="用户类型">
              <Select
                value={this.state.data.is_admin + ''}
                onChange={this.onEditFormFieldChange}
              >
                <Select.Option value="0">普通用户</Select.Option>
                <Select.Option value="1">超级管理员</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        <div style={{ paddingTop: 10, paddingBottom: 20 }}>
          <Button type="primary" onClick={() => {
            this.setState({ visible: true, data: { is_admin: '0', capacity: 1, } })
          }}>
            新增
          </Button>

          <Input.Search
            allowClear
            style={{ width: 300, float: 'right' }}
            placeholder="请输入搜索关键字"
            onSearch={value => {
              this.setState(
                {
                  params: {
                    ...this.state.params,
                    search: value,
                  },
                },
                () => {
                  this.fetch(this.state.params)
                }
              )
            }}
          />
        </div>
        <Table
          // style={{tableLayout: 'fixed'}}
          dataSource={api.getUserList.list}
          rowKey={record => record.id}
          pagination={pagination}
          columns={columns}
          loading={_loading}
          // bordered
          onChange={this.handleTableChange}
        />
      </div>
    )
  }
}

export default User
