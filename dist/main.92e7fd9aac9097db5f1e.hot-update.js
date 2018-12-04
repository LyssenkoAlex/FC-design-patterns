webpackHotUpdate("main",{

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
    var _this = this;

    _classCallCheck(this, ModalWindow);

    if (_typeof(ModalWindow.instance) === 'object') {
      return ModalWindow.instance;
    }

    this.modal = document.createElement('div');
    this.modal.className = 'overlay';
    this.modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\"></p></div>";
    document.querySelector('body').appendChild(this.modal);
    this.modal.addEventListener('click', function () {
      return _this.hide();
    });
    ModalWindow.instance = this;
    console.log('New singleton was created');
    return this;
  }

  _createClass(ModalWindow, [{
    key: "show",
    value: function show(message) {
      this.modal.querySelector('.modal-window__error').innerHTML = message;
      this.modal.style.display = 'block';
    }
  }, {
    key: "hide",
    value: function hide() {
      this.modal.style.display = 'none';
    }
  }]);

  return ModalWindow;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBYjtBQUFBO0FBQUE7QUFDSSx5QkFBYztBQUFBOztBQUFBOztBQUNWLFFBQUksUUFBT0EsV0FBVyxDQUFDQyxRQUFuQixNQUFnQyxRQUFwQyxFQUE4QztBQUMxQyxhQUFPRCxXQUFXLENBQUNDLFFBQW5CO0FBQ0g7O0FBRUQsU0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFNBQUtGLEtBQUwsQ0FBV0csU0FBWCxHQUF1QixTQUF2QjtBQUNBLFNBQUtILEtBQUwsQ0FBV0ksU0FBWDtBQUNBSCxZQUFRLENBQUNJLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDLEtBQUtOLEtBQWhEO0FBQ0EsU0FBS0EsS0FBTCxDQUFXTyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQztBQUFBLGFBQU0sS0FBSSxDQUFDQyxJQUFMLEVBQU47QUFBQSxLQUFyQztBQUVBVixlQUFXLENBQUNDLFFBQVosR0FBdUIsSUFBdkI7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFmTDtBQUFBO0FBQUEseUJBaUJTQyxPQWpCVCxFQWlCa0I7QUFDVixXQUFLWCxLQUFMLENBQVdLLGFBQVgsQ0FBeUIsc0JBQXpCLEVBQWlERCxTQUFqRCxHQUE2RE8sT0FBN0Q7QUFDQSxXQUFLWCxLQUFMLENBQVdZLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLDJCQXNCVztBQUNILFdBQUtiLEtBQUwsQ0FBV1ksS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDSDtBQXhCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoibWFpbi45MmU3ZmQ5YWFjOTA5N2RiNWYxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzJztcclxuXHJcbi8vU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1vZGFsV2luZG93Lmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kYWxXaW5kb3cuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcblxyXG4gICAgICAgIE1vZGFsV2luZG93Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IHNpbmdsZXRvbiB3YXMgY3JlYXRlZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93KG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2Vycm9yJykuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9