var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    // フォームからの投稿を処理するにあたっては querystring というモジュールが必要
    qs = require('querystring');

var settings = require('./settings');
var server = http.createServer();

// 今回テンプレートは bbs.ejs を読み込む
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');

// テンプレートの方に posts というのを入れましたが、投稿を保持しておく配列が必要になるので、ここで宣言しておきましょう。
var posts = [];

function renderForm(posts, res) {
    // テンプレートを読み込みたいので「var data = ejs.render(template,…」で、渡すデータは投稿の内容なので、posts という名前で posts のデータを渡してあげましょう。
    var data = ejs.render(template, {
        posts: posts
    });
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
}

server.on('request', function (req, res) {
    
    if (req.method === 'POST') {
        req.data = "";
        req.on("data", function(chunk) {
            // コールバック関数の引数を結合していく
            req.data += chunk;
        });
        req.on("end", function () {
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts, res);
        });
    } else {
        // 長くなるので別関数に
        renderForm(posts, res);
    }
});
server.listen(settings.port, settings.host);
console.log("server listening ...");