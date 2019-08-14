/**
 * 测试通用api
 */
const db = require('./db.js');

//插入操作
// let sql = 'insert into book set ?';
// let data = {
//     id: 1,//表中有数据的时候可以不加id，id自增，无数据的时候必须加id
//     name: '笑傲江湖',
//     author: '金庸',
//     category: '文学',
//     description: '武侠小说'
// }
// db.base(sql, data, (result) => {
//     console.log(result);
// })

//更新操作
// let sql = 'update book set name=?,author=?,category=?,description=? where id = ?';
// data = ['天龙八部', '金庸', '文学', '武侠小说', 1];
// db.base(sql, data, (result) => {
//     console.log(result);
// });

//删除操作
// let sql = 'delete from book where id=?';
// let data = [9];
// db.base(sql, data, (result) => {
//     console.log(result);
// })

//查询操作
// let sql = 'select * from book';
// let data = null;
// db.base(sql, data, (result) => {
//     console.log(result)
// })


//插入操作
let sqlarr = ["INSERT into book (name,author,category,description) VALUES ('三国演义','罗贯中','文学','一个杀伐纷争的年代')",
    "INSERT into book (name,author,category,description) VALUES  ('水浒传','施耐庵','文学','108条好汉的故事')",
    "INSERT into book (name,author,category,description) VALUES ('西游记','吴承恩','文学','佛教与道教的斗争')",
    "INSERT into book (name,author,category,description) VALUES ('红楼梦','曹雪芹','文学','一个封建王朝的缩影')",
    "INSERT into book (name,author,category,description) VALUES ('天龙八部','金庸','文学','武侠小说')",
    "INSERT into book (name,author,category,description) VALUES ('鹿鼎记','金庸','文学','武侠小说')"
]

for (let i = 0; i < sqlarr.length; i++) {
    db.base(sqlarr[i], null, (result) => {
        console.log(result);
    })
};