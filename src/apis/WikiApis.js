import {GetRequest} from './RequestBuilder.js';

export class WikiApis {

  static baseUrl() {
    return 'https://en.wikipedia.org/w/api.php';
  };

  static commonParams() {
    return {
      'action': 'opensearch',
      'format': 'json',
      'namespace': 0,
    };
  }

  static getFirstResult(condition) {
    return new GetRequest(this.baseUrl())
                  .addParams(this.commonParams())
                  .addOneParam('limit', 1)
                  .addOneParam('search', condition)
                  .build();
  };

}
