const { ChatModel } = require('../db/models')

module.exports = function (server) {
    //得到IO对象,针对任意浏览器
    const io = require('socket.io')(server, {
        cors: {
            origin: "*"
        }
    })

    //监视链接(当有一个客户连接上时回调)
    io.on('connection', function (socket) {
        console.log('socket connect')
        //绑定sendMsg监听，接受客户端发送的信息，socket:针对某一浏览器 
        socket.on('sendMsg', function ({ from, to, content }) {
            console.log('服务器接收到浏览器的消息', { from, to, content })
            //准备chatMsg对象相关的数据
            const chat_id = [from, to].sort().join("_")  //from_to或to_from 排序后再拼接就一样了
            const create_time = Date.now()
            new ChatModel({ from, to, content, chat_id, create_time }).save(function (err, chatMsg) {
                io.emit('receiveMsg', chatMsg)
            })
            //向客户端发送消息（名称，数据）
            //发给所有连接上服务器的浏览器
            // io.emit('receiveMsg', data.name + '_' + data.date)
            //发给当前socket对应的客户端
            // socket.emit('receiveMsg', data.name + '_' + data.date)
            // console.log('服务器向浏览器发送消息' + data)
        })
    })
}
