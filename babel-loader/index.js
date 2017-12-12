require('./style.css');
import { firstMessage, delayedMessage } from "./message.js";

document.write(`Este es un mensaje desde: ${firstMessage}`);
delayedMessage();
console.log("Hola Mundo desde webpack external")


const rest = () => console.log("red");