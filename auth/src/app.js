import express from "express";

const app = express();

app.get("*", (req, res) => {
  console.log("Incoming request on auth");
});
app.listen(3000, () => {
  console.log("Auth service up & running...");
});
