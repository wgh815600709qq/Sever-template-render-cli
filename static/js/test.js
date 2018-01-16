window.onload = function () {
  console.log('ready')
}
var ajax = new Ajax()
function add () {
  ajax.post('/test/add',{name:'zhangSan', username: 'zhangSan', password: '123456'}).then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}

function query() {
  ajax.get('/test/query',{name:'zhangSan'}).then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}

function drop() {
  ajax.post('/test/delete',{name:'zhangSan'}).then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}

function edit() {
  ajax.post('/test/edit/12',{_password: '654321'}).then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}