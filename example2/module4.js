const moudle4Print = function (print = '') {
  if(print) {
    console.log(print)
    moudle4Print()
    return
  }
  console.log('我是模块4中的moudle4Print')
}
export default moudle4Print

// todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug
