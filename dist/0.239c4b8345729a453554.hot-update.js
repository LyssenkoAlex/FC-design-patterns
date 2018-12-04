webpackHotUpdate(0,{

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/*! exports provided: ModalWindow, generateModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return ModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateModalWindow", function() { return generateModalWindow; });
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/modal-window.scss */ "./scss/modal-window.scss");
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ModalWindow = function ModalWindow() {
  _classCallCheck(this, ModalWindow);

  if (_typeof(ModalWindow.instance) === 'object') {
    return ModalWindow.instance;
  }

  Person.instance = this;
  return this;
}; //Singleton

function generateModalWindow(message) {
  var modal = document.createElement('div');
  modal.className = 'overlay';
  modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\">".concat(message, "</p></div>");
  return modal;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwiUGVyc29uIiwiZ2VuZXJhdGVNb2RhbFdpbmRvdyIsIm1lc3NhZ2UiLCJtb2RhbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBYixHQUNJLHVCQUFjO0FBQUE7O0FBQ1YsTUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLFdBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFDREMsUUFBTSxDQUFDRCxRQUFQLEdBQWtCLElBQWxCO0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQ0FQTCxDLENBU0E7O0FBQ08sU0FBU0UsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQ3pDLE1BQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUYsT0FBSyxDQUFDRyxTQUFOLEdBQWtCLFNBQWxCO0FBQ0FILE9BQUssQ0FBQ0ksU0FBTixxSUFBdUlMLE9BQXZJO0FBQ0EsU0FBT0MsS0FBUDtBQUNILEMiLCJmaWxlIjoiMC4yMzljNGI4MzQ1NzI5YTQ1MzU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1vZGFsV2luZG93Lmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kYWxXaW5kb3cuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBlcnNvbi5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuLy9TaW5nbGV0b25cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTW9kYWxXaW5kb3cobWVzc2FnZSkge1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+JHttZXNzYWdlfTwvcD48L2Rpdj5gO1xyXG4gICAgcmV0dXJuIG1vZGFsO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==