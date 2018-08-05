const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/test');
//创建一个模型,设计数据库，动态的，的在代码中设计数据库
//mongoose包让你设计编写过程变简单
//表名:cat 数据结构:
const Cat = mongoose.model('Cat', { name: String });

for (var i = 0; i <100; i++) {
	//实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });
	//持久化保存kitty实例
	kitty.save().then(() => console.log('meow'));
}