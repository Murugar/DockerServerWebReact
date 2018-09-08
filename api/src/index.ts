import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send('Server ready..');
});

const server = app.listen(process.env.PORT, () => {
  console.log("Started at http://localhost:%d\n", server.address().port);
});
