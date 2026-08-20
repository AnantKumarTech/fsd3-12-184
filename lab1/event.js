import { EventEmitter} from "node:events";

const login =(name)=>{
 console.log(`${name} logged in`)
};
const start = () => {
  console.log("System starts");
};
const working = (name) => {
  console.log(`${name} add item to cart`);
};
const checkout = (name) => {
  console.log(`${name} logged out`);
};
const task = new EventEmitter();

task.once("exit",()=>{
console/log("Sustem shutting down");
});
task.on("greet", login);
task.on("greet", working);
task.emit("greet", "Mayank");
task.emit("greet", "Mudit defj");
task.off("greet")
start();
login("ROHAN BABY");
working("ROHAN BABY");
checkout("ROHAN BABY");
task.once("blast")