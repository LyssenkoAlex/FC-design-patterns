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
    return this;
  }

  _createClass(ModalWindow, [{
    key: "initialize",
    value: function initialize() {// this.modal.className = 'overlay';
      // this.modal.innerHTML = `<div class="modal-window"><h3 class="modal-window__title">Something went wrong</h3><p class="modal-window__error"></p></div>`;
      // document.querySelector('body').appendChild(this.modal);
      // this.modal.addEventListener('click', () => this.modal.hide())
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsUUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLGFBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFFRCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsU0FBS0YsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsU0FBS0gsS0FBTCxDQUFXSSxTQUFYO0FBQ0FILFlBQVEsQ0FBQ0ksYUFBVCxDQUF1QixNQUF2QixFQUErQkMsV0FBL0IsQ0FBMkMsS0FBS04sS0FBaEQ7QUFDQSxTQUFLQSxLQUFMLENBQVdPLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDO0FBQUEsYUFBTSxLQUFJLENBQUNDLElBQUwsRUFBTjtBQUFBLEtBQXJDO0FBRUFWLGVBQVcsQ0FBQ0MsUUFBWixHQUF1QixJQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQWRMO0FBQUE7QUFBQSxpQ0FnQmlCLENBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXJCTDtBQUFBO0FBQUEseUJBdUJTVSxPQXZCVCxFQXVCa0I7QUFDVixXQUFLVCxLQUFMLENBQVdLLGFBQVgsQ0FBeUIsc0JBQXpCLEVBQWlERCxTQUFqRCxHQUE2REssT0FBN0Q7QUFDQSxXQUFLVCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCO0FBQ0g7QUExQkw7QUFBQTtBQUFBLDJCQTRCVztBQUNILFdBQUtYLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDSDtBQTlCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoibWFpbi41NWY3OWExN2M1MjhmMDZmNDUyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzJztcclxuXHJcbi8vU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1vZGFsV2luZG93Lmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kYWxXaW5kb3cuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcblxyXG4gICAgICAgIE1vZGFsV2luZG93Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPjwvcD48L2Rpdj5gO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb2RhbC5oaWRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19lcnJvcicpLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==