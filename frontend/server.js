const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let data = new Date();
let stringDate = data.toLocaleDateString() + " " + data.toLocaleTimeString();
console.log(`[ Pokezon Frontend - ${stringDate} ] 
  - Process: production
  - Port: 3000`);
app.listen(3000);
