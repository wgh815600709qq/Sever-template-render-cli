class Ajax { // 原生ajax类
  constructor () {
  }
  get (url, params) {
    var promise = new Promise ((resolve, reject) => {
      var oAjax = new XMLHttpRequest() // IE6以上, 创建
      if (params) {
        let param = queryParams(params)
        oAjax.open('GET',`${url}?${param}`,true) // 连接
      } else {
        oAjax.open('GET',`${url}`,true) // 连接
      }
      oAjax.send() // 发送
      oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
            resolve(oAjax.responseText)
          } else {
            reject('error')
          }
        }
      }
    })
    return promise
  }
  post (url, params) {
    var promise = new Promise ((resolve, reject) => {
      var oAjax = new XMLHttpRequest() // IE6以上, 创建
      oAjax.open('POST',`${url}`) // 连接
      oAjax.setRequestHeader('Content-type', 'application/json')
      oAjax.send(JSON.stringify(params)) // 发送
      oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
            resolve(oAjax.responseText)
          } else {
            reject('error')
          }
        }
      }
    })
    return promise
  }
}

function  queryParams (params) { // 【get请求】拼接字符串
  if (!params) return params
  let str = ''
  for(i in params) {
    str = str + i + '=' + params[i] + '&'
  }
  str = str.substring(0, str.length - 1) // 去&
  return str
}