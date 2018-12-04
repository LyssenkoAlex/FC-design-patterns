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
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.modal.className = 'overlay';
      this.modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\"></p></div>";
      document.querySelector('body').appendChild(this.modal);
      this.modal.addEventListener('click', function () {
        return _this.modal.hide();
      });
    }
  }, {
    key: "show",
    value: function show(message) {
      this.modal.querySelector('modal-window__error').innerHTML = message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFjO0FBQUE7O0FBQ1YsUUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLGFBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFDRCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FKLGVBQVcsQ0FBQ0MsUUFBWixHQUF1QixJQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQVJMO0FBQUE7QUFBQSxpQ0FVaUI7QUFBQTs7QUFDVCxXQUFLQyxLQUFMLENBQVdHLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxXQUFLSCxLQUFMLENBQVdJLFNBQVg7QUFDQUgsY0FBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxXQUEvQixDQUEyQyxLQUFLTixLQUFoRDtBQUNBLFdBQUtBLEtBQUwsQ0FBV08sZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUM7QUFBQSxlQUFNLEtBQUksQ0FBQ1AsS0FBTCxDQUFXUSxJQUFYLEVBQU47QUFBQSxPQUFyQztBQUNIO0FBZkw7QUFBQTtBQUFBLHlCQWlCU0MsT0FqQlQsRUFpQmtCO0FBQ1YsV0FBS1QsS0FBTCxDQUFXSyxhQUFYLENBQXlCLHFCQUF6QixFQUFnREQsU0FBaEQsR0FBNERLLE9BQTVEO0FBQ0EsV0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixPQUEzQjtBQUNIO0FBcEJMO0FBQUE7QUFBQSwyQkFzQlc7QUFDSCxXQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0g7QUF4Qkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6IjAuMjZiNjJlN2YxM2U4YjBlZjJhMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9tb2RhbC13aW5kb3cuc2Nzcyc7XHJcblxyXG4vL1NpbmdsZXRvblxyXG5leHBvcnQgY2xhc3MgTW9kYWxXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1vZGFsV2luZG93Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vZGFsLmhpZGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ21vZGFsLXdpbmRvd19fZXJyb3InKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=