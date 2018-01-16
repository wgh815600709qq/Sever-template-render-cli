const express = require('express')
var path = require('path')
var app = express()
var favicon = require('serve-favicon')
var bodyParser = require('body-parser') // 请求头解析中间件
var opn = require('opn')
var config = require('./config/index.js')
var fs = require('fs')
var clientErrorHandler = require('./middleware/clientErrorHandler.js')
var errorHandler = require('./middleware/errorHandler.js')
if (!process.env.NODE_ENV) {
  process.env = config.dev.env
}
app.set('views', path.join(__dirname, 'views')) //指定模板位置
app.set("view engine", 'ejs') //指定模板引擎
app.use(express.static('static')) // 静态资源
var index = require('./router/index.js')
var test = require('./router/test.js')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 分层路由
app.use('/', index)
app.use('/test', test)

// 错误处理
app.use(clientErrorHandler)
app.use(errorHandler)
var server = app.listen(process.env.port, function() {
  var url = 'http://' + process.env.host + ':' + process.env.port
  // if (!process.env.browerIsOpen) { // 自动打开浏览器
  //   opn(url)
  //   let data = fs.readFileSync(path.join(__dirname, './config/dev.env.js'))
  //   let str = data.toString().match(/\{[^*]+\}/)[0]
  //   let devEnv = JSON.parse(str)
  //   devEnv.browerIsOpen = true // 写入文件
  //   fs.writeFileSync(path.join(__dirname, './config/dev.env.js'), 'module.exports = ' + JSON.stringify(devEnv, null, 2) )
  // }
  console.log('express项目启动http://%s:%s', process.env.host, process.env.port)
})