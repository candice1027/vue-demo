const fs = require('fs')
const path = require('path')

const mockBaseURL = 'http://note-server.hunger-valley.com'//'http:/localhost:8080'
const realBaseURL = 'http://note-server.hunger-valley.com'

exports.config = function({ isDev = true} = { isDev : true}) {
    //传默认参数isDev  如果没有传的话 就默认为isDev = true  isDev代表是否是开发环境
    let fileTxt = `
    module.exports = {
        baseURL : '${isDev ? mockBaseURL : realBaseURL}'
    }`
    fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'),fileTxt)
    //上面代码是将内容写入到config-baseURL.js这个文件中
}