import {GetRequest} from './RequestBuilder.js';

export class HackerNewsApi {

  static baseUrl() {
    return 'https://hacker-news.firebaseio.com/v0/';
  };

  static getTop100ItemsId() {
    return new GetRequest(`${this.baseUrl()}topstories.json`).build();
  };

  static getItemsById(id) {
    return new GetRequest(`${this.baseUrl()}item/${id}.json`).build();
  };

}
