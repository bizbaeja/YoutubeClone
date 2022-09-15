import express from "express";

const app = express();
const port = 4000;

const handleListening = () =>
  console.log(`서버포트 ${port}번은 잘 열려 있습니다!`);

const handleHome = (req, res) => {
  res.send("I still Love you 💋");
};
const handleLogin = (req, res) => {
  res.send("This is Login page");
};
const gosshipMiddleware = (req, res, next) => {
  //   console.log(`${req.method} ${req.url}`);
  return res.send(`누군가가 ${req.url} 로 가려고 하고 있습니다.`);
  next();
};
const privateMiddleware = (req, res, next) => {
  return res.send("나는 미들웨어가 존나 좋습니다.");
};
console.log("누군가가 루트 페이지로 가려하고 있습니다.");

// middleware 를 use 하는게 먼저오고 그다음에 url 의 get 이 와야한다.
// 미들웨어를 상단에 두면 모든 route에 적용된다.
app.use(gosshipMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.listen(port, handleListening);
