// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        alg_sets_list: [

            {
                big_title: 'CFOP',
                sub_sets_list: [{
                        index: 1,
                        title: 'OLL',
                        desc: 'Orientation of Last Layer',
                        img_url: '../../image/tool/oll.png'
                    },
                    {
                        index: 2,
                        title: 'PLL',
                        desc: 'Permutation of Last Layer',
                        img_url: '../../image/tool/oll.png'
                    }
                ]
            },

            {
                big_title: '桥式',
                sub_sets_list: [{
                    index: 1,
                    title: 'CMLL',
                    desc: 'Corners of LL Ignoring M-Slice',
                    img_url: '../../image/tool/oll.png'
                }]
            }

        ]
    },

    toDetailPage: function (e) {
        var s = e.currentTarget.dataset.id
        console.log(s)
        if (s == 'OLL') {
            wx.navigateTo({
                url: "./list_oll/list_oll",
            })
        } else if (s == 'PLL') {
            wx.navigateTo({
                url: "./list_pll/list_pll",
            })
        } else if (s == 'CMLL') {
            wx.navigateTo({
                url: "./list_cmll/list_cmll",
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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