// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.cloud.init()

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.cloud.callFunction({
          name: 'getOpenId',
          complete: res1 => {
            console.log(res1)
            this.globalData.openid = res1.result.openid
          }
        })
      }
    })
  },
  globalData: {
    openid: null
  }
})