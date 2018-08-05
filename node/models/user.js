var mongoose = require('mongoose')

// 连接数据库
// G:\Ksoftware\MongoDB\Server\4.0\data数据库地址
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {//创建时间
    type: Date,
    // 注意：这里不要写 Date.now() 因为会即刻调用
    // 这里直接给了一个方法：Date.now
    // 当你去 new Model 的时候，如果你没有传递 create_time ，则 mongoose 就会调用 default 指定的Date.now 方法，使用其返回值作为默认值
    default: Date.now
  },
  last_modified_time: {//修改时间
    type: Date,
    default: Date.now
  },
  avatar: {//头像
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {//昵称
    type: String,
    default: ''
  },
  gender: {//性别
    type: Number,
    enum: [-1, 0, 1],//枚举类型
    default: -1
  },
  birthday: {//生日
    type: Date
  },
  status: {//权限设置
    type: Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可以登录
    enum: [0, 1, 2],
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)
