(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/modal-window.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./scss/modal-window.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.71); }\n\n.modal-window {\n  width: auto;\n  max-width: 80%;\n  padding: 35px 25px;\n  text-align: center;\n  background-color: white;\n  height: auto;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.modal-window__title {\n  font-size: 28px; }\n", ""]);

// exports


/***/ }),

/***/ "./scss/modal-window.scss":
/*!********************************!*\
  !*** ./scss/modal-window.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./modal-window.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/modal-window.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./modal-window.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/modal-window.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./modal-window.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/modal-window.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21vZGFsLXdpbmRvdy5zY3NzIiwid2VicGFjazovLy8uL3Njc3MvbW9kYWwtd2luZG93LnNjc3M/MDg4MiJdLCJuYW1lcyI6WyJNb2RhbFdpbmRvdyIsImluc3RhbmNlIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFjO0FBQUE7O0FBQ1YsUUFBSSxRQUFPQSxXQUFXLENBQUNDLFFBQW5CLE1BQWdDLFFBQXBDLEVBQThDO0FBQzFDLGFBQU9ELFdBQVcsQ0FBQ0MsUUFBbkI7QUFDSDs7QUFDRCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FKLGVBQVcsQ0FBQ0MsUUFBWixHQUF1QixJQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQVJMO0FBQUE7QUFBQSxpQ0FVaUI7QUFBQTs7QUFDVCxXQUFLQyxLQUFMLENBQVdHLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxXQUFLSCxLQUFMLENBQVdJLFNBQVg7QUFDQUgsY0FBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxXQUEvQixDQUEyQyxLQUFLTixLQUFoRDtBQUNBLFdBQUtBLEtBQUwsQ0FBV08sZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUM7QUFBQSxlQUFNLEtBQUksQ0FBQ1AsS0FBTCxDQUFXUSxJQUFYLEVBQU47QUFBQSxPQUFyQztBQUNIO0FBZkw7QUFBQTtBQUFBLHlCQWlCU0MsT0FqQlQsRUFpQmtCO0FBQ1YsV0FBS1QsS0FBTCxDQUFXSyxhQUFYLENBQXlCLHFCQUF6QixFQUFnREQsU0FBaEQsR0FBNERLLE9BQTVEO0FBQ0EsV0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixPQUEzQjtBQUNIO0FBcEJMO0FBQUE7QUFBQSwyQkFzQlc7QUFDSCxXQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0g7QUF4Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0hBLDJCQUEyQixtQkFBTyxDQUFDLDZGQUE0QztBQUMvRTs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsYUFBYSxvQkFBb0IsZ0JBQWdCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLDBDQUEwQyxFQUFFLG1CQUFtQixnQkFBZ0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsNEJBQTRCLGlCQUFpQixvQkFBb0IsY0FBYyxhQUFhLHFDQUFxQyxFQUFFLDBCQUEwQixvQkFBb0IsRUFBRTs7QUFFbmM7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsZ1NBQTJKOztBQUVqTCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsZ1NBQTJKO0FBQzlLLG1CQUFtQixtQkFBTyxDQUFDLGdTQUEySjs7QUFFdEwsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbW9kYWwtd2luZG93LnNjc3MnO1xyXG5cclxuLy9TaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIE1vZGFsV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNb2RhbFdpbmRvdy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIE1vZGFsV2luZG93Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dcIj48aDMgY2xhc3M9XCJtb2RhbC13aW5kb3dfX3RpdGxlXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPjxwIGNsYXNzPVwibW9kYWwtd2luZG93X19lcnJvclwiPjwvcD48L2Rpdj5gO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb2RhbC5oaWRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCdtb2RhbC13aW5kb3dfX2Vycm9yJykuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxKTsgfVxcblxcbi5tb2RhbC13aW5kb3cge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDM1cHggMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblxcbi5tb2RhbC13aW5kb3dfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjhweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21vZGFsLXdpbmRvdy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJzb3VyY2VNYXBcIjp0cnVlLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tb2RhbC13aW5kb3cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kYWwtd2luZG93LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9