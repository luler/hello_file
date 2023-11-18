import {stringify} from 'qs';
import request from '@/utils/request';

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getAccessToken(params = {}) {
  return request(`/api/getAccessToken`, {
    method: 'POST',
    data: params,
  });
}

export async function getFileList(params = {}) {
  return request(`/api/getFileList?${stringify(params)}`);
}

export async function detail(params = {}) {
  return request(`/api/detail?${stringify(params)}`);
}

export async function getUserList(params = {}) {
  return request(`/api/getUserList?${stringify(params)}`);
}

export async function deleteFile(params = {}) {
  return request(`/api/delete`, {
    method: 'POST',
    data: params,
  });
}

export async function addUser(params = {}) {
  return request(`/api/addUser`, {
    method: 'POST',
    data: params,
  });
}

export async function editUser(params = {}) {
  return request(`/api/editUser`, {
    method: 'POST',
    data: params,
  });
}
