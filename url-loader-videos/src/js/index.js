require('../css/main.css');
import videoPlatzi from '../video/que-es-core.mp4';
import makeVideo from './make-video.js';
import platziImg from '../img/platzi.png';
import makeImage from "./make-image.js";
import { firstMessage, delayedMessage } from "./message.js";

document.write(`Este es un mensaje desde: ${firstMessage}`);
document.write(`Este es un mensaje desde: Hola Mundo`);
delayedMessage();
console.log("Hola Mundo desde webpack external")

makeImage(platziImg);
makeVideo(videoPlatzi);
