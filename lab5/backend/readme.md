# Express
Fast, unopinionated, minimalist web framework for Node.js
## Steps
1. create  project folder 
2. create two folder (frontend, backend) in root (lab5)
3. open terminal and reach to backend by 
```
cd.. 
cd lab5 
cd backend 

```
4. type `npm init -y`
5. install nodemon `npmm i nodemon -d`
6. install express ` npm i express` 
7. update backend /packae.json 
 - change type ` type : "mpdule"`
 - change script
 ```
 "scripts":{
    "start" : "node app.js",
    "dev" : "nodemon prg1.js"
},
 ```
8. add `lab5/backend/node_module` to .gitignore
9. ``` 
      import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
});
//This line must be last line
app.listen(4444, () => console.log('prg1 is running at 4444'));
```

# Static import 
- in express we can add any static html pages with the help of express.static method

-Express supports 