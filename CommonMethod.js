/**
 * 发送异步请求
 * @Author 七年
 * @param data
 * data {
 *     url: url(string),
 *     data: 数据(string),
 *     type: post或get(string),
 *     success: 请求成功后的回调函数(function)
 * }
 */
function ajax_(data) {
    // 创建一个请求对象
    let xhr = new XMLHttpRequest();

    // 建立与服务端的连接
    xhr.open(data.type, data.url);

    // 设置请求头信息，告诉服务器让数据以表单的形式传递过去
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    // 向服务端发送请求
    data.type === 'get' ? xhr.send() : xhr.send(data.data)

    // 接收服务端返回的数据
    xhr.onreadystatechange = function () {
        // xhr.readyState === 4 代表数据请求完成
        // xhr.status === 200 代表数据返回成功
        if (xhr.readyState === 4 && xhr.status === 200) {
            data.success(xhr.responseText)
        }
    }
}

/**
 * 发送异步请求
 * @Author 七年
 * @param url url
 * @param data 发送的数据
 * @param type get或post
 * @param func 请求成功后的回调函数
 */
function ajax(url, data, type, func) {
    // 创建一个请求对象
    let xhr = new XMLHttpRequest();

    if (arguments.length === 3) { // js中没有方法的重载，故通过判断参数长度来实现
        func = type
        type = data
    }

    // 建立与服务端的连接
    xhr.open(type, url);

    // 设置请求头信息，告诉服务器让数据以表单的形式传递过去
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    // 向服务端发送请求
    arguments.length === 3 ? xhr.send() : xhr.send(data)

    // 接收服务端返回的数据
    xhr.onreadystatechange = function () {
        // xhr.readyState === 4 代表数据请求完成
        // xhr.status === 200 代表数据返回成功
        if (xhr.readyState === 4 && xhr.status === 200) {
            func(xhr.responseText)
        }
    }

}

/* --------用法案例--------- */
// post方法
// ajax(
//     'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login',
//     'username=' + userName + '&pwd=' + pwd,
//     'post',
//     function (result) {
//         let str = JSON.parse(result).data;
//         if (str === '登录成功') {
//             location.href = "DropletService.html";
//         } else {
//             alert(responseData.data);
//         }
//     }
// )
//get方法
// ajax(
//     'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/aboutus',
//     'get',
//     function (result) {
//         let obj = JSON.parse(result).data
//         document.getElementById('title').innerHTML = obj.title
//         document.getElementById('subTitle').innerHTML = obj.subTitle
//         document.getElementById('info').innerHTML = obj.info
//     }
// )