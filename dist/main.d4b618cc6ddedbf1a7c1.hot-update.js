webpackHotUpdate("main",{

/***/ "./js/Article.js":
false,

/***/ "./js/News.js":
false,

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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import {News} from "./News.js";



window.onload = function () {
  //Event Listener - submit class button click
  document.querySelector('.submit').onclick = function (e) {
    e.preventDefault();
    disableButton(this);
    var news = new News(getInputValue('country'), getInputValue('category'), getInputValue('pagesize'));
    createNews(news);
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
              __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Modal.js */ "./js/Modal.js")).then(function (module) {
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/news.scss":
false,

/***/ "./scss/news.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJuZXdzIiwiTmV3cyIsImdldElucHV0VmFsdWUiLCJjcmVhdGVOZXdzIiwibmV3c0NvbnRhaW5lciIsImdldE5ld3NDb250YWluZXIiLCJoaWRlVGl0bGUiLCJnZXREYXRhIiwiYXJ0aWNsZXMiLCJ2YWwiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlQXJ0aWNsZSIsImFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lciIsInRoZW4iLCJtb2R1bGUiLCJnZW5lcmF0ZU1vZGFsV2luZG93Iiwic2hvd1RpdGxlIiwiZW5hYmxlQnV0dG9uIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdzY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJzaG93QWxlcnRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUN2QjtBQUNBQyxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NDLE9BQWxDLEdBQTRDLFVBQVVDLENBQVYsRUFBYTtBQUNyREEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0MsYUFBYSxDQUFDLFNBQUQsQ0FBdEIsRUFBbUNBLGFBQWEsQ0FBQyxVQUFELENBQWhELEVBQThEQSxhQUFhLENBQUMsVUFBRCxDQUEzRSxDQUFY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QUFnQmxDLGFBQWhCLENBQThCLGdCQUE5QixFQUFnRCtCLEtBQWhELENBQXNEQyxPQUF0RCxHQUFnRSxPQUFoRTtBQUNBLGVBQUtFLFVBQUwsQ0FBZ0JsQyxhQUFoQixDQUE4QixvQkFBOUIsRUFBb0QrQixLQUFwRCxDQUEwREMsT0FBMUQsR0FBb0UsTUFBcEU7QUFDSCxTQUhEO0FBSUg7QUFOK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9uQzs7QUFFRCxXQUFTRyxnQkFBVCxHQUE0QjtBQUN4QnBDLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1QzRCLFNBQXZDLEdBQW1ELHVDQUFuRDtBQUNIO0FBR0osQ0EvRUQsQyIsImZpbGUiOiJtYWluLmQ0YjYxOGNjNmRkZWRiZjFhN2MxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7TmV3c30gZnJvbSBcIi4vTmV3cy5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvL0V2ZW50IExpc3RlbmVyIC0gc3VibWl0IGNsYXNzIGJ1dHRvbiBjbGlja1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNhYmxlQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIGxldCBuZXdzID0gbmV3IE5ld3MoZ2V0SW5wdXRWYWx1ZSgnY291bnRyeScpLCBnZXRJbnB1dFZhbHVlKCdjYXRlZ29yeScpLCBnZXRJbnB1dFZhbHVlKCdwYWdlc2l6ZScpKTtcclxuICAgICAgICBjcmVhdGVOZXdzKG5ld3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdzKG5ld3MpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGdldE5ld3NDb250YWluZXIoKTtcclxuICAgICAgICBoaWRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVzID0gYXdhaXQgbmV3cy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdmFsIG9mIGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbC5nZW5lcmF0ZUFydGljbGUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9Nb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtb2R1bGUuZ2VuZXJhdGVNb2RhbFdpbmRvdyhlcnIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUaXRsZSgpO1xyXG4gICAgICAgIGVuYWJsZUJ1dHRvbignLnN1Ym1pdCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBpbnB1dCB2YWx1ZSBmcm9tIFVJXHJcbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9EaXNhYmxlIHN1Ym1pdCBidXR0b24sIHByZXZlbnQgbXVsdGljbGlja1xyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTG9hZGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLmlubmVySFRNTCA9ICdHZXQgbmV3cyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgYW5kIGNsZWFyIG5ld3MgY29udGFpbmVyIGluIERPTVxyXG4gICAgZnVuY3Rpb24gZ2V0TmV3c0NvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBuZXdzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIG5ld3Njb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcmV0dXJuIG5ld3Njb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIGhpZGVUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIHNob3dUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXZlbnQgbGlzdGVuZXIgLSBzaG93IG1vcmUgYnV0dG9uIGNsaWNrXHJcbiAgICBmdW5jdGlvbiBhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVfc2hvdy1tb3JlJykpe1xyXG4gICAgICAgICAgICB2YWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX3Nob3ctbW9yZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FsZXJ0TWVzc2FnZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFRyeSBhZ2FpbiBsYXRlcic7XHJcbiAgICB9XHJcblxyXG5cclxufTsiXSwic291cmNlUm9vdCI6IiJ9