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

    ModalWindow.instance = this;
    return this;
  }

  _createClass(ModalWindow, null, [{
    key: "initializeModalWindow",
    value: function initializeModalWindow(message) {
      var modal = document.createElement('div');
      modal.className = 'overlay';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibWVzc2FnZSIsIm1vZGFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBYjtBQUFBO0FBQUE7QUFDSSx5QkFBYztBQUFBOztBQUNWLFFBQUksUUFBT0EsV0FBVyxDQUFDQyxRQUFuQixNQUFnQyxRQUFwQyxFQUE4QztBQUMxQyxhQUFPRCxXQUFXLENBQUNDLFFBQW5CO0FBQ0g7O0FBRURELGVBQVcsQ0FBQ0MsUUFBWixHQUF1QixJQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQVJMO0FBQUE7QUFBQSwwQ0FVaUNDLE9BVmpDLEVBVTBDO0FBQ2xDLFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUYsV0FBSyxDQUFDRyxTQUFOLEdBQWtCLFNBQWxCO0FBQ0FILFdBQUssQ0FBQ0ksU0FBTixxSUFBdUlMLE9BQXZJO0FBQ0EsYUFBT0MsS0FBUDtBQUNIO0FBZkw7QUFBQTtBQUFBLHNDQWlCNkIsQ0FFeEI7QUFuQkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6IjAuYjU2MDljMWRhMzhkNmM1ZGJkOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9tb2RhbC13aW5kb3cuc2Nzcyc7XHJcblxyXG4vL1NpbmdsZXRvblxyXG5leHBvcnQgY2xhc3MgTW9kYWxXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1vZGFsV2luZG93Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRpYWxpemVNb2RhbFdpbmRvdyhtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93XCI+PGgzIGNsYXNzPVwibW9kYWwtd2luZG93X190aXRsZVwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMz48cCBjbGFzcz1cIm1vZGFsLXdpbmRvd19fZXJyb3JcIj4ke21lc3NhZ2V9PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIG1vZGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93TW9kYWxXaW5kb3coKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9