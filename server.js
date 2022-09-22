// パッケージを読み込む
let http = require("http");

// サーバ機能の初期化
let server = http.createServer();

// リクエストがきたときに呼び出される
server.on("request", function (req, res) {
  // 本文（Body部）に、呼び出されたURL（http://localhost:1337以降の部分）と一緒に文字を表示する
  res.write("Hello, " + req.url);
  res.end();
});

// 指定したIPアドレス、ポート番号でサーバを立てる
server.listen(8000, "127.0.0.1");
