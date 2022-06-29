const mongoose = require('mongoose')

const md5 = require('blueimp-md5') //md5加密函数
mongoose.connect('mongodb://106.53.151.173:27017/findjob_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

var db = mongoose.connection;

db.on('connected', function () {
    console.log('链接成功')
});

// 得到特定集合的model
// 1.定义schema(描述文档的结构)
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    header: { type: String }
})
//2.定义Model(与集合对应，可以操作集合) ,返回的是一个构造函数
const UserModel = mongoose.model('user', userSchema)   //数据库要有users这个集合，比这多个s

// 通过mode实例对其增删改查
function testSave() {
    const userModel = new UserModel({ username: "tom", password: md5('123'), type: "dashen" })
    userModel.save(function (error, user) {
        console.log('save()', error, user)
    })
}
testSave()