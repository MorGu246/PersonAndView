import Img from './Img';
import {arr1} from './Arr';

export default function FullArr(){
    /*let myArr=arr.map(
        (val) => <section key={val.id}><Img fileName={val.imgSrc}></Img>
        <span>{`${val.name}:${val.description}`}</span>
            </section>
    )

return(
    <>
    <div>{myArr}</div>
    </>
);*/
let sortedArr = arr1.slice().sort((a, b) => {
        if (a.type === b.type) return 0;
        if (a.type === "person") return -1;
        if (b.type === "person") return 1;
        return 0;
        /*let sortedArr = arr.sort((a, b) => {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return 0;*/
    });
    let myArr=sortedArr.map(//<Img fileName={val.imgSrc} />
        (val) => `<section class="grid-item" key=${val.id}>
        ${Img(val.imgSrc)}
        <br><span>${val.name}</span>
        <br><span>${val.description}</span>
        </section>`
    );//.join(' ')
    //myArr+=`<section class="grid-item">${arr1[0].image}<br><span>${arr1[0].type}</span></section>`;
    //return(document.getElementById("main").innerHTML=myArr);
    return(
    <>
    <div className="grid-container">{myArr}</div>
    </>
);
}