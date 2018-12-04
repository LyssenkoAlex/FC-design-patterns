webpackHotUpdate("main",{

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.js */ "./js/News.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.onload = function () {
  //Event Listener - submit class button click
  document.querySelector('.submit').onclick = function (e) {
    e.preventDefault();
    disableButton(this);
    var news = new _News_js__WEBPACK_IMPORTED_MODULE_0__["News"](getInputValue('country'), getInputValue('category'), getInputValue('pagesize'));
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
              }); //document.querySelector('body').appendChild(generateModalWindow(err));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJuZXdzIiwiTmV3cyIsImdldElucHV0VmFsdWUiLCJjcmVhdGVOZXdzIiwibmV3c0NvbnRhaW5lciIsImdldE5ld3NDb250YWluZXIiLCJoaWRlVGl0bGUiLCJnZXREYXRhIiwiYXJ0aWNsZXMiLCJ2YWwiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlQXJ0aWNsZSIsImFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lciIsInRoZW4iLCJtb2R1bGUiLCJnZW5lcmF0ZU1vZGFsV2luZG93Iiwic2hvd1RpdGxlIiwiZW5hYmxlQnV0dG9uIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdzY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJzaG93QWxlcnRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkI7QUFDQUMsVUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDQyxPQUFsQyxHQUE0QyxVQUFVQyxDQUFWLEVBQWE7QUFDckRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFJQyw2Q0FBSixDQUFTQyxhQUFhLENBQUMsU0FBRCxDQUF0QixFQUFtQ0EsYUFBYSxDQUFDLFVBQUQsQ0FBaEQsRUFBOERBLGFBQWEsQ0FBQyxVQUFELENBQTNFLENBQVg7QUFD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QyxVQUFMLENBQWdCbEMsYUFBaEIsQ0FBOEIsZ0JBQTlCLEVBQWdEK0IsS0FBaEQsQ0FBc0RDLE9BQXRELEdBQWdFLE9BQWhFO0FBQ0EsZUFBS0UsVUFBTCxDQUFnQmxDLGFBQWhCLENBQThCLG9CQUE5QixFQUFvRCtCLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxNQUFwRTtBQUNILFNBSEQ7QUFJSDtBQU4rQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT25DOztBQUVELFdBQVNHLGdCQUFULEdBQTRCO0FBQ3hCcEMsWUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDNEIsU0FBdkMsR0FBbUQsdUNBQW5EO0FBQ0g7QUFHSixDQWpGRCxDIiwiZmlsZSI6Im1haW4uNzY2ZWM2ZTI4MzZmYTlmNDhiNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV3c30gZnJvbSBcIi4vTmV3cy5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvL0V2ZW50IExpc3RlbmVyIC0gc3VibWl0IGNsYXNzIGJ1dHRvbiBjbGlja1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNhYmxlQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIGxldCBuZXdzID0gbmV3IE5ld3MoZ2V0SW5wdXRWYWx1ZSgnY291bnRyeScpLCBnZXRJbnB1dFZhbHVlKCdjYXRlZ29yeScpLCBnZXRJbnB1dFZhbHVlKCdwYWdlc2l6ZScpKTtcclxuICAgICAgICBjcmVhdGVOZXdzKG5ld3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdzKG5ld3MpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGdldE5ld3NDb250YWluZXIoKTtcclxuICAgICAgICBoaWRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVzID0gYXdhaXQgbmV3cy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdmFsIG9mIGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbC5nZW5lcmF0ZUFydGljbGUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9Nb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtb2R1bGUuZ2VuZXJhdGVNb2RhbFdpbmRvdyhlcnIpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChnZW5lcmF0ZU1vZGFsV2luZG93KGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93VGl0bGUoKTtcclxuICAgICAgICBlbmFibGVCdXR0b24oJy5zdWJtaXQnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgaW5wdXQgdmFsdWUgZnJvbSBVSVxyXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRGlzYWJsZSBzdWJtaXQgYnV0dG9uLCBwcmV2ZW50IG11bHRpY2xpY2tcclxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0xvYWRpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5pbm5lckhUTUwgPSAnR2V0IG5ld3MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGFuZCBjbGVhciBuZXdzIGNvbnRhaW5lciBpbiBET01cclxuICAgIGZ1bmN0aW9uIGdldE5ld3NDb250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3c2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19jb250YWluZXInKTtcclxuICAgICAgICBuZXdzY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHJldHVybiBuZXdzY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSGlkZSBOZXdzIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBoaWRlVGl0bGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2hvdyBOZXdzIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBzaG93VGl0bGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvL0V2ZW50IGxpc3RlbmVyIC0gc2hvdyBtb3JlIGJ1dHRvbiBjbGlja1xyXG4gICAgZnVuY3Rpb24gYWRkU2hvd01vcmVDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgICAgIGZvcihsZXQgdmFsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlX3Nob3ctbW9yZScpKXtcclxuICAgICAgICAgICAgdmFsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9zaG93LW1vcmUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBbGVydE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuaW5uZXJIVE1MID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBUcnkgYWdhaW4gbGF0ZXInO1xyXG4gICAgfVxyXG5cclxuXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==