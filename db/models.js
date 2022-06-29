const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/findjob', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,

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
    header: { type: String },//头像名称
    post: { type: String }, //职位
    info: { type: String },//个人或职位简介
    company: { type: String }, //公司名称
    salary: { type: String },//薪水
})

//2.定义Model(与集合对应，可以操作集合) ,返回的是一个构造函数
//数据库要有users这个集合，比这多个s
const UserModel = mongoose.model('user', userSchema)


exports.UserModel = UserModel

//定义chats集合的文档结构
const chatSchema = mongoose.Schema({
    from: { type: String, required: true },//发送用户的id
    to: { type: String, required: true },//接收用户的id
    chat_id: { type: String, required: true },//聊天id,由form和to组成，1发个2 2发给1 是同个id
    content: { type: String, required: true },
    read: { type: Boolean, default: false },
    create_time: { type: Number }
})
//定义操作chat集合的model
const ChatModel = mongoose.model('chat', chatSchema)
//向外暴漏Model
exports.ChatModel = ChatModel