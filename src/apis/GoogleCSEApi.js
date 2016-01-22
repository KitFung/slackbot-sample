import {GetRequest} from './RequestBuilder.js';

export class GoogleCSEApi {

  static baseUrl() {
    return 'https://www.googleapis.com/customsearch/v1';
  };

  static keyParams() {
    return {
      'key': process.env.CSEKEY,
      'cx': process.env.CSECX,
    };
  }

  static getImage(query) {
    return new GetRequest(this.baseUrl())
                .addParams(this.keyParams())
                .addParams({'searchType': 'image'})
                .addParams({'q': query})
                .build();
  }

  static getAnimate(query) {
    return new GetRequest(this.baseUrl())
                .addParams(this.keyParams())
                .addParams({'searchType': 'image'})
                .addParams({'q': query + ' gif'})
                .build();
  }

  static getWeb() {

  }
}
