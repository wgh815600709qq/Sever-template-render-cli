function toggleMenu() { // 【移动端】菜单切换
  var Ul = document.querySelector('ul')
  if (!Ul.style.display || Ul.style.display === 'none') {
    Ul.style.display = 'block'
  } else {
    Ul.style.display = 'none'
  }
}

window.onload = function () {
  console.log('ready')
  var ajax = new Ajax()
  ajax.get('/getUser').then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}