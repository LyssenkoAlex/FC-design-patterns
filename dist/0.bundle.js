(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
/*! exports provided: ArticleFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFactory", function() { return ArticleFactory; });
/* harmony import */ var _Article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.js */ "./js/Article.js");
/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/news.scss */ "./scss/news.scss");
/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_news_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 //Factory

var ArticleFactory =
/*#__PURE__*/
function () {
  function ArticleFactory() {
    _classCallCheck(this, ArticleFactory);
  }

  _createClass(ArticleFactory, null, [{
    key: "createArticles",
    //Get json data from API
    value: function createArticles(country, category, pagesize) {
      var formApi = "https://newsapi.org/v2/top-headlines?country=".concat(country, "&category=").concat(category, "&sortBy=popularity&pageSize=").concat(pagesize, "&apiKey=59e5ec14708e4b768acc8a0664f22906");
      return fetch(formApi).then(function (response) {
        return response.json();
      }).then(function (newsjson) {
        return ArticleFactory.handleJSON(newsjson);
      });
    } //Form articles list

  }, {
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

  return ArticleFactory;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2pzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9uZXdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9uZXdzLnNjc3M/Yzc4ZCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXV0aG9yIiwidGl0bGUiLCJ1cmxUb0ltYWdlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwidXJsIiwidGVtcGxhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiQXJ0aWNsZUZhY3RvcnkiLCJjb3VudHJ5IiwiY2F0ZWdvcnkiLCJwYWdlc2l6ZSIsImZvcm1BcGkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJuZXdzanNvbiIsImhhbmRsZUpTT04iLCJyZXNwb24iLCJhcnRpY2xlcyIsInZhbCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FBQ0kseUJBQW9FO0FBQUEsUUFBdkRDLE1BQXVELFFBQXZEQSxNQUF1RDtBQUFBLFFBQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxRQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsUUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLFFBQW5CQyxXQUFtQixRQUFuQkEsV0FBbUI7QUFBQSxRQUFOQyxHQUFNLFFBQU5BLEdBQU07O0FBQUE7O0FBQ2hFLFNBQUtMLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFSTDtBQUFBO0FBVUk7QUFWSixzQ0FX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QkFBOEIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsb0JBQW9CLGlCQUFpQixtQkFBbUIsd0JBQXdCLEVBQUUsOEJBQThCLGdDQUFnQyxtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEVBQUUsdUJBQXVCLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9CQUFvQixxQkFBcUIsRUFBRSxvQkFBb0IsdUJBQXVCLGFBQWEsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLCtCQUErQixxQkFBcUIsaUJBQWlCLG9CQUFvQixFQUFFLDBDQUEwQyxjQUFjLGlCQUFpQixFQUFFLEVBQUUsMENBQTBDLGNBQWMsa0JBQWtCLEVBQUUsRUFBRTs7QUFFajBFOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLGdSQUFtSjs7QUFFekssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLGdSQUFtSjtBQUN0SyxtQkFBbUIsbUJBQU8sQ0FBQyxnUkFBbUo7O0FBRTlLLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2F1dGhvciwgdGl0bGUsIHVybFRvSW1hZ2UsIGNvbnRlbnQsIGRlc2NyaXB0aW9uLCB1cmx9KSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vQXJ0aWNsZSBnZW5lcmF0b3JcclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpe1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGFydGljbGUuY2xhc3NOYW1lID0gJ2FydGljbGUnO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhvcil7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cImFydGljbGVfX2F1dGhvclwiPiR7dGhpcy5hdXRob3J9PC9wPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKXtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cImFydGljbGVfX3RpdGxlXCI+JHt0aGlzLnRpdGxlfTwvaDM+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJhcnRpY2xlX19kZXNjcmlwdGlvblwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCB8fCB0aGlzLnVybFRvSW1hZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8YnV0dG9uIGNsYXNzPVwiYXJ0aWNsZV9zaG93LW1vcmVcIj5TaG93IE1vcmU8L2J1dHRvbj48ZGl2IGNsYXNzPVwiYXJ0aWNsZV9fYm9keVwiPmA7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnVybFRvSW1hZ2Upe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxpbWcgY2xhc3M9XCJhcnRpY2xlX19pbWdcIiBzcmM9XCIke3RoaXMudXJsVG9JbWFnZX1cIj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGVudCl7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJhcnRpY2xlX19jb250ZW50XCI+JHt0aGlzLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnVybCl7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8YSBjbGFzcz1cImFydGljbGVfX2hyZWZcIiBocmVmPVwiJHt0aGlzLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TaG93IFNvdXJjZTwvYT5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnRpY2xlLmlubmVySFRNTD10ZW1wbGF0ZTtcclxuICAgICAgICByZXR1cm4gYXJ0aWNsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4vQXJ0aWNsZS5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbmV3cy5zY3NzJztcclxuXHJcbi8vRmFjdG9yeVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUZhY3Rvcnkge1xyXG5cclxuICAgIC8vR2V0IGpzb24gZGF0YSBmcm9tIEFQSVxyXG4gICAgc3RhdGljIGNyZWF0ZUFydGljbGVzKGNvdW50cnksIGNhdGVnb3J5LCBwYWdlc2l6ZSl7XHJcbiAgICAgICAgbGV0IGZvcm1BcGkgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9JHtjb3VudHJ5fSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZzb3J0Qnk9cG9wdWxhcml0eSZwYWdlU2l6ZT0ke3BhZ2VzaXplfSZhcGlLZXk9NTllNWVjMTQ3MDhlNGI3NjhhY2M4YTA2NjRmMjI5MDZgO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChmb3JtQXBpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKG5ld3Nqc29uID0+IEFydGljbGVGYWN0b3J5LmhhbmRsZUpTT04obmV3c2pzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zvcm0gYXJ0aWNsZXMgbGlzdFxyXG4gICAgc3RhdGljIGhhbmRsZUpTT04ocmVzcG9uKXtcclxuICAgICAgICBsZXQgYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IHZhbCBvZiByZXNwb24uYXJ0aWNsZXMpIHtcclxuICAgICAgICAgICAgYXJ0aWNsZXMucHVzaChuZXcgQXJ0aWNsZSh2YWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFydGljbGVzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmV3cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5uZXdzX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5hcnRpY2xlIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ0LCAyMTksIDAuMyk7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5TaGFkb3coU3RyZW5ndGg9MTYsIERpcmVjdGlvbj0wLCBDb2xvcj0jMTUwOTA5KVxcXCI7XFxuICAvKklFIDgqL1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDIxLCA5LCA5LCAwLjYpO1xcbiAgLypGRiAzLjUrKi9cXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgyMSwgOSwgOSwgMC42KTtcXG4gIC8qU2FmMy00LCBDaHJvbWUsIGlPUyA0LjAuMi00LjIsIEFuZHJvaWQgMi4zKyovXFxuICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDIxLCA5LCA5LCAwLjYpO1xcbiAgLyogRkYzLjUrLCBPcGVyYSA5KywgU2FmMSssIENocm9tZSwgSUUxMCAqL1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTE2LCBEaXJlY3Rpb249MTM1LCBDb2xvcj0jMTUwOTA5KTtcXG4gIC8qSUUgNS41LTcqLyB9XFxuXFxuLmFydGljbGVfX2F1dGhvciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogYnJvd247IH1cXG5cXG4uYXJ0aWNsZV9fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFydGljbGVfX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi5hcnRpY2xlX3Nob3ctbW9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTUwOTA5O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjMTUwOTA5O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG4gIC5hcnRpY2xlX3Nob3ctbW9yZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTA5MDk7XFxuICAgIGNvbG9yOiBibGFjazsgfVxcbiAgLmFydGljbGVfc2hvdy1tb3JlOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmFydGljbGVfX2JvZHkge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5hcnRpY2xlX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuXFxuLmFydGljbGVfX2NvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmFydGljbGVfX2hyZWYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBicm93bjtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYXJ0aWNsZSB7XFxuICAgIHdpZHRoOiA0NiU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuYXJ0aWNsZSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uZXdzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcInNvdXJjZU1hcFwiOnRydWUsXCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3Muc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmV3cy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==