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

  _createClass(ModalWindow, [{
    key: "initializeModalWindow",
    value: function initializeModalWindow() {
      this.modal.className = 'overlay';
      this.modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\"></p></div>";
      return this.modal;
    }
  }, {
    key: "showModalWindow",
    value: function showModalWindow(message) {
      this.modal.style('display', 'block');
    }
  }]);

  return ModalWindow;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFjO0FBQUE7O0FBQ1YsUUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLGFBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFDRCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FKLGVBQVcsQ0FBQ0MsUUFBWixHQUF1QixJQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQVJMO0FBQUE7QUFBQSw0Q0FVNEI7QUFDcEIsV0FBS0MsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsV0FBS0gsS0FBTCxDQUFXSSxTQUFYO0FBQ0EsYUFBTyxLQUFLSixLQUFaO0FBQ0g7QUFkTDtBQUFBO0FBQUEsb0NBZ0JvQkssT0FoQnBCLEVBZ0I2QjtBQUNyQixXQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUIsU0FBakIsRUFBNEIsT0FBNUI7QUFDSDtBQWxCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiMC4yNGVkZjZiMWZjMmIyN2RlM2YzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzJztcclxuXHJcbi8vU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1vZGFsV2luZG93Lmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kYWxXaW5kb3cuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZU1vZGFsV2luZG93KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPjwvcD48L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vZGFsV2luZG93KG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=