webpackHotUpdate(1,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9OZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJjb3VudHJ5IiwiY2F0ZWdvcnkiLCJwYWdlc2l6ZSIsImZldGNoIiwiZm9ybUFwaSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJuZXdzanNvbiIsImhhbmRsZUpTT04iLCJyZXNwb24iLCJhcnRpY2xlcyIsInZhbCIsInB1c2giLCJBcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsSUFBYjtBQUFBO0FBQUE7QUFDSSxnQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0JDLFFBQS9CLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7QUFMTDtBQUFBO0FBWUk7QUFaSiw4QkFhYTtBQUNMLGFBQU9DLEtBQUssQ0FBQyxLQUFLQyxPQUFOLENBQUwsQ0FDRkMsSUFERSxDQUNHLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLE9BRFgsRUFFRkYsSUFGRSxDQUVHLFVBQUFHLFFBQVE7QUFBQSxlQUFJVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JELFFBQWhCLENBQUo7QUFBQSxPQUZYLENBQVA7QUFHSCxLQWpCTCxDQW1CSTs7QUFuQko7QUFBQTtBQU9JO0FBUEosd0JBUWlCO0FBQ1QscUVBQXlELEtBQUtSLE9BQTlELHVCQUFrRixLQUFLQyxRQUF2Rix5Q0FBOEgsS0FBS0MsUUFBbkk7QUFDSDtBQVZMO0FBQUE7QUFBQSwrQkFvQnNCUSxNQXBCdEIsRUFvQjZCO0FBQ3JCLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBRHFCO0FBQUE7QUFBQTs7QUFBQTtBQUVyQiw2QkFBZUQsTUFBTSxDQUFDQyxRQUF0Qiw4SEFBZ0M7QUFBQSxjQUF4QkMsR0FBd0I7QUFDNUJELGtCQUFRLENBQUNFLElBQVQsQ0FBYyxJQUFJQyxtREFBSixDQUFZRixHQUFaLENBQWQ7QUFDSDtBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtyQixhQUFPRCxRQUFQO0FBQ0g7QUExQkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6IjEuOTllNDcxY2RmMzJjOTIyN2JjOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4vQXJ0aWNsZS5qc1wiO1xyXG5pbXBvcnQgJy4uL3Njc3MvbmV3cy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvdW50cnksIGNhdGVnb3J5LCBwYWdlc2l6ZSl7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5wYWdlc2l6ZSA9IHBhZ2VzaXplO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0dldCBBUEkgY2FsbCBhZGRyZXNzXHJcbiAgICBnZXQgZm9ybUFwaSgpe1xyXG4gICAgICAgIHJldHVybiAoYGh0dHBzOi8vbmV3c2FwaWEub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT0ke3RoaXMuY291bnRyeX0mY2F0ZWdvcnk9JHt0aGlzLmNhdGVnb3J5fSZzb3J0Qnk9cG9wdWxhcml0eSZwYWdlU2l6ZT0ke3RoaXMucGFnZXNpemV9JmFwaUtleT01OWU1ZWMxNDcwOGU0Yjc2OGFjYzhhMDY2NGYyMjkwNmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGpzb24gZGF0YSBmcm9tIEFQSVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmZvcm1BcGkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4obmV3c2pzb24gPT4gTmV3cy5oYW5kbGVKU09OKG5ld3Nqc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gb3JtIGFydGljbGVzIGxpc3RcclxuICAgIHN0YXRpYyBoYW5kbGVKU09OKHJlc3Bvbil7XHJcbiAgICAgICAgbGV0IGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgcmVzcG9uLmFydGljbGVzKSB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLnB1c2gobmV3IEFydGljbGUodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnRpY2xlcztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=