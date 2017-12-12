require('./style.css');
import platziImg from './platzi.png';
import makeImage from "./make-image.js";
import { firstMessage, delayedMessage } from "./message.js";

document.write(`Este es un mensaje desde: ${firstMessage}`);
delayedMessage();
console.log("Hola Mundo desde webpack external")

makeImage(platziImg);

const rest = () => console.log("red");