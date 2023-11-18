import React, { Component } from 'react';
import Result from '../../components/Result';

class Index extends Component {
  state = {};

  render() {
    return (
      <Result
        style={{ marginTop: '100px' }}
        type="error"
        title="文件类型不支持"
        description="该文件控件不支持打开该文件类型的文件，请选择其他文件"
      />
    );
  }
}

export default Index;
