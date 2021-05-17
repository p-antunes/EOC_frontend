
import * as fetch from "./functions/fetch.js"


const $ = q => {
    return document.querySelector(q);
};

getArticle()


function getArticle() {
    fetch.getData('articles').then(data => {
        console.log(data)
        let txt =`<div class="col-sm-12" id="artigos-titulo">
                <br>
                <br>
                <p> Artigos </p>
            </div>`
        console.log(data.length)
        for(let i=0; i<data.length; i++){
            txt += `
            <div id="box1">
                <p id="titleRights">
                    <br>
                    ${data[i].title}
                    <br>
                </p>
                <div id="contentRights">
                ${data[i].article}
                </div>
                <div id="linkRights"><i>"Fonte: ${data[i].link}"</i></div>
                <div><hr class="division3" id="division3"></div></div><div class="space2"></div>
                `
        }
        console.log(txt)
        $('#articles').innerHTML = txt;
    });
}





