import moudle3Print from './module3.js'
const moudle2Print = function (print='') {
  if(print) {
    console.log(print)
    moudle2Print()
    return
  }
  console.log('我是模块2中的moudle2Print')
  moudle3Print('我是模块2中的moudle3Print')
}
export default moudle2Print