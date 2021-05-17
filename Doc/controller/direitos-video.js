// Link de videos ------------------------------------------------------------------------------------------------------------------------------------
import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
  };

// https://www.youtube.com/embed/2txldr_OVcg
fetch.getData('videorights').then(data => {
    console.log(data);
    let txt = '';
    for(let i = 0; i<data.length; i++){
        console.log(data[i].linkVideo)
    txt += `<div class="col-md-6 form-group">
        <div><iframe width="420" height="315"
            src='${data[i].linkVideo}'></iframe></div>
        </div>`;

    }
    console.log(txt)
    $('#videos').innerHTML = txt;
});

// let dataVideo = {
//       "linkVideo": "https://www.youtube.com/embed/wmNnzKOOuA0"
// };

// fetch.postData('videorights', dataVideo);

// let idVideo = 3;
// fetch.deleteData('videorights/' + idVideo);




