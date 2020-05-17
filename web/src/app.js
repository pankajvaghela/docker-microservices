import express from "express";

const app = express();

app.get("*", (req, res) => {
  console.log("Incoming request on web");
});
app.listen(3000, () => {
  console.log("Web service up & running...");
});
