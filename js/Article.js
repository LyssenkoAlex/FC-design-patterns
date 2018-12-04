//Model
export class Article {
    constructor({author, title, urlToImage, content, description, url}) {
        this.author = author;
        this.title = title;
        this.urlToImage = urlToImage;
        this.content = content;
        this.description = description;
        this.url = url;
    };
}