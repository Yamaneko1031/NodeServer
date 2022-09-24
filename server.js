// // パッケージを読み込む
// let http = require("http");

// // サーバ機能の初期化
// let server = http.createServer();

// // リクエストがきたときに呼び出される
// server.on("request", function (req, res) {
//   // 本文（Body部）に、呼び出されたURL（http://localhost:1337以降の部分）と一緒に文字を表示する
//   res.write("Hello, " + req.url);
//   res.end();
// });

// // 指定したIPアドレス、ポート番号でサーバを立てる
// server.listen(8000, "127.0.0.1");

// import { AccessToken } from "livekit-server-sdk";
const livekitApi = require("livekit-server-sdk");
const AccessToken = livekitApi.AccessToken;
const RoomServiceClient = livekitApi.RoomServiceClient;

const roomName = "name-of-room";
const participantName = "user-name";

console.log(process.env.LK_API_KEY);
console.log(process.env.LK_API_SECRET);

const at = new AccessToken(process.env.LK_API_KEY, process.env.LK_API_SECRET, {
  identity: participantName
});
at.addGrant({
  roomJoin: true,
  room: roomName,
  canPublish: true,
  canSubscribe: true
});

const token = at.toJwt();
console.log("access token", token);
