const a = '222'
import moudle3Print from './module3.js'
import moudle2Print from './module2.js'

function moudle1Print() {
  moudle2Print('我是模块1中的moudle2Print')
  moudle3Print('我是模块1中的moudle3Print')
}

moudle1Print()