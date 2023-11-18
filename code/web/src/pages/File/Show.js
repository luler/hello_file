import React, { Component } from 'react';
import { connect } from 'dva';
import Error from './Error';
import RcViewer from '@hanyk/rc-viewer';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

@connect(({ api }) => ({ api }))
class Index extends Component {
  state = {
    params: {},
  };

  componentDidMount() {
    const params = {
      user_media_id: this.props.match.params.user_media_id,
      authorization: this.props.match.params.authorization,
    };

    this.setState(
      {
        params: params,
      },
      () => {
        this.fetch();
      }
    );
  }

  fetch() {
    const { dispatch } = this.props;
    dispatch({
      type: 'api/detail',
      payload: this.state.params,
    });
  }

  render() {
    const { api } = this.props;
    const media = api.mediaDetail;
    let showViewer = '';
    if (media.file_ext !== undefined) {
      switch (media.file_ext.toLowerCase()) {
        case 'png':
        case 'gif':
        case 'jpg':
        case 'jpeg':
          showViewer = (
            <RcViewer
              options={{
                inline: true,
                button: false,
              }}
            >
              <img
                height="0"
                width="0"
                style={{ opacity: 0 }}
                src={media.file_url}
                alt={media.title}
              />
            </RcViewer>
          );
          break;

        case 'mp4':
        case 'avi':
          showViewer = (
            <Player fluid={false} height="100%">
              <source src={media.file_url} />
            </Player>
          );
          break;
        default:
          window.location.href = `/api/show?user_media_id=${this.state.params.user_media_id}&authorization=${this.state.params.authorization}`;
          break;
        // default:
        //   showViewer = <Error/>;
        //   break;
      }
    }

    return <div style={{ position: 'absolute', height: '100%', width: '100%' }}>{showViewer}</div>;
  }
}

export default Index;
