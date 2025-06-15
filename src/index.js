import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './my Components/indexEx2.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getUrl from './my Components/getUrl';
import Img from './my Components/Img';
import Array from './my Components/myGrid';

let arr11=[
    {id:1,name:"person1",description:"person1",type:"person",imgSrc:"person1.jpg"},
    {id:2,name:"nof1",description:"nof1",type:"nof",imgSrc:"nof1.jpg"},
    {id:3,name:"person2",description:"person2",type:"person",imgSrc:"person2.avif"},
    {id:4,name:"person3",description:"person3",type:"person",imgSrc:"person3.png"},
    {id:5,name:"nof2",description:"nof2",type:"nof",imgSrc:"nof2.jpg"},
    {id:6,name:"nof3",description:"nof3",type:"nof",imgSrc:"nof3.webp"},
    {id:7,name:"nof4",description:"nof4",type:"nof",imgSrc:"nof4.jpg"},
    {id:8,name:"person4",description:"person4",type:"person",imgSrc:"person4.webp"}
];
/*const myObject = {
  image: "https://example.com/image.jpg"
};

// To display the image in HTML
const img = document.createElement("img");
img.src = myObject.image;
document.body.appendChild(img);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Array></Array>
    {/*<Img props1="arr11[0].imgSrc"></Img>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
