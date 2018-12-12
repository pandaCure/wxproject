App({
  data: {
    appid: 'wx19fd18a09198044b',
    appSecret: '36146f157a0dfc68b1776c9b1ddcca46'
  },
  onLaunch() {
    wx.login({
      success: (loginRes) => {
        if (loginRes && loginRes.code) {
          const {
            appid,
            appSecret
          } = this.data
          this.getSessionKey(loginRes.code, appid, appSecret)
        }
      }
    })
  },
  onShow() {
    console.log(this.data)
  },
  getSessionKey(code, appid, appSecret) {
    var opt = {
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid: appid,
        secret: appSecret,
        js_code: code,
        grant_type: 'authorization_code'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType: "json",
      success: function(response) {
        var data = response.data;
        if (!data.openid || !data.session_key || data.errcode) {
          return {
            result: -2,
            errmsg: data.errmsg || '返回数据字段不完整'
          }
        } else {
          return data
        }
      }
    };
    wx.request(opt);
  }
})