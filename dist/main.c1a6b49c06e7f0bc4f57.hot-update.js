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

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.onload = function () {
  //Event Listener - submit class button click
  document.querySelector('.submit').onclick = function (e) {
    e.preventDefault();
    disableButton(this);
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./News.js */ "./js/News.js")).then(function (module) {
      var news = new module.News(getInputValue('country'), getInputValue('category'), getInputValue('pagesize'));
      createNews(news);
    });
  };

  function createNews(_x) {
    return _createNews.apply(this, arguments);
  } //Get input value from UI


  function _createNews() {
    _createNews = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(news) {
      var newsContainer, articles, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, val;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newsContainer = getNewsContainer();
              hideTitle();
              _context.prev = 2;
              _context.next = 5;
              return news.getData();

            case 5:
              articles = _context.sent;

              if (!articles) {
                _context.next = 27;
                break;
              }

              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 10;

              for (_iterator2 = articles[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                val = _step2.value;
                newsContainer.appendChild(val.generateArticle());
              }

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](10);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError2) {
                _context.next = 24;
                break;
              }

              throw _iteratorError2;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
              addShowMoreClickListener();

            case 27:
              _context.next = 32;
              break;

            case 29:
              _context.prev = 29;
              _context.t1 = _context["catch"](2);
              Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Modal.js */ "./js/Modal.js")).then(function (module) {
                var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["ModalWindow"]();
                document.querySelector('body').appendChild(module.generateModalWindow(_context.t1));
              });

            case 32:
              showTitle();
              enableButton('.submit');

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 29], [10, 14, 18, 26], [19,, 21, 25]]);
    }));
    return _createNews.apply(this, arguments);
  }

  function getInputValue(element) {
    return document.getElementById(element).value;
  } //Disable submit button, prevent multiclick


  function disableButton(button) {
    button.setAttribute('disabled', 'disabled');
    button.innerHTML = 'Loading';
  }

  function enableButton(button) {
    document.querySelector(button).removeAttribute('disabled');
    document.querySelector(button).innerHTML = 'Get news';
  } //Get and clear news container in DOM


  function getNewsContainer() {
    var newscontainer = document.querySelector('.news__container');
    newscontainer.innerHTML = '';
    return newscontainer;
  } //Hide News Title


  function hideTitle() {
    document.querySelector('.news__title').style.display = "none";
  } //Show News Title


  function showTitle() {
    document.querySelector('.news__title').style.display = "block";
  } //Event listener - show more button click


  function addShowMoreClickListener() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.querySelectorAll('.article_show-more')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        val.onclick = function () {
          this.parentNode.querySelector('.article__body').style.display = 'block';
          this.parentNode.querySelector('.article_show-more').style.display = 'none';
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function showAlertMessage() {
    document.querySelector('.news__title').innerHTML = 'Something went wrong. Try again later';
  }
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsiTW9kYWxXaW5kb3ciLCJpbnN0YW5jZSIsIm1vZGFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJtZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93Iiwib25sb2FkIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJ0aGVuIiwibW9kdWxlIiwibmV3cyIsIk5ld3MiLCJnZXRJbnB1dFZhbHVlIiwiY3JlYXRlTmV3cyIsIm5ld3NDb250YWluZXIiLCJnZXROZXdzQ29udGFpbmVyIiwiaGlkZVRpdGxlIiwiZ2V0RGF0YSIsImFydGljbGVzIiwidmFsIiwiZ2VuZXJhdGVBcnRpY2xlIiwiYWRkU2hvd01vcmVDbGlja0xpc3RlbmVyIiwiZ2VuZXJhdGVNb2RhbFdpbmRvdyIsInNob3dUaXRsZSIsImVuYWJsZUJ1dHRvbiIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwibmV3c2NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwic2hvd0FsZXJ0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLElBQU1BLFdBQWI7QUFBQTtBQUFBO0FBQ0kseUJBQWM7QUFBQTs7QUFBQTs7QUFDVixRQUFJLFFBQU9BLFdBQVcsQ0FBQ0MsUUFBbkIsTUFBZ0MsUUFBcEMsRUFBOEM7QUFDMUMsYUFBT0QsV0FBVyxDQUFDQyxRQUFuQjtBQUNIOztBQUVELFNBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFD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QUFBQTs7QUFBQTtBQUNoQywyQkFBZTlCLFFBQVEsQ0FBQ3lDLGdCQUFULENBQTBCLG9CQUExQixDQUFmLDhIQUErRDtBQUFBLFlBQXZEYixHQUF1RDs7QUFDM0RBLFdBQUcsQ0FBQ2YsT0FBSixHQUFjLFlBQVk7QUFDdEIsZUFBSzZCLFVBQUwsQ0FBZ0J0QyxhQUFoQixDQUE4QixnQkFBOUIsRUFBZ0RLLEtBQWhELENBQXNEQyxPQUF0RCxHQUFnRSxPQUFoRTtBQUNBLGVBQUtnQyxVQUFMLENBQWdCdEMsYUFBaEIsQ0FBOEIsb0JBQTlCLEVBQW9ESyxLQUFwRCxDQUEwREMsT0FBMUQsR0FBb0UsTUFBcEU7QUFDSCxTQUhEO0FBSUg7QUFOK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9uQzs7QUFFRCxXQUFTaUMsZ0JBQVQsR0FBNEI7QUFDeEIzQyxZQUFRLENBQUNJLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNELFNBQXZDLEdBQW1ELHVDQUFuRDtBQUNIO0FBR0osQ0FuRkQsQyIsImZpbGUiOiJtYWluLmMxYTZiNDljMDZlN2YwYmM0ZjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbW9kYWwtd2luZG93LnNjc3MnO1xyXG5cclxuLy9TaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIE1vZGFsV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNb2RhbFdpbmRvdy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTmFtZSA9ICdvdmVybGF5JztcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93XCI+PGgzIGNsYXNzPVwibW9kYWwtd2luZG93X190aXRsZVwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMz48cCBjbGFzcz1cIm1vZGFsLXdpbmRvd19fZXJyb3JcIj48L3A+PC9kaXY+YDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW9kYWwuaGlkZSgpKTtcclxuXHJcbiAgICAgICAgTW9kYWxXaW5kb3cuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd1wiPjxoMyBjbGFzcz1cIm1vZGFsLXdpbmRvd19fdGl0bGVcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+PHAgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2Vycm9yXCI+PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vZGFsLmhpZGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ21vZGFsLXdpbmRvd19fZXJyb3InKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcclxuaW1wb3J0IHtNb2RhbFdpbmRvd30gZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vRXZlbnQgTGlzdGVuZXIgLSBzdWJtaXQgY2xhc3MgYnV0dG9uIGNsaWNrXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jykub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc2FibGVCdXR0b24odGhpcyk7XHJcbiAgICAgICAgaW1wb3J0KCcuL05ld3MuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdzID0gbmV3IG1vZHVsZS5OZXdzKGdldElucHV0VmFsdWUoJ2NvdW50cnknKSwgZ2V0SW5wdXRWYWx1ZSgnY2F0ZWdvcnknKSwgZ2V0SW5wdXRWYWx1ZSgncGFnZXNpemUnKSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld3MobmV3cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdzKG5ld3MpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGdldE5ld3NDb250YWluZXIoKTtcclxuICAgICAgICBoaWRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVzID0gYXdhaXQgbmV3cy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdmFsIG9mIGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbC5nZW5lcmF0ZUFydGljbGUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9Nb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtb2RhbCA9IG5ldyBNb2RhbFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKG1vZHVsZS5nZW5lcmF0ZU1vZGFsV2luZG93KGVycikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd1RpdGxlKCk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKCcuc3VibWl0Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGlucHV0IHZhbHVlIGZyb20gVUlcclxuICAgIGZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Rpc2FibGUgc3VibWl0IGJ1dHRvbiwgcHJldmVudCBtdWx0aWNsaWNrXHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMb2FkaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikuaW5uZXJIVE1MID0gJ0dldCBuZXdzJztcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBhbmQgY2xlYXIgbmV3cyBjb250YWluZXIgaW4gRE9NXHJcbiAgICBmdW5jdGlvbiBnZXROZXdzQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld3Njb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fY29udGFpbmVyJyk7XHJcbiAgICAgICAgbmV3c2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICByZXR1cm4gbmV3c2NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvL0hpZGUgTmV3cyBUaXRsZVxyXG4gICAgZnVuY3Rpb24gaGlkZVRpdGxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvL1Nob3cgTmV3cyBUaXRsZVxyXG4gICAgZnVuY3Rpb24gc2hvd1RpdGxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FdmVudCBsaXN0ZW5lciAtIHNob3cgbW9yZSBidXR0b24gY2xpY2tcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICBmb3IobGV0IHZhbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZV9zaG93LW1vcmUnKSl7XHJcbiAgICAgICAgICAgIHZhbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfc2hvdy1tb3JlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QWxlcnRNZXNzYWdlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLmlubmVySFRNTCA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gVHJ5IGFnYWluIGxhdGVyJztcclxuICAgIH1cclxuXHJcblxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=