import express from "express";

const app = express();

app.get("/", (req, res) => {
  //res.send(" Hello Express");

  // res.send("<h1> Hello Express</h1>");
  res.send(`<h1>Hello Server</h1>
           <h2> Iam respondeing from espress framework</h2>
           <h3> The code is minimal and easy to return </h3>
        `);
});

app.get("/about", (req, res) => {
  res.send("<h2> about page</h2>");
});
app.get("/product", (req, res) => {
  const product = {
    id: 1,
    name: "Mobile",
    price: 30000,
  };

  res.send(product);
});

//This line must be last line
app.listen(4444, () => console.log("prg1 is running at 4444"));
