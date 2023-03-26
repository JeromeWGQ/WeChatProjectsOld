// pages/list/list.js

import {
    millisecond2show,
    createtime2mmdd
} from "../../util/util.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        times_list: []
    },

    reloadTimes: function () {
        let _this = this
        let openid = getApp().globalData.openid
        wx.cloud.callFunction({
            name: 'mysql',
            data: {
                sql: "select id,create_time,result,scramble from timer_result where openid='" + openid + "' and event_id=0 order by create_time desc limit 180"
            },
            success: function (res) {
                res.result.forEach(element => {
                    let mmdd = createtime2mmdd(element.create_time)
                    element.show_time = mmdd[0] + '-' + mmdd[1]
                    let res = millisecond2show(element.result)
                    element.show_result = res[0] + '.' + res[1]
                })
                _this.setData({
                    times_list: res.result
                })
            }
        })
    },

    tapCard: function (e) {
        console.log(e)
        wx.showModal({
            title: e.currentTarget.dataset.set.show_result,
            content: e.currentTarget.dataset.set.scramble + '\n\n' + e.currentTarget.dataset.set.create_time.replace('T', ' ').replace('.000Z', ''),
            showCancel: false
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.reloadTimes()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.reloadTimes()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})