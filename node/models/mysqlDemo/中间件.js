 var http = require('http')

var server = http.createServer(function(req,res){
	//解析get
	//解析post
	//解析cookie
	//处理session
	//使用模版
	console.log(req.query)
	console.log(req.body)
	console.log(req.cookies)
	console.log(req.session)
	var urlObj = url.parse(req.url,true)//get
	req.query = urlObj.query 
	//解析post参数
	req.body = {
		foo:'bar'
	}

	//
	req.cookis={isLogin : true}

	req.session = {}



})

server.listen(3000,function(){
	console.log("3000, running")
})


app.use(function(req,res,next){
	console.log('2')
	next()
})
app.use(function(req,res,next){
	console.log('3')
	next()
})


app.use('/b',function(req,res,next){
	console.log('2')
	next()
})
