import React, { Component } from 'react'
import { Button, DatePicker, Divider, Input, message, Modal, Select, Table, Tooltip, Upload } from 'antd'
import { connect } from 'dva'
import { getAccessToken, getAuthority } from '@/utils/authority'
import copy from 'copy-to-clipboard'
import moment from 'moment'
import { request_get } from '@/utils/request_tool'

const { confirm } = Modal

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getFileList'],
}))
class Index extends Component {
  state = {
    params: {
      page: 1,
      page_rows: 10,
      search: '',
    },
    is_temp: 0,
    selectedRowKeys: [],
    userData: [],
  }

  componentDidMount () {
    this.fetch(this.state.params)
    message.config({
      top: 100,
      duration: 2,
      maxCount: 3,
    })

    if (getAuthority().includes('super_admin')) {
      request_get('/api/getUserList', { is_drop_data: 1, }).then(res => {
        if (res.code === 200) {
          this.setState({ userData: res.info.list, })
        }
      })
    }
  }

  handleTableChange = (pagination, filter, sorter) => {
    this.setState(
      {
        params: {
          // eslint-disable-next-line react/destructuring-assignment
          ...this.state.params,
          order_type: `${sorter.field}.${sorter.order}`,
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
      type: 'api/getFileList',
      payload: params,
    })
  }

  showConfirm = ids => {
    const that = this
    confirm({
      title: '你确定要删除该文件吗?',
      content: '注意：点击确认，将删除该文件',
      okText: '确定',
      cancelText: '取消',
      onOk () {
        return new Promise((resolve, reject) => {
          const { dispatch } = that.props
          dispatch({
            type: 'api/delete',
            payload: { user_media_ids: ids },
          }).then(() => {
            that.setState(
              {
                params: {
                  ...that.state.params,
                  page: 1,
                },
                selectedRowKeys: [],
              },
              () => {
                that.fetch(that.state.params)
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
              }
            )
          })
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel () {
        //
      },
    })
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render () {
    const props = {
      multiple: true,
      name: 'file',
      action: '/api/file',
      headers: {
        authorization: getAccessToken(),
      },
      data: {
        is_temp: this.state.is_temp,
      },
      onChange: res => {
        if (res.file.status === 'done') {
          this.setState(
            {
              params: {
                ...this.state.params,
                page: 1,
                search: '',
              },
            },
            () => {
              this.fetch(this.state.params)
            }
          )
        }
      },
    }

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '文件名称',
        key: 'title',
        render: (text, record) => (
          <a
            onClick={() => {
              Modal.info({
                title: record.title,
                icon: false,
                maskClosable: true,
                okText: '关闭',
                width: '100%',
                content: <div>
                  <iframe
                    style={{ height: 600 }}
                    width="100%"
                    src={`/show/file/${record.id}/${getAccessToken()}`}
                  />
                </div>
              })
            }}
          >
            {record.title}
          </a>
        ),
      },
      {
        title: '文件类型',
        dataIndex: 'file_type',
        key: 'file_type',
        width: 200,
      },
      {
        title: '文件描述',
        key: 'desc',
        width: 200,
        render: (text, record) => <div>{record.desc === '' ? '--' : record.desc}</div>,
      },
      {
        title: '文件大小',
        dataIndex: 'file_size',
        key: 'file_size',
        sorter: true,
      },
      {
        title: '创建人',
        key: 'creator',
        render: (text, record) => (
          <div>
            {record.creator_appid}/{record.creator_name}
          </div>
        ),
      },
      {
        title: '下载次数',
        dataIndex: 'download_count',
        key: 'download_count',
        width: 110,
        sorter: true,
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 160,
      },
      {
        title: '操作',
        key: 'action',
        width: 200,
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                copy(record.file_url)
                message.success('复制成功')
              }}
            >
              原始链接
            </a>
            <Divider type="vertical"/>
            <a href={`/api/download?user_media_id=${record.id}&authorization=${getAccessToken()}`}>
              下载
            </a>
            <Divider type="vertical"/>
            <a
              style={{ color: 'red' }}
              onClick={() => {
                this.showConfirm([record.id])
              }}
            >
              删除
            </a>
          </span>
        ),
      },
    ]

    const { _loading, api } = this.props

    const pagination = {
      current: api.getFileList.page,
      total: api.getFileList.total,
      pageSize: this.state.params.page_rows,
      showSizeChanger: true,
      showTotal: (total, range) => `总共 ${total} 条数据`,
    }

    const { selectedRowKeys } = this.state

    return (
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <div
          style={{
            height: 60,
          }}
        >
          <div style={{ display: 'inline-block', float: 'left', marginTop: 10 }}>
            <Upload {...props}>
              <Tooltip placement="top" title="请选择需要上传的文件">
                <Button icon="upload" type="primary">
                  上传
                </Button>
              </Tooltip>
              <Divider style={{ opacity: 0 }} type="vertical"/>
              <Button
                type="danger"
                onClick={e => {
                  if (selectedRowKeys.length === 0) {
                    message.warning('请选择需要删除的项目')
                  } else {
                    this.showConfirm(selectedRowKeys)
                  }
                  e.stopPropagation()
                }}
              >
                删除选中
              </Button>
              <Divider style={{ opacity: 0 }} type="vertical"/>
              <Button
                type="default"
                onClick={() => {
                  window.location.href = '/backend/doc/接口文档.docx'
                }}
              >
                接口文档
              </Button>
            </Upload>
          </div>

          <div style={{ display: 'inline-block', float: 'right', marginTop: 10 }}>
            <Input.Search
              allowClear
              style={{ width: 300 }}
              placeholder="请输入搜索关键字"
              onSearch={value => {
                this.setState({ params: { ...this.state.params, search: value, page: 1, }, }, () => {
                  this.fetch(this.state.params)
                })
              }}
            />
          </div>

          <div style={{ display: 'inline-block', float: 'right', marginTop: 10 }}>
            <DatePicker.RangePicker
              style={{
                marginRight: 10,
              }}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
              }}
              onChange={(dates, dateStrings) => {
                this.setState(
                  {
                    params: {
                      ...this.state.params,
                      start_time: dateStrings[0],
                      end_time: dateStrings[1],
                      page: 1,
                    },
                  },
                  () => {
                    this.fetch(this.state.params)
                  }
                )
              }}
            />
          </div>

          {getAuthority().includes('super_admin') &&
            <div style={{ display: 'inline-block', float: 'right', marginTop: 10 }}>
              <Select
                placeholder="创建人筛选"
                allowClear
                style={{ width: 200, marginRight: 10, }}
                showSearch
                onChange={(value, option) => {
                  this.setState({
                    params: {
                      ...this.state.params,
                      uid: option?.key,
                      page: 1,
                    }
                  }, () => {
                    this.fetch(this.state.params)
                  })
                }}
              >
                {this.state.userData.map(value => (
                  <Select.Option key={value.id} value={value.title}>{value.title}</Select.Option>))}
              </Select>
            </div>
          }
        </div>
        <Table
          // style={{tableLayout: 'fixed'}}
          dataSource={api.getFileList.list}
          rowKey={record => record.id}
          pagination={pagination}
          columns={columns}
          loading={_loading}
          // bordered
          onChange={this.handleTableChange}
          rowSelection={{
            selectedRowKeys,
            onChange: this.onSelectChange,
          }}
        />
      </div>
    )
  }
}

export default Index
