/**
 * Created by fzxs on 17-6-9.
 */
'use strict';
import axios from 'axios';
import qs from 'querystring';
import Vue from 'vue';

import { MessageBox,Indicator } from 'mint-ui';

// const ajaxUrl = env === 'development' ?
//   '' :
//   env === 'production' ?
//     '' :
//     '';

// const LOCATION_PATH = location.protocol + '//api.local.tianlu56.com.cn'; // 本地地址
// const LOCATION_PATH = location.protocol + '//api.fat.tianlu56.com.cn'; // 测试地址
const LOCATION_PATH = location.protocol + '//wmsapi.tianlu56.com.cn'; // 生产环境
// const LOCATION_PATH = location.protocol + '//api.dev.tianlu56.com.cn'; // 研发环境

function params(param) {
  let s = [];

  if (!param) {
    return '';
  }

  let keys = Object.keys(Object);

  for (let key of key) {
    s.push([key, '=', encodeURIComponent(param)].join(''));
  }

  return s.join('&');
}
let http = axios.create({
  baseURI:'',
  timeout: 180000,
  headers: {'X-Requested-With': 'XMLHttpRequest','Content-Type' : 'application/json;charset=UTF-8'},
  withCredentials: true
});
function handError(error){
  let message = error.message;
  if(error.response) {
      let code = error.response.status;
      switch(code) {
          case 401:
          MessageBox.confirm('登陆过期，请重新登陆').then(action => {
                if (process.env.NODE_ENV == 'production' ) {
                  location.href = '/approvalProcess'
                } else {
                  location.href = '/'
                }


              })
              break
          case 404:
          MessageBox({
                  title: '错误',
                  message: '服务器走丢了',
              })
              break
          case 500:
          MessageBox({
                  title: '错误',
                  message: '服务器繁忙，请稍后再试',
              })
              break
      }
  }else if(message && message.indexOf('timeout') != -1) {
    MessageBox({
          title: '错误',
          message: '请求超时',
      })
  }
  Indicator.close()
}
const post = function (url,param,fn,dataType,isToken) {
  Indicator.open({
    text: '正在请求中请稍后',
    spinnerType: 'fading-circle'
  });
  isToken = isToken || true;
  if( isToken ){
    param.token = window.sessionStorage.getItem('token') || ''
  }
  switch (dataType) {
    case 'json': {
      param = param;
      break;
    }

    default: {
      param = qs.stringify(param);
      break;
    }
  }
  http.post( LOCATION_PATH+url,param)
    .then(function (res) {
      let mes = '';
      let success = false;
      let _res = res.data;
      if( _res.resultStatus.resultCode == '0000' ) {
        mes = _res.value;
        success = true;
      } else {
        mes =  _res.resultStatus.resultMessage;
      }
      Indicator.close();
      fn && fn(success,mes,_res);
    })
    .catch(function (error) {
      Indicator.close()
      handError(error)
      // fn && fn(error)
    })
}
const get = function (url,param,fn,dataType,isToken ) { //
  isToken = isToken || true;
  if( isToken ){
    param.token = window.sessionStorage.getItem('token') || ''
  }
  switch (dataType) {
    case 'json': {
      param = param;
      break;
    }

    default: {
      param = qs.stringify(param);
      break;
    }
  }
  http.get( LOCATION_PATH+url,param)
    .then(function (res) {
      let mes = '';
      let success = false;
      let _res = res.data;
      if( _res.resultStatus.resultCode == '0000' ) {
        mes = _res.value;
        success = true;
      } else {
        mes =  _res.resultStatus.resultMessage;
      }
      fn && fn(success,mes,_res);
    })
    .catch(function (error) {
      handError(error)
      // fn && fn(error)
    })
}
export {post,get}
