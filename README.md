# Taobao TOP API Node SDK

[![Travis CI Build Status](https://img.shields.io/travis/mbxc/node-topsdk/master.svg)](http://travis-ci.org/mbxc/node-topsdk)
[![NPM Version](https://img.shields.io/npm/v/topsdk.svg)](https://npmjs.org/package/topsdk)
[![NPM Downloads](https://img.shields.io/npm/dm/topsdk.svg)](https://npmjs.org/package/topsdk)
[![Dependency Status](https://david-dm.org/mbxc/node-topsdk.svg)](https://david-dm.org/mbxc/node-topsdk)

Based on [official API definition](http://open.taobao.com/doc2/api_list.htm) and written with minimum dependencies.

[<img src="https://avatars3.githubusercontent.com/u/30520929?s=256&v=4" width="64" alt="innopals" title="Author: innopals"/>](https://github.com/innopals)

## Features

1. Support promise.
2. Support piping top response to writable stream.
3. Auto-generated validator for each api stub, and support `useValidators` options to turn it on/off.
4. Upload Picture (beta)
5. Parse large numbers from top api result (gt. Number.MAX_SAFE_INTEGER or lt Number.MIN_SAFE_INTEGER) into strings
6. TypeScript module definition

## Get Started

### Default Configurable Options

```js
new TopClient(key, secret, {
  endpoint: 'https://eco.taobao.com/router/rest',
  useValidators: true,
  rawResponse: false
});
```

### Most Common Usage

```js
(async function() {
  const data = await client.execute('taobao.mixnick.get', { nick: 'test' });
  console.log(data.nick);
})();
```

[More...](https://github.com/mbxc/node-topsdk/blob/master/test/basic.js)

### Pipe To Stream

```js
// const app = express();
app.get((req, res) => {
  client.execute('taobao.mixnick.get', { nick: req.query.nick }).pipe(res);
});
```

[More...](https://github.com/mbxc/node-topsdk/blob/master/test/pipe.js)

### Using Upload API

```js
(async function() {
  const data = await client.execute('taobao.picture.upload', {
    session: session,
    picture_category_id: 0,
    img: fs.createReadStream(path.join(__dirname, 'ok.png')),
    image_input_title: 'ok.png',
    title: 'topsdk test image'
  }, 'FILE_UPLOAD');
  console.log(data);
})();
```

[More...](https://github.com/mbxc/node-topsdk/blob/master/test/file-upload.js)

## Contributing

This project welcomes contributions from the community. Contributions are accepted using GitHub pull requests. If you're not familiar with making GitHub pull requests, please refer to the [GitHub documentation "Creating a pull request"](https://help.github.com/articles/creating-a-pull-request/).
