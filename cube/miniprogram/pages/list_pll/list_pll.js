// pages/alg_list/alg_list.js
let src_start = "http://cube.rider.biz/visualcube.php?fmt=png&size=120&pzl=3&stage=pll&bg=t&view=plan&case="

function convert_alg(alg) {
    return alg.replace(/\s*/g, "").replaceAll("'", "%27")
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        alg_list: [{index:0,alg_name:'PLL1',alg_src:src_start+convert_alg("R' F R' B2 R F' R' B2 R2"),alg_detail_list:[{alg:"l' U R' D2 R U' R' D2 R2",votes:97},{alg:"x R' U R' D2 R U' R' D2 R2",votes:28},{alg:"R' F R' B2 R F' R' B2 R2",votes:7},{alg:"y x' R2 D2 R' U' R D2 R' U R' x",votes:4},],vote_index:-1},{index:1,alg_name:'PLL2',alg_src:src_start+convert_alg("x R2 D2 R U R' D2 R U' R x'"),alg_detail_list:[{alg:"x R2 D2 R U R' D2 R U' R x'",votes:39},{alg:"l' R' D2 R U R' D2 R U' R x'",votes:22},{alg:"y x' R U' R D2 R' U R D2 R2 x",votes:5},{alg:"y' x L U' L D2 L' U L D2 L2",votes:4},],vote_index:-1},{index:2,alg_name:'PLL3',alg_src:src_start+convert_alg("y x' R U' R' D R U R' D' R U R' D R U' R' D' x"),alg_detail_list:[{alg:"y x' R U' R' D R U R' D' R U R' D R U' R' D' x",votes:39},{alg:"R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2",votes:28},{alg:"z U2 R2 F R U R' U' R U R' U' R U R' U' F' R2 U2 z'",votes:5},{alg:"R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2",votes:3},],vote_index:-1},{index:3,alg_name:'PLL4',alg_src:src_start+convert_alg("y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"),alg_detail_list:[{alg:"y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",votes:47},{alg:"y2 R' U2 R' d' R' F' R2 U' R' U R' F R U' F",votes:26},{alg:"R' U R U' R2 F' U' F U R F R' F' R2",votes:6},{alg:"M' U2 L F' R U2 r' U r' R2 U2 R2",votes:3},],vote_index:-1},{index:4,alg_name:'PLL5',alg_src:src_start+convert_alg("R2 u R' U R' U' R u' R2 y' R' U R"),alg_detail_list:[{alg:"R2 u R' U R' U' R u' R2 y' R' U R",votes:77},{alg:"R2 U R' U R' U' R U' R2 D U' R' U R D'",votes:25},{alg:"R2 u R' U R' U' R u' R2 F' U F",votes:9},{alg:"D' R2 U R' U R' U' R U' R2 U' D R' U R",votes:2},],vote_index:-1},{index:5,alg_name:'PLL6',alg_src:src_start+convert_alg("R' U' R y R2 u R' U R U' R u' R2"),alg_detail_list:[{alg:"R' U' R y R2 u R' U R U' R u' R2",votes:59},{alg:"R' U' R U D' R2 U R' U R U' R U' R2 D",votes:24},{alg:"y F' U' F R2 u R' U R U' R u' R2",votes:7},{alg:"R' d' F R2 u R' U R U' R u' R2",votes:2},],vote_index:-1},{index:6,alg_name:'PLL7',alg_src:src_start+convert_alg("R2 u' R U' R U R' u R2 y R U' R'"),alg_detail_list:[{alg:"R2 u' R U' R U R' u R2 y R U' R'",votes:54},{alg:"y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",votes:11},{alg:"R2 U' R U' R U R' U R2 D' U R U' R' D",votes:8},{alg:"R2 u' R U' R U R' u R2 f R' f'",votes:4},],vote_index:-1},{index:7,alg_name:'PLL8',alg_src:src_start+convert_alg("R U R' U' D R2 U' R U' R' U R' U R2 D'"),alg_detail_list:[{alg:"R U R' U' D R2 U' R U' R' U R' U R2 D'",votes:90},{alg:"R U R' y' R2 u' R U' R' U R' u R2",votes:20},{alg:"D' R U R' U' D R2 U' R U' R' U R' U R2",votes:8},{alg:"f R f' R2 u' R U' R' U R' u R2",votes:1},],vote_index:-1},{index:8,alg_name:'PLL9',alg_src:src_start+convert_alg("M2 U M2 U2 M2 U M2"),alg_detail_list:[{alg:"M2 U M2 U2 M2 U M2",votes:72},{alg:"M2 U' M2 U2 M2 U' M2",votes:23},{alg:"R2 U2 R U2 R2 U2 R2 U2 R U2 R2",votes:8},{alg:"M2 U' M2 U2 M2 U' M2",votes:3},],vote_index:-1},{index:9,alg_name:'PLL10',alg_src:src_start+convert_alg("y R' U L' U2 R U' R' U2 R L"),alg_detail_list:[{alg:"y R' U L' U2 R U' R' U2 R L",votes:97},{alg:"L' U' L F L' U' L U L F' L2 U L",votes:19},{alg:"y2 x R2 F R F' R U2 r' U r U2 x'",votes:5},{alg:"y2 R' U2 R U R' U2 L U' R U L'",votes:3},],vote_index:-1},{index:10,alg_name:'PLL11',alg_src:src_start+convert_alg("R U R' F' R U R' U' R' F R2 U' R'"),alg_detail_list:[{alg:"R U R' F' R U R' U' R' F R2 U' R'",votes:78},{alg:"R U2 R' U' R U2 L' U R' U' L",votes:19},{alg:"R U2 R' U' R U2 L' U R' U' r x",votes:6},{alg:"L' U R U' L U2 R' U R U2 R'",votes:2},],vote_index:-1},{index:11,alg_name:'PLL12',alg_src:src_start+convert_alg("R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"),alg_detail_list:[{alg:"R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",votes:79},{alg:"L U' R U2 L' U R' L U' R U2 L' U R'",votes:24},{alg:"z U R' D R2 U' R D' U R' D R2 U' R D' z'",votes:9},{alg:"r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r",votes:1},],vote_index:-1},{index:12,alg_name:'PLL13',alg_src:src_start+convert_alg("R' U R U' R' F' U' F R U R' F R' F' R U' R"),alg_detail_list:[{alg:"R' U R U' R' F' U' F R U R' F R' F' R U' R",votes:66},{alg:"R' U L' U2 R U' L R' U L' U2 R U' L",votes:26},{alg:"z D' R U' R2 D R' U D' R U' R2 D R' U z'",votes:6},{alg:"r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r'",votes:2},],vote_index:-1},{index:13,alg_name:'PLL14',alg_src:src_start+convert_alg("y R U R' F' R U2 R' U2 R' F R U R U2 R'"),alg_detail_list:[{alg:"y R U R' F' R U2 R' U2 R' F R U R U2 R'",votes:79},{alg:"L U2 L' U2 L F' L' U' L U L F L2",votes:12},{alg:"y R U' R' U' R U R D R' U' R D' R' U2 R'",votes:9},{alg:"y2 R U2 R' U2 R B' R' U' R U R B R2",votes:4},],vote_index:-1},{index:14,alg_name:'PLL15',alg_src:src_start+convert_alg("R' U2 R U2 R' F R U R' U' R' F' R2"),alg_detail_list:[{alg:"R' U2 R U2 R' F R U R' U' R' F' R2",votes:37},{alg:"R' U2 R' D' R U' R' D R U R U' R' U' R",votes:16},{alg:"y R2 F R U R U' R' F' R U2 R' U2 R",votes:9},{alg:"y' R U2 R' U2 R' F R2 U' R' U' R U R' F' R U R' U R U2 R'",votes:4},],vote_index:-1},{index:15,alg_name:'PLL16',alg_src:src_start+convert_alg("R U R' U' R' F R2 U' R' U' R U R' F'"),alg_detail_list:[{alg:"R U R' U' R' F R2 U' R' U' R U R' F'",votes:85},{alg:"R U R' U' R' F R2 U' R' U F' L' U L",votes:18},{alg:"R2 U R2 U' R2 U' D R2 U' R2 U R2 D'",votes:5},{alg:"y2 L' U' L U L F' L2 U L U L' U' L F",votes:3},],vote_index:-1},{index:16,alg_name:'PLL17',alg_src:src_start+convert_alg("y2 R U' R U R U R U' R' U' R2"),alg_detail_list:[{alg:"y2 R U' R U R U R U' R' U' R2",votes:72},{alg:"R2 U' R' U' R U R U R U' R",votes:13},{alg:"y2 M2 U M U2 M' U M2",votes:6},{alg:"M2 U M' U2 M U M2",votes:4},],vote_index:-1},{index:17,alg_name:'PLL18',alg_src:src_start+convert_alg("y2 R2 U R U R' U' R' U' R' U R'"),alg_detail_list:[{alg:"y2 R2 U R U R' U' R' U' R' U R'",votes:48},{alg:"y2 M2 U' M U2 M' U' M2",votes:11},{alg:"R' U R' U' R' U' R' U R U R2",votes:5},{alg:"M2 U' M' U2 M U' M2",votes:4},],vote_index:-1},{index:18,alg_name:'PLL19',alg_src:src_start+convert_alg("R' U R' d' R' F' R2 U' R' U R' F R F"),alg_detail_list:[{alg:"R' U R' d' R' F' R2 U' R' U R' F R F",votes:33},{alg:"R' U R' U' y R' F' R2 U' R' U R' F R F",votes:19},{alg:"z D' R2 D R2 U R' D' R U' R U R' D R U'",votes:9},{alg:"R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",votes:2},],vote_index:-1},{index:19,alg_name:'PLL20',alg_src:src_start+convert_alg("F R U' R' U' R U R' F' R U R' U' R' F R F'"),alg_detail_list:[{alg:"F R U' R' U' R U R' F' R U R' U' R' F R F'",votes:31},{alg:"F R' F R2 U' R' U' R U R' F' R U R' U' F'",votes:25},{alg:"R2 U' R2 U' R2 U R' F' R U R2 U' R' F R",votes:9},{alg:"y2 R' U2 R' F' R2 U' R' F' U' F R U R' F U2 R",votes:4},],vote_index:-1},{index:20,alg_name:'PLL21',alg_src:src_start+convert_alg("M2 U M2 U M' U2 M2 U2 M'"),alg_detail_list:[{alg:"M2 U M2 U M' U2 M2 U2 M'",votes:53},{alg:"y M2 U' M2 U' M' U2 M2 U2 M'",votes:16},{alg:"M' U' M2 U' M2 U' M' U2 M2",votes:7},{alg:"y R' U' R U' R U R U' R' U R U R2 U' R'",votes:2},],vote_index:-1},]
    },

    onClickAlg: function (e) {
        var case_id = e.currentTarget.dataset.id
        this.data.alg_list[case_id[0]]["vote_index"] = case_id[1]
        var _this = this
        this.setData({
            alg_list: _this.data.alg_list
        })
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