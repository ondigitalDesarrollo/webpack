import "../css/main.css";
import data from "./teachers.json";

import React from 'react';
import {render} from 'react-dom';
import Teachers from './components/teachers';
import  '../css/app.less';

render(<Teachers data={data.teachers} />, document.getElementById('container'))