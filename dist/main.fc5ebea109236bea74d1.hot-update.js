webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJ0aGVuIiwibW9kdWxlIiwibmV3cyIsIk5ld3MiLCJnZXRJbnB1dFZhbHVlIiwiY3JlYXRlTmV3cyIsIm5ld3NDb250YWluZXIiLCJnZXROZXdzQ29udGFpbmVyIiwiaGlkZVRpdGxlIiwiZ2V0RGF0YSIsImFydGljbGVzIiwidmFsIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZUFydGljbGUiLCJhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIiLCJnZW5lcmF0ZU1vZGFsV2luZG93Iiwic2hvd1RpdGxlIiwiZW5hYmxlQnV0dG9uIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdzY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJzaG93QWxlcnRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUN2QjtBQUNBQyxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NDLE9BQWxDLEdBQTRDLFVBQVVDLENBQVYsRUFBYTtBQUNyREEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0EsbUhBQW9CQyxJQUFwQixDQUF5QixVQUFBQyxNQUFNLEVBQUk7QUFDL0IsVUFBSUMsSUFBSSxHQUFHLElBQUlELE1BQU0sQ0FBQ0UsSUFBWCxDQUFnQkMsYUFBYSxDQUFDLFNBQUQsQ0FBN0IsRUFBMENBLGFBQWEsQ0FBQyxVQUFELENBQXZELEVBQXFFQSxhQUFhLENBQUMsVUFBRCxDQUFsRixDQUFYO0FBQ0FDLGdCQUFVLENBQUNILElBQUQsQ0FBVjtBQUNILEtBSEQ7QUFLSCxHQVJEOztBQUZ1QixXQVlSRyxVQVpRO0FBQUE7QUFBQSxJQWtDdkI7OztBQWxDdUI7QUFBQTtBQUFBO0FBQUEsNEJBWXZCLGlCQUEwQkgsSUFBMUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRSSwyQkFEUixHQUN3QkMsZ0JBQWdCLEVBRHhDO0FBRUlDLHVCQUFTO0FBRmI7QUFBQTtBQUFBLHFCQUs2Qk4sSUFBSSxDQUFDTyxPQUFMLEVBTDdCOztBQUFBO0FBS1lDLHNCQUxaOztBQUFBLG1CQU1XQSxRQU5YO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9ZLGdDQUFlQSxRQUFmLDJIQUF3QjtBQUFoQkMsbUJBQWdCO0FBQ3BCTCw2QkFBYSxDQUFDTSxXQUFkLENBQTBCRCxHQUFHLENBQUNFLGVBQUosRUFBMUI7QUFDSDs7QUFUYjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQVVZQyxzQ0FBd0I7O0FBVnBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhUSwrSEFBcUJkLElBQXJCLENBQTBCLFVBQUFDLE1BQU0sRUFBSTtBQUNoQ1Asd0JBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQmlCLFdBQS9CLENBQTJDWCxNQUFNLENBQUNjLG1CQUFQLGFBQTNDO0FBQ0gsZUFGRDs7QUFiUjtBQWlCSUMsdUJBQVM7QUFDVEMsMEJBQVksQ0FBQyxTQUFELENBQVo7O0FBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWnVCO0FBQUE7QUFBQTs7QUFtQ3ZCLFdBQVNiLGFBQVQsQ0FBdUJjLE9BQXZCLEVBQWdDO0FBQzVCLFdBQU94QixRQUFRLENBQUN5QixjQUFULENBQXdCRCxPQUF4QixFQUFpQ0UsS0FBeEM7QUFDSCxHQXJDc0IsQ0F1Q3ZCOzs7QUFDQSxXQUFTckIsYUFBVCxDQUF1QnNCLE1BQXZCLEVBQStCO0FBQzNCQSxVQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEM7QUFDQUQsVUFBTSxDQUFDRSxTQUFQLEdBQW1CLFNBQW5CO0FBQ0g7O0FBRUQsV0FBU04sWUFBVCxDQUFzQkksTUFBdEIsRUFBOEI7QUFDMUIzQixZQUFRLENBQUNDLGFBQVQsQ0FBdUIwQixNQUF2QixFQUErQkcsZUFBL0IsQ0FBK0MsVUFBL0M7QUFDQTlCLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QjBCLE1BQXZCLEVBQStCRSxTQUEvQixHQUEyQyxVQUEzQztBQUNILEdBaERzQixDQWtEdkI7OztBQUNBLFdBQVNoQixnQkFBVCxHQUE0QjtBQUN4QixRQUFNa0IsYUFBYSxHQUFHL0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBOEIsaUJBQWEsQ0FBQ0YsU0FBZCxHQUEwQixFQUExQjtBQUNBLFdBQU9FLGFBQVA7QUFDSCxHQXZEc0IsQ0F5RHZCOzs7QUFDQSxXQUFTakIsU0FBVCxHQUFxQjtBQUNqQmQsWUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDK0IsS0FBdkMsQ0FBNkNDLE9BQTdDLEdBQXVELE1BQXZEO0FBQ0gsR0E1RHNCLENBOER2Qjs7O0FBQ0EsV0FBU1gsU0FBVCxHQUFxQjtBQUNqQnRCLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1QytCLEtBQXZDLENBQTZDQyxPQUE3QyxHQUF1RCxPQUF2RDtBQUNILEdBakVzQixDQW1FdkI7OztBQUNBLFdBQVNiLHdCQUFULEdBQW9DO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hDLDJCQUFlcEIsUUFBUSxDQUFDa0MsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQWYsOEhBQStEO0FBQUEsWUFBdkRqQixHQUF1RDs7QUFDM0RBLFdBQUcsQ0FBQ2YsT0FBSixHQUFjLFlBQVk7QUFDdEIsZUFBS2lDLFVBQUwsQ0FBZ0JsQyxhQUFoQixDQUE4QixnQkFBOUIsRUFBZ0QrQixLQUFoRCxDQUFzREMsT0FBdEQsR0FBZ0UsT0FBaEU7QUFDQSxlQUFLRSxVQUFMLENBQWdCbEMsYUFBaEIsQ0FBOEIsb0JBQTlCLEVBQW9EK0IsS0FBcEQsQ0FBMERDLE9BQTFELEdBQW9FLE1BQXBFO0FBQ0gsU0FIRDtBQUlIO0FBTitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPbkM7O0FBRUQsV0FBU0csZ0JBQVQsR0FBNEI7QUFDeEJwQyxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUM0QixTQUF2QyxHQUFtRCx1Q0FBbkQ7QUFDSDtBQUdKLENBbEZELEMiLCJmaWxlIjoibWFpbi5mYzVlYmVhMTA5MjM2YmVhNzRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge05ld3N9IGZyb20gXCIuL05ld3MuanNcIjtcclxuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy9FdmVudCBMaXN0ZW5lciAtIHN1Ym1pdCBjbGFzcyBidXR0b24gY2xpY2tcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKS5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlzYWJsZUJ1dHRvbih0aGlzKTtcclxuICAgICAgICBpbXBvcnQoJy4vTmV3cy5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld3MgPSBuZXcgbW9kdWxlLk5ld3MoZ2V0SW5wdXRWYWx1ZSgnY291bnRyeScpLCBnZXRJbnB1dFZhbHVlKCdjYXRlZ29yeScpLCBnZXRJbnB1dFZhbHVlKCdwYWdlc2l6ZScpKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3cyhuZXdzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld3MobmV3cykge1xyXG4gICAgICAgIGxldCBuZXdzQ29udGFpbmVyID0gZ2V0TmV3c0NvbnRhaW5lcigpO1xyXG4gICAgICAgIGhpZGVUaXRsZSgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZXMgPSBhd2FpdCBuZXdzLmdldERhdGEoKTtcclxuICAgICAgICAgICAgaWYoYXJ0aWNsZXMpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB2YWwgb2YgYXJ0aWNsZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQodmFsLmdlbmVyYXRlQXJ0aWNsZSgpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWRkU2hvd01vcmVDbGlja0xpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaW1wb3J0KCcuL01vZGFsLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKG1vZHVsZS5nZW5lcmF0ZU1vZGFsV2luZG93KGVycikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd1RpdGxlKCk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKCcuc3VibWl0Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGlucHV0IHZhbHVlIGZyb20gVUlcclxuICAgIGZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Rpc2FibGUgc3VibWl0IGJ1dHRvbiwgcHJldmVudCBtdWx0aWNsaWNrXHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMb2FkaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikuaW5uZXJIVE1MID0gJ0dldCBuZXdzJztcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBhbmQgY2xlYXIgbmV3cyBjb250YWluZXIgaW4gRE9NXHJcbiAgICBmdW5jdGlvbiBnZXROZXdzQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld3Njb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fY29udGFpbmVyJyk7XHJcbiAgICAgICAgbmV3c2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICByZXR1cm4gbmV3c2NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvL0hpZGUgTmV3cyBUaXRsZVxyXG4gICAgZnVuY3Rpb24gaGlkZVRpdGxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvL1Nob3cgTmV3cyBUaXRsZVxyXG4gICAgZnVuY3Rpb24gc2hvd1RpdGxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FdmVudCBsaXN0ZW5lciAtIHNob3cgbW9yZSBidXR0b24gY2xpY2tcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICBmb3IobGV0IHZhbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZV9zaG93LW1vcmUnKSl7XHJcbiAgICAgICAgICAgIHZhbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfc2hvdy1tb3JlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QWxlcnRNZXNzYWdlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190aXRsZScpLmlubmVySFRNTCA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gVHJ5IGFnYWluIGxhdGVyJztcclxuICAgIH1cclxuXHJcblxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=