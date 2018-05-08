import Vue from 'vue'
import { EBUSY } from 'constants';

export default new Vue()

// 使用方法：
// import bus from '@/helpers/bus'

// bus.$on('test', msg => {
//     console.log(msg)
// }) 监听事件

//bus.$emit('test','hello world') 触发事件
