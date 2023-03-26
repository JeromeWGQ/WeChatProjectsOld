// 云函数入口文件
const cloud = require('wx-server-sdk')
//引入mysql操作模块
const mysql = require('mysql2/promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    try {
        const connection = await mysql.createConnection({
            host: "rm-bp19298113hhv7iw5fo.mysql.rds.aliyuncs.com",
            database: "gpu_rank",
            user: "jerome",
            password: "Wgq19961202"
        })
        const [rows, fields] = await connection.execute(event.sql)
        connection.end();
        return rows;
    } catch (err) {
        console.log("连接错误", err)
        return err
    }
}