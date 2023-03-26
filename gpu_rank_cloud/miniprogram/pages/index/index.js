const db = wx.cloud.database()

Page({
    data: {
        loading: '加载中，请稍候...',
        gpuData: [],
        welcome: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        setTimeout(() => {
            console.log(getApp().globalData.openid)
        }, 3000);
        var _this = this
        var gpuDataLoad = []
        // 初始化
        for (let i = 0; i <= _this.percent2line(0); i++) {
            gpuDataLoad[i] = new Array()
            for (let j = 0; j < 5; j++) {
                gpuDataLoad[i][j] = {
                    color: 'black',
                    name: ''
                }
            }
        }
        // 右侧坐标
        [600, 500, 400, 300, 200, 150, 100, 75, 50, 25, 0].forEach(element => {
            gpuDataLoad[_this.percent2line(element)][4] = {
                color: 'black',
                name: element + '%'
            }
        })
        // 加载数据
        wx.cloud.callFunction({
            name: 'mysql',
            data: {
                sql: "select `id`,`name`,`percent`,`column`,`provider` from gpu_data"
            },
            success: function (res) {
                res.result.forEach(element => {
                    var colorLoad = 'black'
                    switch (element.provider) {
                        case 0:
                            colorLoad = 'grey';
                            break;
                        case 1:
                            colorLoad = 'green';
                            break;
                        case 2:
                            colorLoad = 'red';
                            break;
                        case 3:
                            colorLoad = 'blue';
                            break;
                    }
                    if (gpuDataLoad[Math.floor(_this.percent2line(element.percent))][element.column].name != '') {
                        console.log(gpuDataLoad[Math.floor(_this.percent2line(element.percent))][element.column].name + '被' + element.name + '吞了')
                    }
                    gpuDataLoad[Math.floor(_this.percent2line(element.percent))][element.column] = {
                        color: colorLoad,
                        name: element.name
                    }
                })
                _this.setData({
                    gpuData: gpuDataLoad,
                    loading: ''
                })
            }
        })
        // 加载文末说明信息
        db.collection('welcome').get().then(res => {
            _this.setData({
                welcome: res.data[0]['welcome']
            })
        })
    },

    copyNumber(e) {
        wx.setClipboardData({
            data: '1004085980'
        })
    },

    percent2line(percent) {
        let MAX = 600
        if (percent >= 200 && percent <= MAX) {
            return (MAX - percent) / 4
        } else if (percent >= 100 && percent < 200) {
            return (MAX - 200) / 4 + (200 - percent) / 2
        } else if (percent >= 0 && percent < 100) {
            return (MAX - 200) / 4 + (200 - 100) / 2 + (100 - percent) / 1
        } else {
            return 0
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {}
});