(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/Article.js":
/*!***********************!*\
  !*** ./js/Article.js ***!
  \***********************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Article =
/*#__PURE__*/
function () {
  function Article(_ref) {
    var author = _ref.author,
        title = _ref.title,
        urlToImage = _ref.urlToImage,
        content = _ref.content,
        description = _ref.description,
        url = _ref.url;

    _classCallCheck(this, Article);

    this.author = author;
    this.title = title;
    this.urlToImage = urlToImage;
    this.content = content;
    this.description = description;
    this.url = url;
  }

  _createClass(Article, [{
    key: "generateArticle",
    //Article generator
    value: function generateArticle() {
      var template = '';
      var article = document.createElement('article');
      article.className = 'article';

      if (this.author) {
        template += "<p class=\"article__author\">".concat(this.author, "</p>");
      }

      if (this.title) {
        template += "<h3 class=\"article__title\">".concat(this.title, "</h3>");
      }

      if (this.description) {
        template += "<p class=\"article__description\">".concat(this.description, "</p>");
      }

      if (this.content || this.urlToImage) {
        template += "<button class=\"article_show-more\">Show More</button><div class=\"article__body\">";

        if (this.urlToImage) {
          template += "<img class=\"article__img\" src=\"".concat(this.urlToImage, "\">");
        }

        if (this.content) {
          template += "<p class=\"article__content\">".concat(this.content, "</p>");
        }

        template += "</div>";
      }

      if (this.url) {
        template += "<a class=\"article__href\" href=\"".concat(this.url, "\" target=\"_blank\">Show Source</a>");
      }

      article.innerHTML = template;
      return article;
    }
  }]);

  return Article;
}();

/***/ }),

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2pzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9uZXdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9uZXdzLnNjc3M/Yzc4ZCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXV0aG9yIiwidGl0bGUiLCJ1cmxUb0ltYWdlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidXJsIiwidGVtcGxhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiTmV3cyIsImNvdW50cnkiLCJjYXRlZ29yeSIsInBhZ2VzaXplIiwiZmV0Y2giLCJmb3JtQXBpIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm5ld3Nqc29uIiwiaGFuZGxlSlNPTiIsInJlc3BvbiIsImFydGljbGVzIiwidmFsIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBYjtBQUFBO0FBQUE7QUFDSSx5QkFBb0U7QUFBQSxRQUF2REMsTUFBdUQsUUFBdkRBLE1BQXVEO0FBQUEsUUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLFFBQXhDQyxVQUF3QyxRQUF4Q0EsVUFBd0M7QUFBQSxRQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsUUFBbkJDLFdBQW1CLFFBQW5CQSxXQUFtQjtBQUFBLFFBQU5DLEdBQU0sUUFBTkEsR0FBTTs7QUFBQTs7QUFDaEUsU0FBS0wsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQVJMO0FBQUE7QUFVSTtBQVZKLHNDQVdxQjtBQUNiLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDtBQUNBRixhQUFPLENBQUNHLFNBQVIsR0FBb0IsU0FBcEI7O0FBQ0EsVUFBSSxLQUFLVixNQUFULEVBQWdCO0FBQ1pNLGdCQUFRLDJDQUFrQyxLQUFLTixNQUF2QyxTQUFSO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLQyxLQUFULEVBQWU7QUFDWEssZ0JBQVEsMkNBQWtDLEtBQUtMLEtBQXZDLFVBQVI7QUFDSDs7QUFDRCxVQUFJLEtBQUtHLFdBQVQsRUFBcUI7QUFDakJFLGdCQUFRLGdEQUF1QyxLQUFLRixXQUE1QyxTQUFSO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLRCxPQUFMLElBQWdCLEtBQUtELFVBQXpCLEVBQXFDO0FBRWpDSSxnQkFBUSx5RkFBUjs7QUFFQSxZQUFHLEtBQUtKLFVBQVIsRUFBbUI7QUFDZkksa0JBQVEsZ0RBQXNDLEtBQUtKLFVBQTNDLFFBQVI7QUFDSDs7QUFDRCxZQUFHLEtBQUtDLE9BQVIsRUFBZ0I7QUFDWkcsa0JBQVEsNENBQW1DLEtBQUtILE9BQXhDLFNBQVI7QUFDSDs7QUFFREcsZ0JBQVEsWUFBUjtBQUNIOztBQUVELFVBQUcsS0FBS0QsR0FBUixFQUFZO0FBQ1JDLGdCQUFRLGdEQUFzQyxLQUFLRCxHQUEzQyx5Q0FBUjtBQUNIOztBQUVERSxhQUFPLENBQUNJLFNBQVIsR0FBa0JMLFFBQWxCO0FBQ0EsYUFBT0MsT0FBUDtBQUNIO0FBNUNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRU8sSUFBTUssSUFBYjtBQUFBO0FBQUE7QUFDSSxnQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0JDLFFBQS9CLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7QUFMTDtBQUFBO0FBWUk7QUFaSiw4QkFhYTtBQUNMLGFBQU9DLEtBQUssQ0FBQyxLQUFLQyxPQUFOLENBQUwsQ0FDRkMsSUFERSxDQUNHLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLE9BRFgsRUFFRkYsSUFGRSxDQUVHLFVBQUFHLFFBQVE7QUFBQSxlQUFJVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JELFFBQWhCLENBQUo7QUFBQSxPQUZYLENBQVA7QUFHSCxLQWpCTCxDQW1CSTs7QUFuQko7QUFBQTtBQU9JO0FBUEosd0JBUWlCO0FBQ1QscUVBQXlELEtBQUtSLE9BQTlELHVCQUFrRixLQUFLQyxRQUF2Rix5Q0FBOEgsS0FBS0MsUUFBbkk7QUFDSDtBQVZMO0FBQUE7QUFBQSwrQkFvQnNCUSxNQXBCdEIsRUFvQjZCO0FBQ3JCLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBRHFCO0FBQUE7QUFBQTs7QUFBQTtBQUVyQiw2QkFBZUQsTUFBTSxDQUFDQyxRQUF0Qiw4SEFBZ0M7QUFBQSxjQUF4QkMsR0FBd0I7QUFDNUJELGtCQUFRLENBQUNFLElBQVQsQ0FBYyxJQUFJM0IsbURBQUosQ0FBWTBCLEdBQVosQ0FBZDtBQUNIO0FBSm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS3JCLGFBQU9ELFFBQVA7QUFDSDtBQTFCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7O0FDSEEsMkJBQTJCLG1CQUFPLENBQUMsNkZBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxVQUFVLDRCQUE0QixFQUFFLHNCQUFzQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxFQUFFLGNBQWMsZUFBZSwrQ0FBK0Msd0JBQXdCLHVCQUF1Qix1QkFBdUIsc0dBQXNHLDhEQUE4RCxvRUFBb0UsZ0dBQWdHLCtJQUErSSxrQkFBa0Isc0JBQXNCLGdCQUFnQixhQUFhLGFBQWEsc0JBQXNCLHVCQUF1Qix1QkFBdUIscUJBQXFCLG9CQUFvQixpQkFBaUIsRUFBRSxxQkFBcUIscUJBQXFCLHdCQUF3QixvQkFBb0Isd0JBQXdCLEVBQUUsMkJBQTJCLHFCQUFxQixvQkFBb0Isd0JBQXdCLHdCQUF3QixFQUFFLHdCQUF3Qiw4QkFBOEIscUJBQXFCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsb0JBQW9CLGlCQUFpQixtQkFBbUIsd0JBQXdCLEVBQUUsOEJBQThCLGdDQUFnQyxtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEVBQUUsdUJBQXVCLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9CQUFvQixxQkFBcUIsRUFBRSxvQkFBb0IsdUJBQXVCLGFBQWEsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLCtCQUErQixxQkFBcUIsaUJBQWlCLG9CQUFvQixFQUFFLDBDQUEwQyxjQUFjLGlCQUFpQixFQUFFLEVBQUUsMENBQTBDLGNBQWMsa0JBQWtCLEVBQUUsRUFBRTs7QUFFajBFOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLGdSQUFtSjs7QUFFekssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLGdSQUFtSjtBQUN0SyxtQkFBbUIsbUJBQU8sQ0FBQyxnUkFBbUo7O0FBRTlLLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2F1dGhvciwgdGl0bGUsIHVybFRvSW1hZ2UsIGNvbnRlbnQsIGRlc2NyaXB0aW9uLCB1cmx9KSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vQXJ0aWNsZSBnZW5lcmF0b3JcclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpe1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGFydGljbGUuY2xhc3NOYW1lID0gJ2FydGljbGUnO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhvcil7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cImFydGljbGVfX2F1dGhvclwiPiR7dGhpcy5hdXRob3J9PC9wPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKXtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cImFydGljbGVfX3RpdGxlXCI+JHt0aGlzLnRpdGxlfTwvaDM+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJhcnRpY2xlX19kZXNjcmlwdGlvblwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCB8fCB0aGlzLnVybFRvSW1hZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8YnV0dG9uIGNsYXNzPVwiYXJ0aWNsZV9zaG93LW1vcmVcIj5TaG93IE1vcmU8L2J1dHRvbj48ZGl2IGNsYXNzPVwiYXJ0aWNsZV9fYm9keVwiPmA7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnVybFRvSW1hZ2Upe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxpbWcgY2xhc3M9XCJhcnRpY2xlX19pbWdcIiBzcmM9XCIke3RoaXMudXJsVG9JbWFnZX1cIj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGVudCl7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJhcnRpY2xlX19jb250ZW50XCI+JHt0aGlzLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnVybCl7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8YSBjbGFzcz1cImFydGljbGVfX2hyZWZcIiBocmVmPVwiJHt0aGlzLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TaG93IFNvdXJjZTwvYT5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnRpY2xlLmlubmVySFRNTD10ZW1wbGF0ZTtcclxuICAgICAgICByZXR1cm4gYXJ0aWNsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4vQXJ0aWNsZS5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbmV3cy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvdW50cnksIGNhdGVnb3J5LCBwYWdlc2l6ZSl7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5wYWdlc2l6ZSA9IHBhZ2VzaXplO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0dldCBBUEkgY2FsbCBhZGRyZXNzXHJcbiAgICBnZXQgZm9ybUFwaSgpe1xyXG4gICAgICAgIHJldHVybiAoYGh0dHBzOi8vbmV3c2FwaWEub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT0ke3RoaXMuY291bnRyeX0mY2F0ZWdvcnk9JHt0aGlzLmNhdGVnb3J5fSZzb3J0Qnk9cG9wdWxhcml0eSZwYWdlU2l6ZT0ke3RoaXMucGFnZXNpemV9JmFwaUtleT01OWU1ZWMxNDcwOGU0Yjc2OGFjYzhhMDY2NGYyMjkwNmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGpzb24gZGF0YSBmcm9tIEFQSVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmZvcm1BcGkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4obmV3c2pzb24gPT4gTmV3cy5oYW5kbGVKU09OKG5ld3Nqc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gb3JtIGFydGljbGVzIGxpc3RcclxuICAgIHN0YXRpYyBoYW5kbGVKU09OKHJlc3Bvbil7XHJcbiAgICAgICAgbGV0IGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgcmVzcG9uLmFydGljbGVzKSB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLnB1c2gobmV3IEFydGljbGUodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnRpY2xlcztcclxuICAgIH1cclxufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5ld3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4ubmV3c19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uYXJ0aWNsZSB7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDI0NCwgMjE5LCAwLjMpO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTE2LCBEaXJlY3Rpb249MCwgQ29sb3I9IzE1MDkwOSlcXFwiO1xcbiAgLypJRSA4Ki9cXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgyMSwgOSwgOSwgMC42KTtcXG4gIC8qRkYgMy41KyovXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNnB4IHJnYmEoMjEsIDksIDksIDAuNik7XFxuICAvKlNhZjMtNCwgQ2hyb21lLCBpT1MgNC4wLjItNC4yLCBBbmRyb2lkIDIuMysqL1xcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgyMSwgOSwgOSwgMC42KTtcXG4gIC8qIEZGMy41KywgT3BlcmEgOSssIFNhZjErLCBDaHJvbWUsIElFMTAgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LlNoYWRvdyhTdHJlbmd0aD0xNiwgRGlyZWN0aW9uPTEzNSwgQ29sb3I9IzE1MDkwOSk7XFxuICAvKklFIDUuNS03Ki8gfVxcblxcbi5hcnRpY2xlX19hdXRob3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGJyb3duOyB9XFxuXFxuLmFydGljbGVfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hcnRpY2xlX19kZXNjcmlwdGlvbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG4uYXJ0aWNsZV9zaG93LW1vcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE1MDkwOTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogIzE1MDkwOTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuICAuYXJ0aWNsZV9zaG93LW1vcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUwOTA5O1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gIC5hcnRpY2xlX3Nob3ctbW9yZTpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5hcnRpY2xlX19ib2R5IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uYXJ0aWNsZV9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi5hcnRpY2xlX19jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5hcnRpY2xlX19ocmVmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogYnJvd247XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFydGljbGUge1xcbiAgICB3aWR0aDogNDYlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmFydGljbGUge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmV3cy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJzb3VyY2VNYXBcIjp0cnVlLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uZXdzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3Muc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=