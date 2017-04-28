/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UploadFactory__ = __webpack_require__(2);
/**
 * Created by shangkuikui on 2017/4/28.
 */

let outerstate = {};
/* harmony default export */ __webpack_exports__["a"] = ({
    add(id, uploadtype, fileName, fileSize) {
        let uploadObj = __WEBPACK_IMPORTED_MODULE_0__UploadFactory__["a" /* default */].create(uploadtype);
        let dom = document.createElement('div');
        dom.innerHTML = `<span>文件名称:${fileName}, 文件大小: ${fileSize} </span>
                    <button class="delFile">删除</button>`;
        dom.querySelector('.delFile').onclick = function () {
            uploadObj.delFile(id);
        };
        document.body.appendChild(dom);
        outerstate[id] = {
            fileName: fileName,
            fileSize: fileSize,
            dom: dom
        };
    },
    setExternalState: function (id, flyWeightObj) {
        let uploadData = outerstate[id];
        for (let i in uploadData) {
            flyWeightObj[i] = uploadData[i];
        }
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by shangkuikui on 2017/4/28.
 */
class Upload {
    constructor(uploadtype) {
        this.uploadtype = uploadtype;
    }
    delFile(id) {
        UploadManager.setExternalState(id, this);
        if (this.fileSize < 3000) {
            return this.dom.parentNode.removeChild(this.dom);
        }
        if (window.confirm('确定要删除该文件吗? ' + this.fileName)) {
            return this.dom.parentNode.removeChild(this.dom);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Upload;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Upload__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Created by shangkuikui on 2017/4/28.
 */

let createdFlyWeightObjs = {};
function create(uploadtype) {
    if (createdFlyWeightObjs[uploadtype]) {
        return createdFlyWeightObjs[uploadtype];
    }
    return createdFlyWeightObjs[uploadtype] = new __WEBPACK_IMPORTED_MODULE_0__Upload__["a" /* default */](uploadtype);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UploadManager__ = __webpack_require__(0);
/**
 * Created by shangkuikui on 2017/4/28.
 */


let id = 0;
let startUpload = function (uploadtype, files) {
    for (let i = 0, file; file = files[i++];) {
        __WEBPACK_IMPORTED_MODULE_0__UploadManager__["a" /* default */].add(++id, uploadtype, file.fileName, file.fileSize);
    }
};

startUpload('plugin', [{
    fileName: '1.txt',
    fileSize: 1000
}, {
    fileName: '2.html',
    fileSize: 3000
}, {
    fileName: '3.txt',
    fileSize: 5000
}]);
startUpload('flash', [{
    fileName: '4.txt',
    fileSize: 1000
}, {
    fileName: '5.html',
    fileSize: 3000
}, {
    fileName: '6.txt',
    fileSize: 5000
}]);

/***/ })
/******/ ]);