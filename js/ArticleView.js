//ViewModel
export class ArticleView {
    //Article generator
    static generateArticle(articleModel) {
        let template = '';
        let article = document.createElement('article');
        article.className = 'article';
        if (articleModel.author) {
            template += `<p class="article__author">${articleModel.author}</p>`;
        }
        if (articleModel.title) {
            template += `<h3 class="article__title">${articleModel.title}</h3>`;
        }
        if (articleModel.description) {
            template += `<p class="article__description">${articleModel.description}</p>`;
        }
        if (articleModel.content || articleModel.urlToImage) {

            template += `<button class="article_show-more">Show More</button><div class="article__body">`;

            if (articleModel.urlToImage) {
                template += `<img class="article__img" src="${articleModel.urlToImage}">`;
            }
            if (articleModel.content) {
                template += `<p class="article__content">${articleModel.content}</p>`;
            }

            template += `</div>`
        }

        if (articleModel.url) {
            template += `<a class="article__href" href="${articleModel.url}" target="_blank">Show Source</a>`
        }

        article.innerHTML = template;
        return article;
    }
}