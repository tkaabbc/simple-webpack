
    (function(modules){
      //创建require函数， 它接受一个模块ID（这个模块id是数字0，1，2） ，它会在我们上面定义 modules 中找到对应是模块.
      function require(id){
        const [fn, mapping] = modules[id];
        function localRequire(relativePath){
          //根据模块的路径在mapping中找到对应的模块id
          return require(mapping[relativePath]);
        }
        const module = {exports:{}};
        //执行每个模块的代码。
        fn(localRequire,module,module.exports);
        return module.exports;
      }
      //执行入口文件，
      require(0);
    })({0:[
      function (require, module, exports){
        "use strict";

var _module = _interopRequireDefault(require("./module3.js"));

var _module2 = _interopRequireDefault(require("./module2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = '222';

function moudle1Print() {
  (0, _module2.default)('我是模块1中的moudle2Print');
  (0, _module.default)('我是模块1中的moudle3Print');
}

moudle1Print();
      },
      {"./module3.js":1,"./module2.js":2},
    ],1:[
      function (require, module, exports){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = _interopRequireDefault(require("./module4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moudle3Print = function moudle3Print() {
  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (print) {
    console.log(print);
    moudle3Print();
    return;
  }

  (0, _module.default)('我是模块3中的moudle4Print');
  console.log('我是模块3中的moudle3Print');
};

var _default = moudle3Print; // todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug

exports.default = _default;
      },
      {"./module4.js":3},
    ],2:[
      function (require, module, exports){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = _interopRequireDefault(require("./module3.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moudle2Print = function moudle2Print() {
  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (print) {
    console.log(print);
    moudle2Print();
    return;
  }

  console.log('我是模块2中的moudle2Print');
  (0, _module.default)('我是模块2中的moudle3Print');
};

var _default = moudle2Print;
exports.default = _default;
      },
      {"./module3.js":4},
    ],3:[
      function (require, module, exports){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var moudle4Print = function moudle4Print() {
  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (print) {
    console.log(print);
    moudle4Print();
    return;
  }

  console.log('我是模块4中的moudle4Print');
};

var _default = moudle4Print; // todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug

exports.default = _default;
      },
      {},
    ],4:[
      function (require, module, exports){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = _interopRequireDefault(require("./module4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moudle3Print = function moudle3Print() {
  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (print) {
    console.log(print);
    moudle3Print();
    return;
  }

  (0, _module.default)('我是模块3中的moudle4Print');
  console.log('我是模块3中的moudle3Print');
};

var _default = moudle3Print; // todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug

exports.default = _default;
      },
      {"./module4.js":5},
    ],5:[
      function (require, module, exports){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var moudle4Print = function moudle4Print() {
  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (print) {
    console.log(print);
    moudle4Print();
    return;
  }

  console.log('我是模块4中的moudle4Print');
};

var _default = moudle4Print; // todo test 感觉在module3中再引入module4就没办法实现了。这个没有广度遍历有bug

exports.default = _default;
      },
      {},
    ],})
  