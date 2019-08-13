/**
 * 业务模块
 */
const data = require('./data.json');
const path = require('path');
const fs = require('fs');


//自动生成图书编号（自增）
let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    })
    return Math.max.apply(null, arr);
}

//渲染主页面
exports.showIndex = (req, res) => {
    res.render('index', { list: data });
}

//跳转到添加图书的页面
exports.toAddBook = (req, res) => {
    res.render('addBook', {})
}

//添加图书保存数据
exports.addBook = (req, res) => {
    //获取表单数据
    let info = req.body;
    let book = {};
    for (let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    data.push(book);
    //把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        //文件写入成功之后重新跳转到主页面
        res.redirect('/');
    });
}

//跳转编辑图书页面
exports.toEditBook = (req, res) => {
        //req.query使用方法
        //此属性是一个对象，包含路由中每个查询字符串参数的属性。如果没有查询字符串，则为空对象，{}.
        //GET /search?q=tobi+ferret
        //req.query.q
        //=> "tobi ferret"
        //GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
        //req.query.order
        //=> "desc"

        let id = req.query.id;
        let book = {};
        data.forEach((item) => {
            if (id == item.id) {
                book = item;
                return;
            }
        });
        res.render('editBook', book);
    }
    //编辑图书更新数据
exports.editBook = (req, res) => {
    let info = req.body;
    data.forEach((item) => {
        if (info.id == item.id) {
            for (let key in info) {
                item[key] = info[key];
            }
            return;
        }
    });
    //把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        //文件写入成功之后重新跳转到主页面
        res.redirect('/');
    });
}

//删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.query.id;
    data.forEach((item, index) => {
            if (id == item.id) {
                //删除数组的一下给数据
                data.splice(index, 1);
                //data是从文件中读取的缓存，存放在内存中，删除只删除了内存中的数据
                //需要把删除后的内存（文件），更新到文件中（重新写入文件，其实是覆盖）
            }
            return;
        })
        //把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        //文件写入成功之后重新跳转到主页面
        res.redirect('/');
    });
}