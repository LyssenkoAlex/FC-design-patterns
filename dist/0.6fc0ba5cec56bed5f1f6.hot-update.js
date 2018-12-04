webpackHotUpdate(0,{

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/*! exports provided: ModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return ModalWindow; });
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/modal-window.scss */ "./scss/modal-window.scss");
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 //Singleton

var ModalWindow =
/*#__PURE__*/
function () {
  function ModalWindow() {
    _classCallCheck(this, ModalWindow);

    if (_typeof(ModalWindow.instance) === 'object') {
      return ModalWindow.instance;
    }

    this.modal = document.createElement('div');
    ModalWindow.instance = this;
    return this;
  }

  _createClass(ModalWindow, null, [{
    key: "initializeModalWindow",
    value: function initializeModalWindow(message) {
      this.modal.className = 'overlay';
      modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\">".concat(message, "</p></div>");
      return modal;
    }
  }, {
    key: "showModalWindow",
    value: function showModalWindow() {}
  }]);

  return ModalWindow;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBYjtBQUFBO0FBQUE7QUFDSSx5QkFBYztBQUFBOztBQUNWLFFBQUksUUFBT0EsV0FBVyxDQUFDQyxRQUFuQixNQUFnQyxRQUFwQyxFQUE4QztBQUMxQyxhQUFPRCxXQUFXLENBQUNDLFFBQW5CO0FBQ0g7O0FBQ0QsU0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBSixlQUFXLENBQUNDLFFBQVosR0FBdUIsSUFBdkI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFSTDtBQUFBO0FBQUEsMENBVWlDSSxPQVZqQyxFQVUwQztBQUNsQyxXQUFLSCxLQUFMLENBQVdJLFNBQVgsR0FBdUIsU0FBdkI7QUFDQUosV0FBSyxDQUFDSyxTQUFOLHFJQUF1SUYsT0FBdkk7QUFDQSxhQUFPSCxLQUFQO0FBQ0g7QUFkTDtBQUFBO0FBQUEsc0NBZ0I2QixDQUV4QjtBQWxCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiMC42ZmMwYmE1Y2VjNTZiZWQ1ZjFmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzJztcclxuXHJcbi8vU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1vZGFsV2luZG93Lmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kYWxXaW5kb3cuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRpYWxpemVNb2RhbFdpbmRvdyhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPiR7bWVzc2FnZX08L3A+PC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gbW9kYWw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dNb2RhbFdpbmRvdygpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=