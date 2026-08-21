import { EventEmitter } from "node:events";

const button = new EventEmitter();

button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});

button.emit("click", "Aman");
button.emit("click", "Raman");
button.emit("click", "the man");
button.emit("click");
