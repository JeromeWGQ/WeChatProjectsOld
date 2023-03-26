// pages/alg_list/alg_list.js
let src_start = "http://cube.rider.biz/visualcube.php?fmt=png&size=120&pzl=3&stage=cmll&bg=t&sch=oybrwg&view=plan&case="

function convert_alg(alg) {
    return alg.replace(/\s*/g, "").replaceAll("'", "%27")
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        alg_list: [{index:0,alg_name:'CMLL1',alg_src:src_start+convert_alg("U R U2 R' U' R U' R'"),alg_detail_list:[{alg:"U R U2 R' U' R U' R'",votes:81},{alg:"R' U' R U' R' U2 R",votes:12},{alg:"U2 L' U' L U' L' U2 L",votes:9},{alg:"U r U2 R' U' R U' r'",votes:1},],vote_index:-1},{index:1,alg_name:'CMLL2',alg_src:src_start+convert_alg("U2 R2 D R' U R D' R' U R' U' R U' R'"),alg_detail_list:[{alg:"U2 R2 D R' U R D' R' U R' U' R U' R'",votes:71},{alg:"U2 l' U R U' L2 U2 R' U R U2 L2 x'",votes:19},{alg:"U R' U' R U' R' U R' D' R U R' D R2",votes:7},{alg:"U R U2 R2 F2 R F' R' F2 R2 U2 R'",votes:4},],vote_index:-1},{index:2,alg_name:'CMLL3',alg_src:src_start+convert_alg("U2 F' r U r' U2 r' F2 r"),alg_detail_list:[{alg:"U2 F' r U r' U2 r' F2 r",votes:65},{alg:"U2 F' L F L' U2 L' U2 L",votes:14},{alg:"U' x' F U' R U L' U2 R' U2 R",votes:9},{alg:"f' U f R' U2 R' U2 R",votes:3},],vote_index:-1},{index:3,alg_name:'CMLL4',alg_src:src_start+convert_alg("U2 R U2 R' U2 R' F R F'"),alg_detail_list:[{alg:"U2 R U2 R' U2 R' F R F'",votes:68},{alg:"L U2 L' U2 r' U L U' x",votes:22},{alg:"U2 R U2 r' U2 R' F R F' M'",votes:5},{alg:"U2 r U2 r' U2 R' F R F'",votes:4},],vote_index:-1},{index:4,alg_name:'CMLL5',alg_src:src_start+convert_alg("U2 L' U R U' L U R'"),alg_detail_list:[{alg:"U2 L' U R U' L U R'",votes:88},{alg:"R' U L U' R U L'",votes:28},{alg:"U2 R' F R F' r U r'",votes:6},{alg:"U2 r' F R F' r U R'",votes:4},],vote_index:-1},{index:5,alg_name:'CMLL6',alg_src:src_start+convert_alg("R U R' F' R U2 R' U' R U' R' F R U' R'"),alg_detail_list:[{alg:"R U R' F' R U2 R' U' R U' R' F R U' R'",votes:31},{alg:"L' U' L U' L F' L' F L' U2 L",votes:22},{alg:"U' R' U' R U' R' U R' F R F' U R",votes:8},{alg:"R U2 R' F R' F' R U' R U' R'",votes:2},],vote_index:-1},{index:6,alg_name:'CMLL7',alg_src:src_start+convert_alg("R U2 R' U' R U R' U' R U' R'"),alg_detail_list:[{alg:"R U2 R' U' R U R' U' R U' R'",votes:33},{alg:"U' R U R' U R U' R' U R U2 R'",votes:24},{alg:"U' R' U' R U' R' U R U' R' U2 R",votes:8},{alg:"r U' r' U' r U r' U r U r'",votes:1},],vote_index:-1},{index:7,alg_name:'CMLL8',alg_src:src_start+convert_alg("U' R U R' U R U L' U R' U' L"),alg_detail_list:[{alg:"U' R U R' U R U L' U R' U' L",votes:89},{alg:"U2 r U' r2 D' r U' r' D r2 U r'",votes:22},{alg:"r U' r' F U2 r2 F r U' r",votes:9},{alg:"U' R' F' R U2 R U2 R' F U' R U' R'",votes:4},],vote_index:-1},{index:8,alg_name:'CMLL9',alg_src:src_start+convert_alg("U R U2 R2 F R F' U2 R' F R F'"),alg_detail_list:[{alg:"U R U2 R2 F R F' U2 R' F R F'",votes:52},{alg:"R' F2 D R2 U R2 D' F2 R",votes:18},{alg:"U R U2 R2 U' R U' R' U2 F R F'",votes:9},{alg:"U2 R' F' R U2 R' F2 R U' F U F'",votes:2},],vote_index:-1},{index:9,alg_name:'CMLL10',alg_src:src_start+convert_alg("F R U R' U' R U R' U' R U R' U' F'"),alg_detail_list:[{alg:"F R U R' U' R U R' U' R U R' U' F'",votes:71},{alg:"y' x' U' R U' R' U2 R' F r U' R U2 r' x",votes:19},{alg:"R' F R U2 R' F' R U F R U R' U F'",votes:9},{alg:"F U R U' R' U R U' R' U R U' R' F'",votes:1},],vote_index:-1},{index:10,alg_name:'CMLL11',alg_src:src_start+convert_alg("U' R U2 R' U' R U R' U' R U R' U' R U' R'"),alg_detail_list:[{alg:"U' R U2 R' U' R U R' U' R U R' U' R U' R'",votes:66},{alg:"U R U2 R' U' R U' R' U2 R U R' U R U2 R'",votes:27},{alg:"U2 R' U' R U' R' U R U' R' U R U' R' U2 R",votes:8},{alg:"F' R D2 R' F U2 F' R D2 R' F",votes:4},],vote_index:-1},{index:11,alg_name:'CMLL12',alg_src:src_start+convert_alg("R' U2 R' D' R U2 R' D R2"),alg_detail_list:[{alg:"R' U2 R' D' R U2 R' D R2",votes:88},{alg:"U2 F U2 F' U' R' F' R U' R' F' R",votes:16},{alg:"U2 R' F2 R' U' R F2 R' U R2",votes:6},{alg:"U2 L' U2 L' D' L U2 L' D L2",votes:4},],vote_index:-1},{index:12,alg_name:'CMLL13',alg_src:src_start+convert_alg("U R U2 R D R' U2 R D' R2"),alg_detail_list:[{alg:"U R U2 R D R' U2 R D' R2",votes:74},{alg:"R' F' R U R' U' R' F R2 U' R' U2 R",votes:13},{alg:"U R' U' R U2 L' U R' U' L U' R",votes:8},{alg:"U' l U R' D R U2 R' D' R U l'",votes:3},],vote_index:-1},{index:13,alg_name:'CMLL14',alg_src:src_start+convert_alg("U F R' F' R U R U' R'"),alg_detail_list:[{alg:"U F R' F' R U R U' R'",votes:99},{alg:"l U' R' D R U R' D' x",votes:24},{alg:"U2 R2 D R' U R D' R' U' R'",votes:7},{alg:"U' L' U' L' U R U' L U x'",votes:3},],vote_index:-1},{index:14,alg_name:'CMLL15',alg_src:src_start+convert_alg("U F R U' R' U' R U R' F'"),alg_detail_list:[{alg:"U F R U' R' U' R U R' F'",votes:65},{alg:"U2 F' r U R' U' r' F R",votes:29},{alg:"U l' U R D' R' U' l B",votes:6},{alg:"U' R' U r U f R' f'",votes:2},],vote_index:-1},{index:15,alg_name:'CMLL16',alg_src:src_start+convert_alg("U R U2 R2 F R F' R U2 R'"),alg_detail_list:[{alg:"U R U2 R2 F R F' R U2 R'",votes:31},{alg:"U r U2 R2 F R F' R U2 r'",votes:12},{alg:"U' R' U' R U R' F' R U R' U' R' F R2",votes:9},{alg:"U' L' U2 R U' r' U2 R l U' R'",votes:2},],vote_index:-1},{index:16,alg_name:'CMLL17',alg_src:src_start+convert_alg("U R U R' F' R U R' U' R' F R2 U' R'"),alg_detail_list:[{alg:"U R U R' F' R U R' U' R' F R2 U' R'",votes:56},{alg:"R' U L' U2 R U' R' U2 R2 x'",votes:29},{alg:"U R U R' U' R' F R2 U' R' U' R U R' F'",votes:5},{alg:"R' U L' U2 R U' R' U2 R L",votes:4},],vote_index:-1},{index:17,alg_name:'CMLL18',alg_src:src_start+convert_alg("F R U' R' U' R U R' F' R U R' U' R' F R F'"),alg_detail_list:[{alg:"F R U' R' U' R U R' F' R U R' U' R' F R F'",votes:41},{alg:"R' U L' U2 R U' x' U L' U2 R U' R x'",votes:29},{alg:"R2 D r' U r D' R2 U' F' U' F",votes:5},{alg:"r' U' r' D' r U' r' D r U r' D' r U r' D r2",votes:4},],vote_index:-1},{index:18,alg_name:'CMLL19',alg_src:src_start+convert_alg("F R U R' U' R U R' U' F'"),alg_detail_list:[{alg:"F R U R' U' R U R' U' F'",votes:61},{alg:"R U2 R2 U' R2 U' R2 U2 R",votes:18},{alg:"U2 F' L' U' L U L' U' L U F",votes:7},{alg:"f R U R' U' R U R' U' f'",votes:2},],vote_index:-1},{index:19,alg_name:'CMLL20',alg_src:src_start+convert_alg("U F R' F' R U2 R U' R' U R U2 R'"),alg_detail_list:[{alg:"U F R' F' R U2 R U' R' U R U2 R'",votes:61},{alg:"l U R' D R U' R U' R2 D' R U l'",votes:23},{alg:"R' U' R U' R' U2 R U' L' U R U' L U R'",votes:8},{alg:"U2 L' U2 L U L' U' L U2 L F' L' F",votes:3},],vote_index:-1},{index:20,alg_name:'CMLL21',alg_src:src_start+convert_alg("U' R' F R U F U' R U R' U' F'"),alg_detail_list:[{alg:"U' R' F R U F U' R U R' U' F'",votes:53},{alg:"R' F2 D R2 U' R2 D' F2 R",votes:15},{alg:"U2 F R' F' R U2 F R' F' R2 U2 R'",votes:8},{alg:"F R' F' U2 R U R' U R2 U2 R'",votes:3},],vote_index:-1},{index:21,alg_name:'CMLL22',alg_src:src_start+convert_alg("R U2 R' U' R U R' U2 R' F R F'"),alg_detail_list:[{alg:"R U2 R' U' R U R' U2 R' F R F'",votes:82},{alg:"R U2 R' U2 R' F R2 U R' U' F'",votes:22},{alg:"R U R' U R U2 R' U' R U' L' U R' U' L",votes:7},{alg:"U F' L F L' U2 L' U L U' L' U2 L",votes:3},],vote_index:-1},{index:22,alg_name:'CMLL23',alg_src:src_start+convert_alg("U' r U' r2 D' r U r' D r2 U r'"),alg_detail_list:[{alg:"U' r U' r2 D' r U r' D r2 U r'",votes:54},{alg:"U2 L' U R U' L U' R' U' R U' R'",votes:18},{alg:"U2 R' F R F' r U' R' U' R U' r'",votes:5},{alg:"R U' L' U R' U L U L' U L",votes:3},],vote_index:-1},{index:23,alg_name:'CMLL24',alg_src:src_start+convert_alg("U' R' U' R' F R F' R U' R' U2 R"),alg_detail_list:[{alg:"U' R' U' R' F R F' R U' R' U2 R",votes:64},{alg:"U2 R' U' R U' R' U F' U F R",votes:27},{alg:"L' U' L U' L' U L F R U R' F'",votes:7},{alg:"",votes:0},],vote_index:-1},{index:24,alg_name:'CMLL25',alg_src:src_start+convert_alg("R U R' U R U2 R'"),alg_detail_list:[{alg:"R U R' U R U2 R'",votes:96},{alg:"r U R' U R U2 r'",votes:15},{alg:"U L' U2 L U L' U L",votes:6},{alg:"U l' U2 l U L' U L",votes:3},],vote_index:-1},{index:25,alg_name:'CMLL26',alg_src:src_start+convert_alg("L' U2 L U2 L F' L' F"),alg_detail_list:[{alg:"L' U2 L U2 L F' L' F",votes:54},{alg:"r' F2 r U2 r U' r' F",votes:29},{alg:"U2 R' U2 R U2 R f' U' f",votes:9},{alg:"L' U2 L U2 l F' L' F M'",votes:3},],vote_index:-1},{index:26,alg_name:'CMLL27',alg_src:src_start+convert_alg("F R' F' R U2 R U2 R'"),alg_detail_list:[{alg:"F R' F' R U2 R U2 R'",votes:62},{alg:"x U R' U' L U2 R U2 R'",votes:26},{alg:"F R' F' R U2 r U2 r'",votes:5},{alg:"",votes:0},],vote_index:-1},{index:27,alg_name:'CMLL28',alg_src:src_start+convert_alg("U' R U R' U R U' R D R' U' R D' R2"),alg_detail_list:[{alg:"U' R U R' U R U' R D R' U' R D' R2",votes:75},{alg:"R U R' U' R' F R F' R U R' U R U2 R'",votes:24},{alg:"r U' L' U R2 U2 L U' L' U2 R2 x'",votes:6},{alg:"U2 R2 D' R U' R' D R U' R U R' U R",votes:4},],vote_index:-1},{index:28,alg_name:'CMLL29',alg_src:src_start+convert_alg("R U' L' U R' U' L"),alg_detail_list:[{alg:"R U' L' U R' U' L",votes:51},{alg:"L F' L' F l' U' l",votes:16},{alg:"",votes:0},{alg:"",votes:0},],vote_index:-1},{index:29,alg_name:'CMLL30',alg_src:src_start+convert_alg("U2 R U R' U R' F R F' R U2 R'"),alg_detail_list:[{alg:"U2 R U R' U R' F R F' R U2 R'",votes:32},{alg:"U2 R U R' U L' U R U' L U2 R'",votes:13},{alg:"U2 R U R' F' R U R' U R U2 R' F R U' R'",votes:5},{alg:"R' U2 l U' R U l' U R' U R",votes:3},],vote_index:-1},{index:30,alg_name:'CMLL31',alg_src:src_start+convert_alg("R U2 R' U' R U' R2 U2 R U R' U R"),alg_detail_list:[{alg:"R U2 R' U' R U' R2 U2 R U R' U R",votes:52},{alg:"F R' F R2 U' R' U' R U R' F2",votes:28},{alg:"r U2 R' U' R U' r2 U2 R U R' U r",votes:5},{alg:"U2 R' U2 R2 B2 D B D' B R2 U2 R",votes:4},],vote_index:-1},{index:31,alg_name:'CMLL32',alg_src:src_start+convert_alg("R' U r U2 R2 F R F' r"),alg_detail_list:[{alg:"R' U r U2 R2 F R F' r",votes:98},{alg:"r' U r U2 R2 F R F' R",votes:25},{alg:"R' U r U2 R2 F R F' R",votes:5},{alg:"r' U r' U2 l U' l' U2 r2 B'",votes:1},],vote_index:-1},{index:32,alg_name:'CMLL33',alg_src:src_start+convert_alg("U L' U' L U L F' L' F"),alg_detail_list:[{alg:"U L' U' L U L F' L' F",votes:66},{alg:"U' F R U' R' U R U R' F'",votes:22},{alg:"U R' F' r U R U' r' F",votes:9},{alg:"U r' F' r U r U' r' F",votes:4},],vote_index:-1},{index:33,alg_name:'CMLL34',alg_src:src_start+convert_alg("r' D' r U r' D r U' r U r'"),alg_detail_list:[{alg:"r' D' r U r' D r U' r U r'",votes:86},{alg:"U R' D R U' R U R' U R' D' R",votes:12},{alg:"F R' U' R F' R' U F' R",votes:7},{alg:"U2 F R U R' U' R U' R' U' R U R' F'",votes:3},],vote_index:-1},{index:34,alg_name:'CMLL35',alg_src:src_start+convert_alg("U' R U R' U' R' F R F'"),alg_detail_list:[{alg:"U' R U R' U' R' F R F'",votes:87},{alg:"R U R D R' U' R D' R2",votes:15},{alg:"U' r U R' U' L' U l F'",votes:9},{alg:"",votes:0},],vote_index:-1},{index:35,alg_name:'CMLL36',alg_src:src_start+convert_alg("U2 r2 D' r U r' D r2 U' r' U' r"),alg_detail_list:[{alg:"U2 r2 D' r U r' D r2 U' r' U' r",votes:73},{alg:"R' U R2 D r' U2 r D' R2 U' R",votes:22},{alg:"R2 U' R F R' U R2 U' R' F' R",votes:5},{alg:"R U' R' U' R U' R' F' U' F U2 R U R'",votes:1},],vote_index:-1},{index:36,alg_name:'CMLL37',alg_src:src_start+convert_alg("R' U' R U' R' U2 R2 U R' U R U2 R'"),alg_detail_list:[{alg:"R' U' R U' R' U2 R2 U R' U R U2 R'",votes:61},{alg:"R2 F U' F U F2 R2 U' R' F R",votes:14},{alg:"U' F2 R U' R' U R U R2 F' R F'",votes:8},{alg:"U2 R U R' U R U2 R2 U' R U' R' U2 R",votes:2},],vote_index:-1},{index:37,alg_name:'CMLL38',alg_src:src_start+convert_alg("U' F R2 D R' U R D' R2 U' F'"),alg_detail_list:[{alg:"U' F R2 D R' U R D' R2 U' F'",votes:45},{alg:"R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",votes:16},{alg:"U' L U' R' U L' U2 F' U F R",votes:7},{alg:"U R' U L U' R U2 F U' F' L'",votes:4},],vote_index:-1},{index:38,alg_name:'CMLL39',alg_src:src_start+convert_alg("U2 R2 D R' U2 R D' R' U2 R'"),alg_detail_list:[{alg:"U2 R2 D R' U2 R D' R' U2 R'",votes:81},{alg:"r U' r' U' r U' r' U' F' U2 F",votes:12},{alg:"L F' L' U' L F' L' U' F' U2 F",votes:9},{alg:"",votes:0},],vote_index:-1},{index:39,alg_name:'CMLL40',alg_src:src_start+convert_alg("U2 R' F2 R U2 R U2 R' F2 R U2 R'"),alg_detail_list:[{alg:"U2 R' F2 R U2 R U2 R' F2 R U2 R'",votes:84},{alg:"y2 r U' r' U r' D' r U' r' D r",votes:20},{alg:"U2 R' F U' R F R' U R F'",votes:5},{alg:"U' R' D R U' R U' R' U R' D' R",votes:4},],vote_index:-1},{index:40,alg_name:'CMLL41',alg_src:src_start+convert_alg("R2 D' R U2 R' D R U2 R"),alg_detail_list:[{alg:"R2 D' R U2 R' D R U2 R",votes:38},{alg:"R' F R U R' F R U F U2 F'",votes:24},{alg:"",votes:0},{alg:"",votes:0},],vote_index:-1},{index:41,alg_name:'CMLL42',alg_src:src_start+convert_alg("U' F R U R' U' F'"),alg_detail_list:[{alg:"U' F R U R' U' F'",votes:96},{alg:"U F U R U' R' F'",votes:12},{alg:"U2 R' U' F' U F R",votes:6},{alg:"",votes:0},],vote_index:-1},]
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