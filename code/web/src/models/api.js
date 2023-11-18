import {
  getAccessToken,
  getUserList,
  addUser,
  editUser,
  getFileList, deleteFile, detail,
} from '../services/api';
import {setAccessToken, setAuthority, setUserInfo} from '../utils/authority';
import {reloadAuthorized} from '@/utils/Authorized';
import {message} from 'antd';

export default {
  namespace: 'api',
  state: {
    mediaDetail: {},
    getFileList: {
      list: [],
      total: 0,
      page: 1,
    },
    getUserList: {
      list: [],
      total: 0,
      page: 1,
    },
  },

  effects: {
    * getAccessToken({payload}, {call, put}) {
      const response = yield call(getAccessToken, payload);
      if (response.code === 200) {
        setUserInfo({appid: payload.appid}, response.info.expires_in);
        yield put({
          type: 'login',
          payload: response.info,
        });

        reloadAuthorized();
        location.href = '/';
      }
    },

    * getFileList({payload}, {call, put}) {
      const response = yield call(getFileList, payload);
      yield put({
        type: 'putFileList',
        payload: response.info,
      });
    },

    * detail({payload}, {call, put}) {
      const response = yield call(detail, payload);
      yield put({
        type: 'putDetail',
        payload: response.info,
      });
    },

    * getUserList({payload}, {call, put}) {
      const response = yield call(getUserList, payload);
      yield put({
        type: 'putUserList',
        payload: response.info,
      });
    },

    * addUser({payload}, {call, put}) {
      const response = yield call(addUser, payload);
      if (response.code == 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    * editUser({payload}, {call, put}) {
      const response = yield call(editUser, payload);
      if (response.code == 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    * delete({payload}, {call, put}) {
      const response = yield call(deleteFile, payload);
      if (response.code == 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },
  },

  reducers: {
    login(state, {payload}) {
      if (payload.is_admin == 1) {
        setAuthority('super_admin');
      } else {
        setAuthority('admin');
      }
      setAccessToken(payload.access_token);
      return {
        ...state,
      };
    },

    putFileList(state, {payload}) {
      return {
        ...state,
        getFileList: payload,
      };
    },

    putDetail(state, {payload}) {
      return {
        ...state,
        mediaDetail: payload,
      };
    },

    putUserList(state, {payload}) {
      return {
        ...state,
        getUserList: payload,
      };
    },
  },
};
