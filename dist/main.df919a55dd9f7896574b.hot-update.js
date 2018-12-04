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
                var modal = new module.ModalWindow();
                modal.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJ0aGVuIiwibW9kdWxlIiwibmV3cyIsIk5ld3MiLCJnZXRJbnB1dFZhbHVlIiwiY3JlYXRlTmV3cyIsIm5ld3NDb250YWluZXIiLCJnZXROZXdzQ29udGFpbmVyIiwiaGlkZVRpdGxlIiwiZ2V0RGF0YSIsImFydGljbGVzIiwidmFsIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZUFydGljbGUiLCJhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIiLCJtb2RhbCIsIk1vZGFsV2luZG93Iiwic2hvdyIsInNob3dUaXRsZSIsImVuYWJsZUJ1dHRvbiIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibmV3c2NvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwic2hvd0FsZXJ0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFXO0FBQ3ZCO0FBQ0FDLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ0MsT0FBbEMsR0FBNEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3JEQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQSxtSEFBb0JDLElBQXBCLENBQXlCLFVBQUFDLE1BQU0sRUFBSTtBQUMvQixVQUFJQyxJQUFJLEdBQUcsSUFBSUQsTUFBTSxDQUFDRSxJQUFYLENBQWdCQyxhQUFhLENBQUMsU0FBRCxDQUE3QixFQUEw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LEdBQXVEOztBQUMzREEsV0FBRyxDQUFDZixPQUFKLEdBQWMsWUFBWTtBQUN0QixlQUFLbUMsVUFBTCxDQUFnQnBDLGFBQWhCLENBQThCLGdCQUE5QixFQUFnRGlDLEtBQWhELENBQXNEQyxPQUF0RCxHQUFnRSxPQUFoRTtBQUNBLGVBQUtFLFVBQUwsQ0FBZ0JwQyxhQUFoQixDQUE4QixvQkFBOUIsRUFBb0RpQyxLQUFwRCxDQUEwREMsT0FBMUQsR0FBb0UsTUFBcEU7QUFDSCxTQUhEO0FBSUg7QUFOK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9uQzs7QUFFRCxXQUFTRyxnQkFBVCxHQUE0QjtBQUN4QnRDLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1QzhCLFNBQXZDLEdBQW1ELHVDQUFuRDtBQUNIO0FBR0osQ0FuRkQsQyIsImZpbGUiOiJtYWluLmRmOTE5YTU1ZGQ5Zjc4OTY1NzRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCB7TW9kYWxXaW5kb3d9IGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvL0V2ZW50IExpc3RlbmVyIC0gc3VibWl0IGNsYXNzIGJ1dHRvbiBjbGlja1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNhYmxlQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIGltcG9ydCgnLi9OZXdzLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3cyA9IG5ldyBtb2R1bGUuTmV3cyhnZXRJbnB1dFZhbHVlKCdjb3VudHJ5JyksIGdldElucHV0VmFsdWUoJ2NhdGVnb3J5JyksIGdldElucHV0VmFsdWUoJ3BhZ2VzaXplJykpO1xyXG4gICAgICAgICAgICBjcmVhdGVOZXdzKG5ld3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3cyhuZXdzKSB7XHJcbiAgICAgICAgbGV0IG5ld3NDb250YWluZXIgPSBnZXROZXdzQ29udGFpbmVyKCk7XHJcbiAgICAgICAgaGlkZVRpdGxlKCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlcyA9IGF3YWl0IG5ld3MuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBpZihhcnRpY2xlcyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHZhbCBvZiBhcnRpY2xlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWwuZ2VuZXJhdGVBcnRpY2xlKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4vTW9kYWwuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kYWwgPSBuZXcgbW9kdWxlLk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93VGl0bGUoKTtcclxuICAgICAgICBlbmFibGVCdXR0b24oJy5zdWJtaXQnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgaW5wdXQgdmFsdWUgZnJvbSBVSVxyXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRGlzYWJsZSBzdWJtaXQgYnV0dG9uLCBwcmV2ZW50IG11bHRpY2xpY2tcclxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0xvYWRpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5pbm5lckhUTUwgPSAnR2V0IG5ld3MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGFuZCBjbGVhciBuZXdzIGNvbnRhaW5lciBpbiBET01cclxuICAgIGZ1bmN0aW9uIGdldE5ld3NDb250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3c2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19jb250YWluZXInKTtcclxuICAgICAgICBuZXdzY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHJldHVybiBuZXdzY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSGlkZSBOZXdzIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBoaWRlVGl0bGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2hvdyBOZXdzIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBzaG93VGl0bGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvL0V2ZW50IGxpc3RlbmVyIC0gc2hvdyBtb3JlIGJ1dHRvbiBjbGlja1xyXG4gICAgZnVuY3Rpb24gYWRkU2hvd01vcmVDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgICAgIGZvcihsZXQgdmFsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlX3Nob3ctbW9yZScpKXtcclxuICAgICAgICAgICAgdmFsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9zaG93LW1vcmUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBbGVydE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3RpdGxlJykuaW5uZXJIVE1MID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBUcnkgYWdhaW4gbGF0ZXInO1xyXG4gICAgfVxyXG5cclxuXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==