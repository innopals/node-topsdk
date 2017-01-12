# Taobao TOP API Node SDK

[淘宝开放平台](http://open.taobao.com/doc2/api_list.htm) API Node SDK

MingChuan Ltd.

[![Travis CI Build Status](https://img.shields.io/travis/mbxc/node-topsdk/master.svg)](http://travis-ci.org/mbxc/node-topsdk)
[![NPM Version](https://img.shields.io/npm/v/topsdk.svg)](https://npmjs.org/package/topsdk)
[![NPM Downloads](https://img.shields.io/npm/dm/topsdk.svg)](https://npmjs.org/package/topsdk)
[![Dependency Status](https://david-dm.org/mbxc/node-topsdk.svg)](https://david-dm.org/mbxc/node-topsdk)

## Introduction

Based on official SDK. Adding the following features:

1. Support promise.
1. Support piping top response to writable stream.
1. Auto-generated validator for each api stub, and support `useValidators` options to turn it on/off.
1. Upload Picture (beta)
1. Parse large numbers from top api result (gt. Number.MAX_SAFE_INTEGER or lt Number.MIN_SAFE_INTEGER) into strings

## Get Started

+ [Basic Usage w/o Session Key](https://github.com/mbxc/node-topsdk/blob/master/test/basic.js)
+ [Passthrough TOP result using pipeline](https://github.com/mbxc/node-topsdk/blob/master/test/pipe.js)
+ [Uploading Picture](https://github.com/mbxc/node-topsdk/blob/master/test/file-upload.js)

### Default Configurable Options

```js
new TopClient(key, secret, {
  endpoint: 'https://eco.taobao.com/router/rest',
  useValidators: true,
  rawResponse: false
});
```
