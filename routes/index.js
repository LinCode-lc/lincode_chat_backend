var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5') //md5加密函数
const { UserModel, ChatModel } = require('../db/models')
const filter = { password: 0, __v: 0 }


router.post('/register', function (req, res) {
  //获取请求参数
  const { username, password, type } = req.body
  console.log(username)
  //处理
  //判断用户是否存在
  UserModel.findOne({ username }, function (err, user) {
    if (user) {
      res.send({ code: 1, msg: '用户已存在' })
    } else {
      new UserModel({ username, type, password: md5(password) }).save(function (err, user) {
        res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })

        const data = { username, type, _id: user._id }
        res.send({ code: 0, data })
      })
    }
  })
  // if (username === 'admin') {  //注册会失败
  //   //返回失败的响应数据
  //   res.send({ code: 1, msg: '此用户已存在' })

  // } else {
  //   res.send({ code: 0, data: { id: '123', username, password } })
  // }
});

router.post('/login', function (req, res) {
  const { username, password } = req.body

  //第二个参数起到过滤的作用

  UserModel.findOne({ username, password: md5(password) }, filter, function (err, user) {
    if (user) {
      res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })
      res.send({ code: 0, data: user })
    } else {
      res.send({ code: 1, msg: '用户名或密码不正确' })
    }
  })
})

//更新用户信息的路由
router.post('/update', function (req, res) {
  //从请求的cookie中获取userid
  const userid = req.cookies.userid
  //如果不存在，直接返回一个提示信息
  if (!userid) {
    res.send({ code: 1, msg: '请先登录' })
    return
    //记得return，不然代码会继续往下执行
  }
  //存在，根据userid跟新数据库的user

  //得到提交的用户数据
  const user = req.body //没有id
  UserModel.findByIdAndUpdate({ _id: userid }, user, function (err, oldUser) {
    if (!oldUser) {
      //如果没有这个user存在，则应通知浏览器删除该cookie
      res.clearCookie('userid')
      res.send({ code: 1, msg: '请先登录' })

    } else {
      //准备返回一个user对象
      const { _id, username, type } = oldUser
      //Object.assign是es6合并对象的语法，因为node不想jsx可以用...运算符操作对象 即{oldUser,...user}
      const data = Object.assign({ _id, username, type }, user)
      res.send({ code: 0, data })
      return
    }
  })
})

//根据id获取用户信息
router.get('/user', function (req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return res.send({ code: 1, msg: '请先登录' })
  } else {
    UserModel.findOne({ _id: userid }, filter, function (error, user) {
      res.send({ code: 0, data: user })
    })
  }
})

//根据用户类型获取用户列表
router.get('/userlist', function (req, res) {
  const { type } = req.query
  UserModel.find({ type }, filter, function (err, users) {
    res.send({
      code: 0,
      data: users
    })
  })
})

//获取当前用户所有相关的聊天信息
router.get('/msglist', function (req, res) {
  //获取id
  const userid = req.cookies.userid
  console.log(userid)
  //查询所有的user
  UserModel.find(function (err, userDocs) {
    //包装所有user的列表成我们需要的数据  每个user的结构：{key:id,value:{username:xiaoming,header:头像1}}
    let users = {}
    users = userDocs.reduce((users, user) => {
      users[user._id] = { username: user.username, header: user.header }
      return users
    }, {})

    //查询userid相关的所有聊天
    ChatModel.find({ '$or': [{ from: userid }, { to: userid }] }, filter, function (err, chatMsgs) {
      res.send({
        code: 0,
        data: { users, chatMsgs }
      })
    })

  })


})


//修改指定消息为已读
router.post('/readmsg', function (req, res) {
  //修改的聊天因是我为收，别人发
  const from = req.body.from
  const to = req.cookies.userid
  ChatModel.update({ from, to, read: false }, { read: true }, { multi: true }, function (err, doc) {
    res.send({
      code: 0,
      data: doc.nModified
    })
  })
})
module.exports = router;
