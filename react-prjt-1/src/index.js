import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 0 },
    { id: 2, message: "It\'s my fir56657st post", likesCount: 100 },
    { id: 3, message: "It\'s my fir4tt4st post", likesCount: 1050 },
    { id: 4, message: "It\'s my fgirst post", likesCount: 0 }
  ];


  let dialogs = [
    { id: 1, name: "Dimon" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Andrew" },
    { id: 5, name: "Andrew" },
];

let messages = [
    { id: 1, message: "hi" },
    { id: 2, message: "h2i" },
    { id: 3, message: "hi3" },
    { id: 4, message: "h4i" },
    { id: 5, message: "hi5" },
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();

