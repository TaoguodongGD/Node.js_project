/**
 * 操作数据库基本步骤
 */
//加载数据库驱动
var mysql = require('mysql');
//创建数据库链接
var connection = mysql.createConnection({
    host: 'localhost', //数据库所在的服务器的域名或者IP地址
    user: 'root', //登录数据库的账号
    password: '123456', //登录数据库的密码
    database: 'book' //不是根数据库的名称，是根数据库下自建的数据库
});
//执行连接操作
connection.connect();
//操作数据库
connection.query('select count(*) as total from book', function(error, results, fields) {
    if (error) throw error;
    console.log('表book中共有', results[0].total + '条数据');
}); //'SELECT 1 + 1 AS solution'自带的sql语句用来测试数据库能否链接，成功连接打印出 2
//关闭数据库
connection.end();