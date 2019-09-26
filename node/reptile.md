## node.js爬虫系统

使用到的模块

| 使用的模块                                       | command                          |
| ------------------------------------------------ | -------------------------------- |
| Express                                          | `npm i express --save-dev`       |
| [Request](https://www.npmjs.com/package/request) | `npm install request --save-dev` |
| [Cheerio](https://www.npmjs.com/package/cheerio) | `npm i cheerio`                  |

```javascript
var express = require('express');
var request = require('request');
const cheerio = require('cheerio');
var app = express();

app.get('/', function (req, res) {
    request('https://ke.qq.com/', function (error, response, body) {
        const $ = cheerio.load(body) //$相当于是一个拿到了body的前端选择器
        const list = $('.cate-tab-list li').length;
        console.log(list)
        res.send($.html())
    });
});

app.listen(3000);
```

