webpackHotUpdate(0,{

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/*! exports provided: generateModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateModalWindow", function() { return generateModalWindow; });
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/modal-window.scss */ "./scss/modal-window.scss");
/* harmony import */ var _scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_modal_window_scss__WEBPACK_IMPORTED_MODULE_0__);
 //Singleton

function generateModalWindow(message) {
  var modal = document.createElement('div');
  modal.className = 'overlay';
  modal.innerHTML = "<div class=\"modal-window\"><h3 class=\"modal-window__title\">Something went wrong</h3><p class=\"modal-window__error\">".concat(message, "</p></div>");
  return modal;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU1vZGFsV2luZG93IiwibWVzc2FnZSIsIm1vZGFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDekMsTUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRixPQUFLLENBQUNHLFNBQU4sR0FBa0IsU0FBbEI7QUFDQUgsT0FBSyxDQUFDSSxTQUFOLHFJQUF1SUwsT0FBdkk7QUFDQSxTQUFPQyxLQUFQO0FBQ0gsQyIsImZpbGUiOiIwLmM0ZGQyYTkxNjU5M2QzYTdkOWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbW9kYWwtd2luZG93LnNjc3MnO1xyXG5cclxuLy9TaW5nbGV0b25cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTW9kYWxXaW5kb3cobWVzc2FnZSkge1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+JHttZXNzYWdlfTwvcD48L2Rpdj5gO1xyXG4gICAgcmV0dXJuIG1vZGFsO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==