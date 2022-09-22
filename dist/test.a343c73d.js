// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 模块化 导出css的字符串

var string = "\n\n/* \u65B0\u7248\u76D2\u5B50 */\n/* \u5757\u7EA7\u5143\u7D20\uFF0C\u5176 width \u5C5E\u6027\u7684\u503C\u4F1A\u81EA\u52A8\u6491\u6EE1\u7236\u5143\u7D20\u7684 width \u533A\u57DF heigt\u53EA\u4F1A\u6491\u5F00\u7236\u5143\u7D20\u5185\u5BB9\u7684heigth*/\n/* margin: 0; padding: 0;!*\u6307\u6240\u6709\u7684\u6807\u7B7E,\u8FD9\u91CC\u662F\u628A\u6240\u6709\u6807\u7B7E\u7684\u5185\u5916\u8FB9\u8DDD\u8BBE\u4E3A0 */\n// \u907F\u514D* \u5F71\u54CD\u5230button\u7684\u76D2\u6A21\u578B\u6837\u5F0F,\n.skin *{box-sizing: border-box; margin: 0; padding: 0;} \n::after ,::before {box-sizing: border-box;}\n/* \u9F3B\u5B50\u7684\u601D\u8DEF\uFF1A\u505A\u4E00\u4E2A\u4E09\u89D2\u5F62 */\n\nbody {\n/* \u80CC\u666F\u8272\u7684\u7B2C\u4E8C\u79CD\u5199\u6CD5 */\n    background-color: yellow;\n}\n\n.skin{\n    position: relative;\n    background: yellow;\n    height: 100vh;\n}\n.nose{\n    /* \u5C06\u9F3B\u5B50\u7684\u989C\u8272\u6539\u4E3A\u9ED1\u8272 */\n    border: 10px solid black;\n    \n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    /* \u4F7F\u9F3B\u5B50\u56FE\u50CF\u53D8\u4E3A\u4E09\u89D2\u5F62  \u65B9\u6CD5\uFF1A\u628A\u5E95\u90E8\u53BB\u6389\uFF0C\u5DE6\u53F3\u989C\u8272\u8BBE\u4E3A\u900F\u660E \u5BBD\u9AD8\u8BBE\u4E3A0px*/\n    border-color: black transparent transparent;\n    border-bottom: none;\n    /* \u5982\u679C\u5143\u7D20\u88AB\u8986\u76D6\u4E86\u5219\u7528\u5C42\u53E0\u4E0A\u4E0B\u6587\u628A\u5143\u7D20\u4F18\u5148\u653E\u5728\u4E0A\u9762 */\n    z-index: 10;\n\n\n\n}\n\n/* \u628A\u6BD4\u5361\u4E18\u9F3B\u5B50\u8BBE\u4E3A\u5706\u5F27\u5F62 */\n\n.yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    /* border: 1px solid green; */\n    /* ! \u8D1F\u503C\u7684\u610F\u601D\u662F  \u5728\u8FB9\u6846\u5916\u90E8\u79BB\u9876\u90E8\u7684\u8DDD\u79BB,\u6240\u4EE5\u8D1F\u503C\u8D8A\u5927\u79BB\u57FA\u70B9\u8D8A\u8FDC,\u540C\u7406left\u662F\u8DDD\u79BB\u57FA\u70B9\u7684\u8FB9\u8DDD*/\n    /* \u5FAE\u8C03top,radius,\u4F7F\u5634\u5507\u63A5\u8FD1\u539F\u56FE */\n    top:-16px;\n    left: -10px;\n    /* \u5DE6\u53F3\u8FB9\u89D2\u5706\u5F62\uFF0C \u4E0B\u8FB9\u4E24\u8FB9\u8BBE\u7F6E\u6CA1\u6709\u989C\u8272 */\n    border-radius: 14px 14px 0 0 ; \n    /* \u80CC\u666F\u989C\u8272\u7EA2\u8272 */\n    background:black;\n\n\n    \n\n}\n\n/* \u773C\u775B */\n.eye {\n    border: 2px solid #000;\n    border-radius:50%;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    /* \u8D1F\u503C\u600E\u4E48\u7406\u89E3\uFF1F */\n    margin-left: -32px;\n    background: #303031;\n    \n}\n\n/* \u773C\u775B\u4E2D\u7684\u767D\u8272\u56FE\u50CF,\u4F7F\u7528\u4F2A\u5143\u7D20 */\n\n/* relative\u5B9A\u4F4D\u57FA\u70B9\u662F\u5143\u7D20\u672C\u8EAB */\n.eye::before{\n    content: '';\n    border:  2px solid 000;\n    width: 32px;\n    height: 32px;\n    /* \u4F2A\u5143\u7D20\u9ED8\u8BA4\u4E3A \u5185\u8054\u5143\u7D20,\u5185\u8054\u5143\u7D20\u5BBD\u9AD8\u8BBE\u7F6E\u65E0\u6548,\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20 */\n    display: block;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    left: 4px;\n    \n\n}\n\n/* \u5DE6\u773C */\n.eye.left {\n    /* ! */ \n    transform: translateX(-100px);\n}\n/* \u53F3\u773C */\n.eye.right {\n     /* ! */\n    transform: translateX(100px);\n}\n\n/* \u5634\u90E8--> \u7B2C\u4E09\u6B65\u7ED8\u5236 \u7684\u4E0A\u90E8\u56FE\u6848 */\n.mouth {\n    /* \u5634\u5DF4\u4F4D\u7F6E\u5927\u5C0F */\n    /* \u5168\u90E8\u5B8C\u6210\u540E\u6700\u540E\u53BB\u9664\u8FB9\u6846\uFF0C\u8FB9\u6846\u7684\u4F5C\u7528\u662F\u5BF9\u5634\u5507\u8FDB\u884C\u4FEE\u6539\u65F6\u4F5C\u4E3A\u8DDD\u79BB\u7684\u53C2\u7167\u4F7F\u7528\uFF0C\u56E0\u6B64\u7528\u5B8C\u540E\u53BB\u9664 */\n    /* border:1px solid red ; */\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 183px;\n    /* ? */\n    margin-left:-100px;\n}\n\n\n/* \u5634\u5507\u4E0A\u534A\u90E8\u601D\u8DEF:  \u5F53\u4F5C\u4E00\u4E2A\u692D\u5706\u5F62\u7684\u56DB\u5206\u4E4B\u4E00 */\n\n\n/* \u5C06\u4E0A\u5634\u5507\u6574\u4F53\u8C03\u6574\u4F4D\u7F6E-->\u52A0\u9AD8 */\n.mouth .up {\n    position: relative;\n    /* \u4E0D\u65AD\u7684\u5FAE\u8C03\u4E0E\u539F\u578B\u4E00\u81F4 */\n    top: -20px;\n    z-index: 1;\n}\n\n\n\n\n\n/* ! \u5982\u679C\u9047\u5230\u6837\u5F0F\u4E0D\u5BF9 \u4E00\u822C\u6709\u54EA\u4E9B\u8C03\u8BD5\u65B9\u6CD5\u53EF\u4EE5\u5FEB\u901F\u89E3\u51B3\u95EE\u9898,\u6D4F\u89C8\u5668\u63A7\u5236\u53F0!\u6D4F\u89C8\u5668F12\u8C03\u8BD5-->\n\u4E00\u822C\u6837\u5F0F\u5B8C\u5168\u6CA1\u6709\u7684\u539F\u56E0\u662F1.html\u6807\u7B7E\u5199\u9519,2.css\u5B9A\u4F4D\u5143\u7D20\u5199\u9519, */\n\n\n/* \u7531\u4E8E\u4E0B\u5634\u5507\u80CC\u666F\u8272\u8986\u76D6\u4E86\u4E0A\u5634\u5507\u7684\u533A\u57DF\uFF0C\u4F7F\u7528\u4E0A\u5634\u5507\u53BB\u9664\u80CC\u666F\u8272\uFF0C\u8BBE\u4E3A\u9EC4\u8272 */\n.mouth .up .lip {\n    /* \uFF1F\u4E3A\u4EC0\u4E48\u8BF4\u8FD9\u91CC\u662F\u900F\u660E\u8272\uFF01 \u76D2\u5B50\u672A\u8BBE\u7F6E\u80CC\u666F\u8272\u9ED8\u8BA4\u4E3A\u900F\u660E\u8272 */\n    background: yellow;\n}\n\n.mouth .up  .lip.left {\n    border: 5px solid black;\n    /* border-bottom: 5px solid black;\n    border-left: 3px solid black; */\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 0 50px;\n    \n    \n    /* \u900F\u660E\u8272? \u4E3A\u4EC0\u4E48\u8FB9\u6846\u989C\u8272\u662F\u7EFF\u8272\u7684? */\n    border-top-color: transparent;\n    border-right-color: transparent;\n    /* \u4F7F\u7528rotate\u4F7F\u5634\u5507\u7684\u4F4D\u7F6E\u4E0E\u539F\u56FE\u4E00\u81F4,\u4E0D\u65AD\u8C03\u6574\u503E\u659C\u89D2\u5EA6 */\n\n    transform: rotate(-18deg) translateX(-53px) ;\n    position: absolute;\n    /* \u5DE6\u4FA7\u8DDD\u79BB  \u8BBE\u7F6E\u4E3A\u8DDD\u79BB\u57FA\u70B9\u4E00\u534A */\n    left: 50%;\n    /* \u5DE6\u4FA7\u5916\u8FB9\u8DDD  \u8BBE\u7F6E\u4E3A \u8DDD\u79BB\u57FA\u70B9 -50px \u7684\u957F\u5EA6 ? */\n    margin-left: -50px;\n}\n\n\n\n/* \u590D\u5236 \u4E0A\u5634\u5507\u5DE6\u8FB9\u90E8\u5206\u590D\u5236\u5230\u53F3\u8FB9 \u8FDB\u884C\u4FEE\u6539 */\n\n\n.mouth .up  .lip.right {\n    border: 5px solid black;\n    /* border-bottom: 5px solid black;  \n    border-left: 3px solid black;  */\n    \n    height: 30px;\n    width: 100px;\n    /* \u5706\u89D2\u4E0E\u53F3\u4FA7\u5FAE\u8C03,\u8BBE\u5DE6\u4E0B\u8FB9\u4E3A\u5706\u89D2 */\n    border-radius: 0 0 50px 0px;\n    \n    position: absolute;\n    /* \u900F\u660E\u8272? \u4E3A\u4EC0\u4E48\u8FB9\u6846\u989C\u8272\u662F\u7EFF\u8272\u7684? */\n    border-top-color: transparent;\n    border-right-color: transparent;\n    /* \u4F7F\u7528rotate\u4F7F\u5634\u5507\u7684\u4F4D\u7F6E\u4E0E\u539F\u56FE\u4E00\u81F4,\u4E0D\u65AD\u8C03\u6574\u503E\u659C\u89D2\u5EA6 */\n    /* \u4E0E\u5DE6\u4E0A\u5634\u5507\u76F8\u53CD-->\u8FDB\u884C\u65CB\u8F6C \u6B63\u503C,  */\n    transform: rotate(18deg) translateX(53px);\n\n    left:50%;\n    /* \u5DE6\u4FA7\u5916\u8FB9\u8DDD  \u8BBE\u7F6E\u4E3A \u8DDD\u79BB\u57FA\u70B9 -50px \u7684\u957F\u5EA6 ? */\n    margin-left: -50px;\n}\n\n/* \u56E0\u4E3A\u4E0A\u9762\u7684 css\u7ED8\u5236 \u4E0A\u5634\u5507\u7684\u5F62\u72B6\u591A\u4E86\u4E00\u4E2A\u5BBD,\u6240\u6709\u4F7F\u7528\u4F2A\u5143\u7D20\u53BB\u9664 \u8BE5\u5BBD\u7EBF */\n.mouth .up .lip.left::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    /* border: 1px solid green; */\n    /* \u79FB\u52A8\u81F3\u76EE\u6807\u8FB9\u6846\u5E76\u8986\u76D6\u8BE5\u8FB9\u6846 */\n    right: -5px;\n    bottom: 0px;\n    /* \u5B58\u5728\u7A7A\u767D\u75D5\u8FF9 */\n    background:yellow ;\n}\n\n\n/* \u53F3\u4E0A\u5634\u5507 \u4E0E\u5DE6\u4FA7\u4E00\u6837 \u7528\u4F2A\u5143\u7D20 \u53BB\u9664\u591A\u4F59\u7684\u8FB9\u6846\uFF0C\u590D\u5236\u4FEE\u6539\u53F3\u4FA7\u7684\u4EE3\u7801\u5373\u53EF */\n.mouth .up .lip.right::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    /* border: 1px solid green; */\n    /* \u4FEE\u6539\u4E3A \u5411\u5DE6\u504F\u79FB -5px\u8986\u76D6\u539F\u6709\u591A\u4F59\u8FB9\u6846 */\n    left: -5px;\n    bottom: 0px;\n    /* \u5B58\u5728\u7A7A\u767D\u75D5\u8FF9 */\n    background:yellow ;\n}\n\n\n\n/* \u4E0B\u5634\u5507\u601D\u8DEF\uFF1A \u5148\u7528radius\u5706\u89D2 \u753B\u4E00\u4E2A \u4E0D\u89C4\u5219\u7684 \u692D\u5706 \u53D61/6\uFF0C\u518D\u753B\u4E00\u6247\u5F62 \u53D6\u4E0A\u534A\u90E8\u5206\uFF0C\u5C06\u4E24\u4E2A\u56FE\u5F62\u7ED3\u5408\u8D77\u6765\u5373\u53EF */\n/* \u692D\u5706 */\n.mouth .down {\n    /* \u8BBE\u5B9A\u4E0B\u5634\u5507\u7684\u533A\u57DF */\n    /* border:  1px solid red; */\n    height:  160px;\n    position: absolute;\n    top: 5px;\n    bottom: 0px;\n    width: 100%;\n    /* \u9690\u85CF\u5143\u7D20\u5185\u6EA2\u51FA\u7684\u90E8\u5206 */\n    overflow: hidden;\n}\n\n\n/* \u6247\u5F62 */\n.mouth .down .sanxing {\n    border:3px solid black ;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left:50% ;\n    margin-left: -75px;\n    /* \u4F7F\u7528\u5706\u89D2\u7ED8\u5236\u4E0B\u5634\u5507 -->\u9047\u5230\u65E0\u6CD5\u89E3\u51B3\u7684\u95EE\u9898\u53EF\u4EE5\u767E\u5EA6\u67E5\u89E3\u51B3\u7684\u65B9\u6848\uFF0C\u5982\u8FD9\u91CC\u5982\u4F55\n    \u4F7F\u7528\u5706\u89D2radius\u53BB\u7ED8\u5236\u4E0B\u5634\u5507*/\n    border-radius: 75px /200px;\n    background:#9B000A;\n    overflow: hidden;\n}\n\n\n/* \u820C\u5934\u7684\u5236\u4F5C\uFF0C \u5728\u6247\u5F62\u4E2D  \u6DFB\u52A0\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u5BF9\u5B50\u5143\u7D20\u8FDB\u884C \u6837\u5F0F\u4FEE\u6539 */\n.mouth .down .sanxing .yuan1 {\n    /* border: 1px solid green; */\n    width: 200px;\n    height: 300px;\n    /* \u521D\u59CB\u4F4D\u7F6E\u5728\u7236\u5143\u7D201000px\u9AD8\u5EA6\u7684\u5730\u65B9\uFF0C\u6240\u4EE5\u9875\u9762\u4E0D\u53EF\u89C1 \uFF0C\u8FDB\u884C\u5B9A\u4F4D*/\n    position: absolute;\n    bottom: -179px;\n    left: 50%;\n    margin-left:  -100px; \n    border-radius: 100px;\n    background:  #ff485f;;\n\n}\n\n \n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n\n\n}\n\n.face.left {\n    /* position: absolute; */\n    /* ?\u5982\u4F55\u907F\u514Dcss\u7684\u62FC\u5199\u9519\u8BEF\uFF0C\u6709\u6CA1\u6709\u63D2\u4EF6 */\n    transform:  translateX(-180px);\n    background: red;\n    border-radius: 50%;\n}\n\n.face.right {\n    transform:  translateX(180px);\n    background: red;\n    border-radius: 50%;\n}  \n\n\n/* \u9F3B\u5B50\u6643\u52A8\u7684\u6548\u679C\uFF0C\u4F7F\u7528\u4F2A\u7C7B\u5EFA\u7ACB\u4E00\u4E2A\u6837\u5F0F\uFF0C\n\u518D\u7528hover -->\u89E6\u53D1 \u9009\u62E9\u9F20\u6807\u6307\u9488\u6D6E\u52A8\u5728\u5176\u4E0A\u7684\u5143\u7D20\uFF0C\u5E76\u8BBE\u7F6E\u5176\u6837\u5F0F\uFF1A*/\n\n/* \n@keyframes\u80FD\u591F\u521B\u5EFA\u52A8\u753B\u3002 \u521B\u5EFA\u52A8\u753B\u7684\u539F\u7406\u662F\u5C06\u4E00\u5957 CSS \u6837\u5F0F\u9010\u6E10\u53D8\u5316\u4E3A\u53E6\u4E00\u5957\u6837\u5F0F\u3002\nanimation\u5C5E\u6027\u63A7\u5236\u52A8\u753B\u7684\u5916\u89C2\uFF1A\nanimation-name\u8BBE\u7F6E\u52A8\u753B\u7684\u540D\u79F0\uFF0C \u4E5F\u5C31\u662F\u8981\u7ED1\u5B9A\u7684\u9009\u62E9\u5668\u7684@keyframes\u7684\u540D\u79F0\u3002\nanimation-duration\u8BBE\u7F6E\u52A8\u753B\u6240\u82B1\u8D39\u7684\u65F6\u95F4,\n@keyframes+hover \u53EF\u4EE5\u5B9E\u73B0\u70B9\u9F20demo\u6807\u60AC\u505C\u5728\u5143\u7D20\uFF08\u6309\u94AE\uFF09\u4E0A\u65F6\uFF0C\u5B9E\u73B0\u64AD\u653E\u52A8\u753B\u6548\u679C\uFF1B \n\n \u8BED\u6CD5\u5982\u4E0B */\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n\n    }\n    33%{\n        transform: rotate(15deg);\n\n    }\n    66%{\n        transform: rotate(-15deg);\n        \n    }\n    100%{\n        transform: rotate(0deg);\n        \n    }\n}\n.nose:hover {\n    /* transform-origin */\n    transform-origin: 50% 100%;\n    animation: wave 1000ms infinite;\n}\n\n\n/* \u95EA\u7535\u7684\u4F4D\u7F6E\u6837\u5F0F */\n.face > img {\n    /* border: 1px solid red; */\n    position:  absolute;\n    top: 50%;\n    left: 50%;\n\n    /* \u9ED8\u8BA4\u770B\u4E0D\u89C1 */\n    /* display: none; */\n\n}\n\n/* \u5BF9\u5DE6\u8138\u95EA\u7535\u8FDB\u884C\u53CD\u8F6C\u4F4D\u7F6E */\n.face.left > img {\n    transform: rotateY(180deg); \n    transform-origin: 0 0 ;\n}\n";

// 导出字符串string
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  通过dom拿到标签元素

var demo = document.querySelector("#demo"); // 使用模块化导入css字符串


var demo2 = document.querySelector("#demo2");

// demo2.innerText  = string.substr( 0, n)

// demo.innerHTML = string.substr( 0, n)

// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
// 返回一个id,调用 clearInterval() 可以关闭函数。


// 快慢速思路，定义一个速度的变量time控制time的值
var time = 100;
var n = 1;
var id = void 0;

// 最后一步优化代码，思路把整个播放器作为一个对象，以对象的形式构造。

var player = {
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnslow': 'slow',
        '#btnfast': 'fast'
    },

    init: function init() {
        demo2.innerHTML = _css2.default.substr(0, n);
        demo.innerText = _css2.default.substr(0, n);
        player.bindEvents();
        player.play();
    },

    bindEvents: function bindEvents() {
        // 这里出现了一个低级失误,少写了符号#导致执行失败
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key];
                console.log(value);
                document.querySelector(key).onclick = player[value];
            }
        }
    },

    //  run函数：把css的样式 输出到页面中

    run: function run() {

        // 定义一个箭头函数
        n += 1;
        if (n > _css2.default.length) {
            window.clearInterval(id);
            return;
        }
        // console.log(n + ':' + string.substr(0,n))
        //  最重要的节点： 同时使用标签的innertext 和innerhtml的标签展示一个

        // 让文本部分滚动条向下移动  为该滚动条的长度 
        demo2.innerHTML = _css2.default.substr(0, n);
        demo.innerText = _css2.default.substr(0, n);

        demo.scrollTop = 99999;
    },

    //    play函数：按指定时间间隔（）执行run函数
    play: function play() {
        if (id) {
            player.pause();
        }

        id = setInterval(player.run, time);
        return id;
    },
    // pause函数：暂停执行play

    pause: function pause() {
        return window.clearInterval(id);
    },

    // slow函数：慢速执行play函数，修改time的值达到慢速的效果
    slow: function slow() {
        // console.log('慢速');
        player.pause();

        time = 150;
        id = player.play();
        console.log('慢速');
    },

    // fast函数：慢速执行play函数，修改time的值达到快速的效果

    fast: function fast() {
        console.log('快速');
        player.pause();
        time = 10;
        // run后面不能加（），否则是返回值,
        // 出现的bug，这里使用let或var id导致id的值成为函数局部变量无法被外部访问，而再次触发暂停和其他事件时，无法拿到当前快速函数的id值，因为其他事件引用的全局变量的id值

        player.play();
        console.log('快速');
    }

    // 把重复的代码用函数封装，播放，和暂停等
};player.init();

//  默认执行setInterval函数


// 暂停
// $btnPause =
},{"./css.js":"css.js"}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59689' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.a343c73d.map