// pages/timer/timer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrambleText: "R' U R2 D F2 U' L2 D' R2 U' R2 F' U2 L F' D L B2 F U'",
        timeNumberColor: '#000000',
        bigDigit: '1:34',
        smallDigit: '.54',
        pressTimerID: null,
        pressThreshold: 500,
        timerReady: false,
        timerTimerID: null,
        timerStartTime: 0,
        timerResult: 0,
        timerCount: 0,
        hideOthers: false
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
            console.log('退出计时态')
            _this.setData({
                hideOthers: false
            })
            clearTimeout(_this.data.timerTimerID)
            this.data.timerResult = new Date().getTime() - this.data.timerStartTime
            console.log(this.data.timerResult)
            var resultStr = this.data.timerResult + ""
            while (resultStr.length < 4) {
                resultStr = '0' + resultStr
            }
            _this.setData({
                bigDigit: resultStr.substr(0, resultStr.length - 3),
                smallDigit: '.' + resultStr.substr(resultStr.length - 3, 2)
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
                console.log('进入计时态')
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
            this.data.timerTimerID = null
            // 记录本次数据
            console.log('记录本次数据')
        }
    },

    fixed: function () {
        this.data.timerCount++;
        var offset = new Date().getTime() - (this.data.timerStartTime + this.data.timerCount * 1000);
        var nextTime = 1000 - offset;
        if (nextTime < 0) nextTime = 0;
        this.data.timerTimerID = setTimeout(this.fixed, nextTime); //纠正延时
        console.log('时延 -> ' + (new Date().getTime() - (this.data.timerStartTime + this.data.timerCount * 1000)));
        this.setData({
            bigDigit: this.data.timerCount
        })
    },

    handleTouchCancel: function (event) {
        this.setData({
            timeNumberColor: '#bb72ff'
        })
        clearTimeout(this.data.pressTimerID)
    },

    handleTouchPig: function (event) {
        wx.getUserProfile({
            desc: '请登录',
            success: (res) => {
                console.log(res.userInfo) //将用户信息打印至控制台
                // this.setData({
                //     userinfor: res.userInfo
                // }) //将信息保存到定义的容器里
            }
        })
        wx.navigateTo({
            url: '../detail/detail',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('start')
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