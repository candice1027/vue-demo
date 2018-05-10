import axios from 'axios'
import baseURLConfig from './config-baseURL'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseURLConfig.baseURL;
axios.defaults.withCredentials = true;//代表允许浏览器发送cookie

export default function request (url, type="GET",data={}) {
    return new Promise((resolve,reject) => {
        let option = {
            url,
            method: type,
            validateStatus: function (status) {
                return (status >=200 && status < 300) || status === 400
            }
        }
    
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        } 

        axios(option).then(res => {
            if (res.status === 200) {
               resolve(res.data)
            } else {
                Message({
                    type: 'error',
                    message: res.data.msg
                })
               reject(res.data)
            }
        }).catch(err => {
            Message({
                type: 'error',
                message: err.data.msg

            })
            reject({msg: '网络异常'})
        })
    })   
}
