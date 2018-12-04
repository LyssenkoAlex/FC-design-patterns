import {Article} from "./Article.js";
import '../scss/news.scss';

//Factory
export class ArticleFactory {

    //Get json data from API
    static createArticles(country, category, pagesize){
        let formApi = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=popularity&pageSize=${pagesize}&apiKey=59e5ec14708e4b768acc8a0664f22906`;
        return fetch(formApi)
            .then(response => response.json())
            .then(newsjson => ArticleFactory.handleJSON(newsjson));
    }

    //Form articles list
    static handleJSON(respon){
        let articles = [];
        for(let val of respon.articles) {
            articles.push(new Article(val));
        }
        return articles;
    }
}