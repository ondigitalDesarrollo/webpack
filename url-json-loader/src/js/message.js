import  renderToDom  from "./render-to-dom.js";
import  makeImage  from "./make-image.js";
module.exports  = {
    firstMessage: 'Hola Mundo desde un export module de Babel',
    delayedMessage: async() => {
        const message = await waitTime;
        console.log(message);
        renderToDom(makeMessage(message));
    }
}

const waitTime = new Promise ((todoOk, todoMal) => {
    setTimeout(() => {
        todoOk('Han pasado 3 segundos, omg');
    }, 3000);
});