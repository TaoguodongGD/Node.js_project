/**
 * 封装操作数据库的通用api
 */

const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    //创建数据库链接
    var connection = mysql.createConnection({
        host: 'localhost', //数据库所在的服务器的域名或者IP地址
        user: 'root', //登录数据库的账号
        password: '123456', //登录数据库的密码
        database: 'book' //不是根数据库的名称，是根数据库下自建的数据库
    });
    //执行连接操作
    connection.connect();

    //操作数据库(数据库操作也是异步的)
    connection.query(sql, data, function(error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    //关闭数据库
    connection.end();
}