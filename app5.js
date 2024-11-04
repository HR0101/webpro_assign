const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/janken", (req, res) => {
  const hand = req.query.hand;
  let win = Number(req.query.win) || 0;
  let total = Number(req.query.total) || 0;
  const cpuHands = ["グー", "チョキ", "パー"];
  const cpu = cpuHands[Math.floor(Math.random() * 3)];

  if (!["グー", "チョキ", "パー"].includes(hand)) {
    return res.send("エラー：有効な手（グー、チョキ、パー）を入力してください。");
  }

  const results = {
    "グー": { "グー": "引き分け", "チョキ": "勝ち", "パー": "負け" },
    "チョキ": { "グー": "負け", "チョキ": "引き分け", "パー": "勝ち" },
    "パー": { "グー": "勝ち", "チョキ": "負け", "パー": "引き分け" }
  };

  const judgement = results[hand][cpu];
  if (judgement === '勝ち') win++;
  total++;

  res.render('janken', {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  });
});




app.listen(8080, () => console.log("Example app listening on port 8080!"));
