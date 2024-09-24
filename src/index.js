let express = require("express");
let path = require("path");
let fs = require("fs");
let axios = require('axios');
let app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app.html"));
});

app.get("/foto-de-bu", async function (req, res) {
  try{
    const response = 
    await axios({
      url: "https://imgs.search.brave.com/bR0ZXMJiEkM1P4eS5Mq0UO0WdpHoOERX9pSkiKhpoqo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDQvYm9vLWluLW1v/bnN0ZXItcy1pbmMu/anBn",
      method: 'GET',
      responseType: "stream" 
    });
    res.setHeader("Content-Type", "image/jpeg");
    response.data.pipe(res);
  }
  catch(err){
    console.error("se pudrio todo", err.message);
    res.writeHead(500, { 'Content-Type': 'text/plain'});
    res.end("se re pudrio toito");
  }
});

app.listen(3000, function () {
  console.log("escutando no porto 3000");
});
