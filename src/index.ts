import express from "express";
const app = express();
app.get("/", (request, response) => {
  // response.send("Hello Worldx1");
  response.end("Hello World");
});
app.listen(3002, () => console.log("Listening on port 3002,.."));
