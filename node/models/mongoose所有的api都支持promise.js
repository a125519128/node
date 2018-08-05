var mongoose = require('mongoose')
var Schema = mongoose.Schema//架构，模式，模型
//连接数据库
mongoose.connect('mongodb://localhost/test')

//设计集合结构
 var blogSchema = new Schema({

    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

 var userSchema  = new Schema({
 	username:{
 		type:String,
 		require:true
 	},
 	password:{
 		type:String,
 		require:true
 	},
 	email:{
 		type:String,
 		require:true
 	}
 })
 //将文档结构发布为模型	
 //将User(大写名词单数) 生成为 users 集合名词 
 //返回模型对象
var User =  mongoose.model('User',userSchema);
//4. 使用User对数据库进行操作
var admin = new User({
	username: 'admin2',
	password: '123456',
	email: 'admin@admin.com'
})

// admin.save(function(err,ret){
// 	if(err){
// 		console.log('ERR'+err)
// 	}else{
// 		console.log('ok'+ret)
// 	}
// })


//用户注册 promise.js 一个请求也写错then的方式
//1，判断用户是否存在
//存在，结束注册
//不存在，注册（保存一条数据）
// User.find()
//   .then(function(data){
//     console.log(data)
//   })

User.findOne({username: 'asd'})
    .then(function(user){
      if(user){
        console.log("已经存在")
      }else{
        console.log("不存在");
        return new User({

          username:'asd',
          password:'123',
          email:'dasfas'
        }).save()
      }
    })
    .then(function(ret){
      //成功之后
    })

// 条件查
// User.findOne({username:'liyaqin',password:'123456'},function(err,ret){
// 	if(err){
// 		console.log('ERR'+err)
// 	}else{
// 		console.log('ok=='+ret)
// 	}
// })

//删除
// User.remove({username:'admin'},function(err,ret){
// 	if(err){
// 		console.log('ERR'+err)
// 	}else{
// 		console.log('ok=='+ret)
// 	}
// })

//修改
// User.findByIdAndUpdate('5b446a54a12e0d21004e3bc3',{password:'123'},function(err,ret){
// 	if(err){
// 		console.log('ERR'+err)
// 	}else{
// 		console.log('ok=='+ret)
// 	}
// })

