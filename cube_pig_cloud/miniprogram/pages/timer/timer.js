// pages/timer/timer.js

import {
    second2minute,
    millisecond2show
} from "../../util/util.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrambleText: "",
        timeNumberColor: '#000000',
        bigDigit: '0',
        smallDigit: '.00',
        pressTimerID: null,
        pressThreshold: 500,
        timerReady: false,
        timerTimerID: null,
        timerStartTime: 0,
        timerResult: 0,
        timerCount: 0,
        hideOthers: false,
        isHideTabbar: false
    },

    handleTouchStart: function (event) {
        let _this = this
        if (!_this.data.timerTimerID) {
            // 非计时态
            clearTimeout(_this.data.pressTimerID)
            _this.data.timerReady = false
            _this.setData({
                timeNumberColor: '#ff6464'
            })
            _this.data.pressTimerID = setTimeout(() => {
                _this.data.timerReady = true
                _this.setData({
                    timeNumberColor: '#65cd85'
                })
                wx.vibrateShort({
                    type: 'heavy',
                })
            }, 300);
        } else {
            // 计时态
            clearTimeout(_this.data.timerTimerID)
            this.data.timerResult = new Date().getTime() - this.data.timerStartTime
            let showRes = millisecond2show(this.data.timerResult)
            _this.setData({
                bigDigit: showRes[0],
                smallDigit: '.' + showRes[1]
            })
        }
    },

    handleTouchEnd: function (event) {
        let _this = this
        if (!_this.data.timerTimerID) {
            // 非计时态
            clearTimeout(_this.data.pressTimerID)
            _this.setData({
                timeNumberColor: '#000000'
            })
            if (_this.data.timerReady) {
                // 进入计时态
                _this.data.timerReady = false
                if (!_this.data.isHideTabbar) {
                    wx.hideTabBar({
                        animation: true,
                    })
                    _this.data.isHideTabbar = true
                }
                wx.setKeepScreenOn({
                    keepScreenOn: true,
                })
                _this.setData({
                    hideOthers: true
                })
                _this.data.timerTimerID = 1
                _this.setData({
                    bigDigit: '0',
                    smallDigit: '',
                })
                _this.data.timerStartTime = new Date().getTime()
                _this.data.timerCount = 0
                _this.data.timerTimerID = setTimeout(_this.fixed, 1000);
            }
        } else {
            // 计时态
            _this.data.timerTimerID = null
            wx.setKeepScreenOn({
                keepScreenOn: false,
            })
            // 显示tabbar
            if (_this.data.isHideTabbar) {
                wx.showTabBar({
                    animation: true,
                })
                _this.data.isHideTabbar = false
            }
            // 记录本次数据
            console.log('记录本次数据 -> ' + _this.data.timerResult)
            let openid = getApp().globalData.openid
            console.log('openid -> ' + openid)
            wx.cloud.callFunction({
                name: 'mysql',
                data: {
                    sql: "INSERT INTO timer_result ( openid, event_id, result, scramble ) VALUES ('" + openid + "',0," + _this.data.timerResult + ",\"" + _this.data.scrambleText + "\")"
                },
                success: function (res) {
                    console.log(res)
                }
            })
            // 生成下一次打乱
            _this.generateScramble()
            // 显示打乱和猪
            setTimeout(() => {
                _this.setData({
                    hideOthers: false
                })
            }, 300);
        }
    },

    fixed: function () {
        this.data.timerCount++;
        var offset = new Date().getTime() - (this.data.timerStartTime + this.data.timerCount * 1000);
        var nextTime = 1000 - offset;
        if (nextTime < 0) nextTime = 0;
        this.data.timerTimerID = setTimeout(this.fixed, nextTime); //纠正延时
        this.setData({
            bigDigit: second2minute(this.data.timerCount)
        })
    },

    handleTouchCancel: function (event) {
        this.setData({
            timeNumberColor: '#bb72ff'
        })
        clearTimeout(this.data.pressTimerID)
    },

    handleTouchPig: function (event) {
        console.log('touch pig')
    },

    generateScramble: function () {
        console.log('scramble')

        function checkmove(move, arr) { // 检测步骤合理性
            var l = arr.length;
            return move == arr[l - 1] || (move == arr[l - 2] && (move / 2 | 0) == (arr[l - 1] / 2 | 0));
        }

        function rndCube(maxSteps) { // 生成随机打乱步骤
            var cubeArr = [], // 打乱步骤数组
                cubeStr = "", // 打乱步骤字符串
                cube = ["R", "L", "F", "B", "U", "D"], // 步骤
                types = ["", "", "'", "'", "2"], // 步骤附加条件
                r, // 随机数
                i;

            maxSteps = maxSteps || 22

            for (i = 0; i < maxSteps; i++) {
                do {
                    r = Math.random() * 6 | 0;
                } while (checkmove(r, cubeArr));
                cubeArr.push(r);
                cubeStr += cube[r] + types[Math.random() * 5 | 0] + " ";
            }

            return cubeStr;
        }

        this.setData({
            scrambleText: rndCube()
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.generateScramble()
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