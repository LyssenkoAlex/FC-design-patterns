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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBYjtBQUFBO0FBQUE7QUFDSSx5QkFBYztBQUFBOztBQUFBOztBQUNWLFFBQUksUUFBT0EsV0FBVyxDQUFDQyxRQUFuQixNQUFnQyxRQUFwQyxFQUE4QztBQUMxQyxhQUFPRCxXQUFXLENBQUNDLFFBQW5CO0FBQ0g7O0FBRUQsU0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFNBQUtGLEtBQUwsQ0FBV0csU0FBWCxHQUF1QixTQUF2QjtBQUNBLFNBQUtILEtBQUwsQ0FBV0ksU0FBWDtBQUNBSCxZQUFRLENBQUNJLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDLEtBQUtOLEtBQWhEO0FBQ0EsU0FBS0EsS0FBTCxDQUFXTyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQztBQUFBLGFBQU0sS0FBSSxDQUFDQyxJQUFMLEVBQU47QUFBQSxLQUFyQztBQUVBVixlQUFXLENBQUNDLFFBQVosR0FBdUIsSUFBdkI7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFmTDtBQUFBO0FBQUEsaUNBaUJpQixDQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUF0Qkw7QUFBQTtBQUFBLHlCQXdCU0MsT0F4QlQsRUF3QmtCO0FBQ1YsV0FBS1gsS0FBTCxDQUFXSyxhQUFYLENBQXlCLHNCQUF6QixFQUFpREQsU0FBakQsR0FBNkRPLE9BQTdEO0FBQ0EsV0FBS1gsS0FBTCxDQUFXWSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixPQUEzQjtBQUNIO0FBM0JMO0FBQUE7QUFBQSwyQkE2Qlc7QUFDSCxXQUFLYixLQUFMLENBQVdZLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0g7QUEvQkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6Im1haW4uNmUxOWQ1NDZlMmMxY2Q2OTgyOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9tb2RhbC13aW5kb3cuc2Nzcyc7XHJcblxyXG4vL1NpbmdsZXRvblxyXG5leHBvcnQgY2xhc3MgTW9kYWxXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1vZGFsV2luZG93Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPjwvcD48L2Rpdj5gO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xyXG5cclxuICAgICAgICBNb2RhbFdpbmRvdy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBzaW5nbGV0b24gd2FzIGNyZWF0ZWQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPjwvcD48L2Rpdj5gO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb2RhbC5oaWRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19lcnJvcicpLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==