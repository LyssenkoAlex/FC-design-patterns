webpackHotUpdate("main",{

/***/ "./js/News.js":
/*!********************!*\
  !*** ./js/News.js ***!
  \********************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony import */ var _Article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.js */ "./js/Article.js");
/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/news.scss */ "./scss/news.scss");
/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_news_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var News =
/*#__PURE__*/
function () {
  function News(country, category, pagesize) {
    _classCallCheck(this, News);

    this.country = country;
    this.category = category;
    this.pagesize = pagesize;
  }

  _createClass(News, [{
    key: "getData",
    //Get json data from API
    value: function getData() {
      return fetch(this.formApi).then(function (response) {
        return response.json();
      }).then(function (newsjson) {
        return News.handleJSON(newsjson);
      });
    } //Form articles list

  }, {
    key: "formApi",
    //Get API call address
    get: function get() {
      return "https://newsapia.org/v2/top-headlines?country=".concat(this.country, "&category=").concat(this.category, "&sortBy=popularity&pageSize=").concat(this.pagesize, "&apiKey=59e5ec14708e4b768acc8a0664f22906");
    }
  }], [{
    key: "handleJSON",
    value: function handleJSON(respon) {
      var articles = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = respon.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var val = _step.value;
          articles.push(new _Article_js__WEBPACK_IMPORTED_MODULE_0__["Article"](val));
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

      return articles;
    }
  }]);

  return News;
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
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader??ref--5-2!./node_modules/sass-loader/lib/loader.js!./scss/news.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news {\n  background-color: white; }\n\n.news__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.article {\n  width: 30%;\n  background-color: rgba(248, 244, 219, 0.3);\n  margin-bottom: 50px;\n  padding: 30px 20px;\n  position: relative;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Shadow(Strength=16, Direction=0, Color=#150909)\";\n  /*IE 8*/\n  -moz-box-shadow: 0 0 16px rgba(21, 9, 9, 0.6);\n  /*FF 3.5+*/\n  -webkit-box-shadow: 0 0 16px rgba(21, 9, 9, 0.6);\n  /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/\n  box-shadow: 0 0 16px rgba(21, 9, 9, 0.6);\n  /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */\n  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=16, Direction=135, Color=#150909);\n  /*IE 5.5-7*/ }\n\n.article__author {\n  width: 100%;\n  top: 5px;\n  right: 0;\n  text-align: right;\n  padding-right: 5px;\n  position: absolute;\n  font-weight: 300;\n  font-size: 12px;\n  color: brown; }\n\n.article__title {\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: normal; }\n\n.article__description {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: normal;\n  margin-bottom: 15px; }\n\n.article_show-more {\n  border: 1px solid #150909;\n  background: none;\n  color: #150909;\n  text-transform: uppercase;\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  cursor: pointer;\n  user-select: none;\n  outline: none;\n  transition: .3s;\n  padding: 5px 10px;\n  text-transform: lowercase;\n  font-size: 15px;\n  margin: auto;\n  display: block;\n  margin-bottom: 15px; }\n  .article_show-more:hover {\n    background-color: #150909;\n    color: black; }\n  .article_show-more:hover {\n    color: white; }\n\n.article__body {\n  display: none; }\n\n.article__img {\n  width: 100%;\n  margin-bottom: 15px; }\n\n.article__content {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: normal;\n  max-width: 100%;\n  overflow: hidden; }\n\n.article__href {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  padding-right: 10px;\n  width: 100%;\n  text-align: right;\n  text-decoration: underline;\n  font-weight: 300;\n  color: brown;\n  font-size: 14px; }\n\n@media screen and (max-width: 800px) {\n  .article {\n    width: 46%; } }\n\n@media screen and (max-width: 500px) {\n  .article {\n    width: 100%; } }\n", ""]);

// exports


/***/ }),

/***/ "./scss/news.scss":
/*!************************!*\
  !*** ./scss/news.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./news.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/news.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./news.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/news.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader??ref--5-2!../node_modules/sass-loader/lib/loader.js!./news.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/news.scss");

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9OZXdzLmpzIiwid2VicGFjazovLy8uL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL25ld3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL25ld3Muc2Nzcz9jNzhkIl0sIm5hbWVzIjpbIk5ld3MiLCJjb3VudHJ5IiwiY2F0ZWdvcnkiLCJwYWdlc2l6ZSIsImZldGNoIiwiZm9ybUFwaSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJuZXdzanNvbiIsImhhbmRsZUpTT04iLCJyZXNwb24iLCJhcnRpY2xlcyIsInZhbCIsInB1c2giLCJBcnRpY2xlIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJuZXdzIiwiZ2V0SW5wdXRWYWx1ZSIsImNyZWF0ZU5ld3MiLCJuZXdzQ29udGFpbmVyIiwiZ2V0TmV3c0NvbnRhaW5lciIsImhpZGVUaXRsZSIsImdldERhdGEiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlQXJ0aWNsZSIsImFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lciIsIm1vZHVsZSIsImdlbmVyYXRlTW9kYWxXaW5kb3ciLCJzaG93VGl0bGUiLCJlbmFibGVCdXR0b24iLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIm5ld3Njb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInNob3dBbGVydE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxJQUFiO0FBQUE7QUFBQTtBQUNJLGdCQUFZQyxPQUFaLEVBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBd0M7QUFB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QUF1Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsb0JBQW9CLGlCQUFpQixtQkFBbUIsd0JBQXdCLEVBQUUsOEJBQThCLGdDQUFnQyxtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEVBQUUsdUJBQXVCLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9CQUFvQixxQkFBcUIsRUFBRSxvQkFBb0IsdUJBQXVCLGFBQWEsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLCtCQUErQixxQkFBcUIsaUJBQWlCLG9CQUFvQixFQUFFLDBDQUEwQyxjQUFjLGlCQUFpQixFQUFFLEVBQUUsMENBQTBDLGNBQWMsa0JBQWtCLEVBQUUsRUFBRTs7QUFFajBFOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLGdSQUFtSjs7QUFFekssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLGdSQUFtSjtBQUN0SyxtQkFBbUIsbUJBQU8sQ0FBQyxnUkFBbUo7O0FBRTlLLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Im1haW4uZmFhYjYxMWJlN2Q5NGJmMjM0OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4vQXJ0aWNsZS5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbmV3cy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvdW50cnksIGNhdGVnb3J5LCBwYWdlc2l6ZSl7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5wYWdlc2l6ZSA9IHBhZ2VzaXplO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0dldCBBUEkgY2FsbCBhZGRyZXNzXHJcbiAgICBnZXQgZm9ybUFwaSgpe1xyXG4gICAgICAgIHJldHVybiAoYGh0dHBzOi8vbmV3c2FwaWEub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT0ke3RoaXMuY291bnRyeX0mY2F0ZWdvcnk9JHt0aGlzLmNhdGVnb3J5fSZzb3J0Qnk9cG9wdWxhcml0eSZwYWdlU2l6ZT0ke3RoaXMucGFnZXNpemV9JmFwaUtleT01OWU1ZWMxNDcwOGU0Yjc2OGFjYzhhMDY2NGYyMjkwNmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGpzb24gZGF0YSBmcm9tIEFQSVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmZvcm1BcGkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4obmV3c2pzb24gPT4gTmV3cy5oYW5kbGVKU09OKG5ld3Nqc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gb3JtIGFydGljbGVzIGxpc3RcclxuICAgIHN0YXRpYyBoYW5kbGVKU09OKHJlc3Bvbil7XHJcbiAgICAgICAgbGV0IGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgcmVzcG9uLmFydGljbGVzKSB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLnB1c2gobmV3IEFydGljbGUodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnRpY2xlcztcclxuICAgIH1cclxufSIsImltcG9ydCB7TmV3c30gZnJvbSBcIi4vTmV3cy5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvL0V2ZW50IExpc3RlbmVyIC0gc3VibWl0IGNsYXNzIGJ1dHRvbiBjbGlja1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNhYmxlQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIGxldCBuZXdzID0gbmV3IE5ld3MoZ2V0SW5wdXRWYWx1ZSgnY291bnRyeScpLCBnZXRJbnB1dFZhbHVlKCdjYXRlZ29yeScpLCBnZXRJbnB1dFZhbHVlKCdwYWdlc2l6ZScpKTtcclxuICAgICAgICBjcmVhdGVOZXdzKG5ld3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdzKG5ld3MpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGdldE5ld3NDb250YWluZXIoKTtcclxuICAgICAgICBoaWRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVzID0gYXdhaXQgbmV3cy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdmFsIG9mIGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbC5nZW5lcmF0ZUFydGljbGUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9Nb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtb2R1bGUuZ2VuZXJhdGVNb2RhbFdpbmRvdyhlcnIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUaXRsZSgpO1xyXG4gICAgICAgIGVuYWJsZUJ1dHRvbignLnN1Ym1pdCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBpbnB1dCB2YWx1ZSBmcm9tIFVJXHJcbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9EaXNhYmxlIHN1Ym1pdCBidXR0b24sIHByZXZlbnQgbXVsdGljbGlja1xyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTG9hZGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLmlubmVySFRNTCA9ICdHZXQgbmV3cyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgYW5kIGNsZWFyIG5ld3MgY29udGFpbmVyIGluIERPTVxyXG4gICAgZnVuY3Rpb24gZ2V0TmV3c0NvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBuZXdzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIG5ld3Njb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcmV0dXJuIG5ld3Njb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIGhpZGVUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIHNob3dUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXZlbnQgbGlzdGVuZXIgLSBzaG93IG1vcmUgYnV0dG9uIGNsaWNrXHJcbiAgICBmdW5jdGlvbiBhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVfc2hvdy1tb3JlJykpe1xyXG4gICAgICAgICAgICB2YWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX3Nob3ctbW9yZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FsZXJ0TWVzc2FnZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFRyeSBhZ2FpbiBsYXRlcic7XHJcbiAgICB9XHJcblxyXG5cclxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uZXdzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXFxuLm5ld3NfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmFydGljbGUge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDQsIDIxOSwgMC4zKTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LlNoYWRvdyhTdHJlbmd0aD0xNiwgRGlyZWN0aW9uPTAsIENvbG9yPSMxNTA5MDkpXFxcIjtcXG4gIC8qSUUgOCovXFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNnB4IHJnYmEoMjEsIDksIDksIDAuNik7XFxuICAvKkZGIDMuNSsqL1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDIxLCA5LCA5LCAwLjYpO1xcbiAgLypTYWYzLTQsIENocm9tZSwgaU9TIDQuMC4yLTQuMiwgQW5kcm9pZCAyLjMrKi9cXG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IHJnYmEoMjEsIDksIDksIDAuNik7XFxuICAvKiBGRjMuNSssIE9wZXJhIDkrLCBTYWYxKywgQ2hyb21lLCBJRTEwICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5TaGFkb3coU3RyZW5ndGg9MTYsIERpcmVjdGlvbj0xMzUsIENvbG9yPSMxNTA5MDkpO1xcbiAgLypJRSA1LjUtNyovIH1cXG5cXG4uYXJ0aWNsZV9fYXV0aG9yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiBicm93bjsgfVxcblxcbi5hcnRpY2xlX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYXJ0aWNsZV9fZGVzY3JpcHRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuXFxuLmFydGljbGVfc2hvdy1tb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNTA5MDk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICMxNTA5MDk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IC4zcztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcbiAgLmFydGljbGVfc2hvdy1tb3JlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MDkwOTtcXG4gICAgY29sb3I6IGJsYWNrOyB9XFxuICAuYXJ0aWNsZV9zaG93LW1vcmU6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYXJ0aWNsZV9fYm9keSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmFydGljbGVfX2ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG4uYXJ0aWNsZV9fY29udGVudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uYXJ0aWNsZV9faHJlZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGJyb3duO1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5hcnRpY2xlIHtcXG4gICAgd2lkdGg6IDQ2JTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5hcnRpY2xlIHtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3Muc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wic291cmNlTWFwXCI6dHJ1ZSxcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmV3cy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uZXdzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9