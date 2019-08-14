/**
 * 插入数据
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

let sql = 'insert into book set ?';
let data = {
    name: '明朝那些事',
    author: '当年明月',
    category: '文学',
    description: '明朝历史'
};

//操作数据库
connection.query(sql, data, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
    if (results.affectedRows == 1) {
        console.log('数据插入成功');
    }
});
//'SELECT 1 + 1 AS solution'自带的sql语句用来测试数据库能否链接，成功连接打印出 2

//关闭数据库
connection.end();