import express from "express";

const app = express();

app.use((req, res) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

app.listen(4444, () => console.log("prg4 is running at 4444"));
