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
      return _this.modal.hide();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsUUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLGFBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFFRCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsU0FBS0YsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsU0FBS0gsS0FBTCxDQUFXSSxTQUFYO0FBQ0FILFlBQVEsQ0FBQ0ksYUFBVCxDQUF1QixNQUF2QixFQUErQkMsV0FBL0IsQ0FBMkMsS0FBS04sS0FBaEQ7QUFDQSxTQUFLQSxLQUFMLENBQVdPLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDO0FBQUEsYUFBTSxLQUFJLENBQUNQLEtBQUwsQ0FBV1EsSUFBWCxFQUFOO0FBQUEsS0FBckM7QUFFQVYsZUFBVyxDQUFDQyxRQUFaLEdBQXVCLElBQXZCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBZEw7QUFBQTtBQUFBLGlDQWdCaUIsQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBckJMO0FBQUE7QUFBQSx5QkF1QlNVLE9BdkJULEVBdUJrQjtBQUNWLFdBQUtULEtBQUwsQ0FBV0ssYUFBWCxDQUF5QixzQkFBekIsRUFBaURELFNBQWpELEdBQTZESyxPQUE3RDtBQUNBLFdBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsT0FBM0I7QUFDSDtBQTFCTDtBQUFBO0FBQUEsMkJBNEJXO0FBQ0gsV0FBS1gsS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNIO0FBOUJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJtYWluLmU4ODFhODQ5MDFkMTM2ZGJjZTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbW9kYWwtd2luZG93LnNjc3MnO1xyXG5cclxuLy9TaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIE1vZGFsV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNb2RhbFdpbmRvdy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTmFtZSA9ICdvdmVybGF5JztcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93XCI+PGgzIGNsYXNzPVwibW9kYWwtd2luZG93X190aXRsZVwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMz48cCBjbGFzcz1cIm1vZGFsLXdpbmRvd19fZXJyb3JcIj48L3A+PC9kaXY+YDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW9kYWwuaGlkZSgpKTtcclxuXHJcbiAgICAgICAgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vZGFsLmhpZGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2Vycm9yJykuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9