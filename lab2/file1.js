import { writeFile, appendFile } from "fs/promises";
//await writeFile("hello.txt","js is very easy");
await appendFile("hello.txt", "\n is much easy than others 😂");
await appendFile("hello.txt", "ANANT KUMAR");
const content = await readFile("hello.txt","utf-8")
console.log(content);