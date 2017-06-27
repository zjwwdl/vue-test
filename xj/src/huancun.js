/**
 * Created by zhengjinwen on 2017/6/2.
 */
//常量
const STORAGE_KEY = 'todos-vuejs'
//导出两个方法
export default{
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
