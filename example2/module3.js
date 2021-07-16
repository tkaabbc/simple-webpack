import moudle4Print from './module4.js'
const moudle3Print = function (print = '') {
  if(print) {
    console.log(print)
    moudle3Print()
    return
  }
  moudle4Print('我是模块3中的moudle4Print')
  console.log('我是模块3中的moudle3Print')
}
export default moudle3Print

// todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug
