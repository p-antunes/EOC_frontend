import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
};


//Altera o id confirmar para o correspondente do butao da pagina
$('#confirm').addEventListener('click', function () {
    saveData();
});


function saveData() {

    //So precisas de alterar os estes paramentros
    let denounce = {
        "title":"consumo de alcool",
        "description":"Hoje por volta das 13h encontravam-se vários adolescentes a consumir alcool em frente à escola"
    }

    console.log(denounce);
    fetch.postData('reports', denounce).then( response => {
        console.log(response)

    }
    );
}

