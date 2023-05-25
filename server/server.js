import express from "express";
import fs from "fs";
import path from "path";
const app = express();
app.use("/", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.listen(3001, () => {
  console.log("App launched");
});
