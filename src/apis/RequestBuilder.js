require('isomorphic-fetch');

export class GetRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.fullUrl = baseUrl + '?';
  };

  addParams(keyValuePairs) {
    for(var i in keyValuePairs) {
      this.addOneParam(i, keyValuePairs[i]);
    }
    return this;
  }

  addOneParam(key, value) {
    if(this.fullUrl[this.fullUrl.length - 1] != '?') {
      this.fullUrl += '&';
    }
    this.fullUrl = this.fullUrl + `${key}=${escape(value)}`;
    return this;
  }

  build() {
    return new fetch(this.fullUrl).then(function(res) {
      return res.json();
    });
  }
}

export class PostRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.params = {};
  };

  addParams(key, value) {
    this.params[key] = value;
    return this;
  }

  build() {
    return new fetch(this.baseUrl, {
      'method': 'post',
      'body': JSON.stringify(this.params),
    }).then(function(res) {
      return res.json(); //we dont need the meta data, just send back the data.
    });
  }
}
