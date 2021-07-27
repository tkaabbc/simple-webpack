const moudle4Print = function (print = '') {
  if(print) {
    console.log(print)
    moudle4Print()
    return
  }
  console.log('我是模块4中的moudle4Print')
}
export default moudle4Print
