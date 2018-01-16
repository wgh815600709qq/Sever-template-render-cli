var express = require('express')
var router = express.Router()

// 渲染
router.get('/', (req, res, next) => {
  res.render('index', {menu: [{name:'menu1'},{name: 'menu2'},{name: 'menu3'},{name: 'menu4'}]})
})

// 接口
router.get('/getUser', (req, res, next) => {
  res.send({user: 'jacket'})
})

module.exports = router