import "../css/main.css";
// import data from "./teachers.json";

// import React from 'react';
// import {render} from 'react-dom';
// import Teachers from './components/teachers';
import  '../css/app.less';

const $button = document.getElementById("dynamic-import");

$button.addEventListener('click', async () => {
    const { default: alerta } =  await import('./alert.js');
    alerta();
});

// render(<Teachers data={data.teachers} />, document.getElementById('container'))