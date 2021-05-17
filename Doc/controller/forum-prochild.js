// addArticle

import * as fetch from "./functions/fetch.js"


const $ = q => {
    return document.querySelector(q);
};


$('#addArticle').addEventListener('click', function () {
    Swal.fire({
        title: 'Adicionar artigo',
        inputAttributes: {
            autocapitalize: 'off'
        },
        html: '<input id="txtTitle" class="swal2-input" placeholder="Titulo"><textarea type="text" id="txtArticle" style="height:200px;" class="swal2-input" rows="4" cols="50" maxlength="200"></textarea><input id="txtLink" class="swal2-input" placeholder="Fonte">',
        showCancelButton: true,
        confirmButtonText: 'Adicionar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#130470',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            let data =
            {
                "article": $('#txtTitle').value,
                "title": $('#txtArticle').value,
                "link": $('#txtLink').value
            }
            fetch.postData('articles', data).then(response => {
                console.log(response.success)
                if (response.success) {
                    Swal.fire(
                        'Adionado com sucesso!',
                        '',
                        'success'
                    ).then((result) => {
                        if (result.value) {
                            getArticle()
                        }
                    })
                } else {
                    Swal.fire(
                        'Não foi possível adicionar o artigo',
                        '',
                        'error'
                    )
                }
            })
        }
    });
});

$('#deleteArticle').addEventListener('click', function () {

    fetch.getData('articles').then(data => {
        console.log(data)
        let txt =''
        for(let i = 0; i<data.length; i++){
            txt += `<h10>${data[i].idArticle} :  ${data[i].title}</h10>`
        }
        console.log(txt)
        Swal.fire({
            title: 'Insira o numero de artigo',
            inputAttributes: {
                autocapitalize: 'off'
            },
            html: '<input id="txtId" class="swal2-input" placeholder="Eliminar o artigo">' + txt,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#130470',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                
                fetch.deleteData('articles/' + $('#txtId').value).then(response => {
                    console.log(response.success)
                    if (response.success) {
                        Swal.fire(
                            'Eliminado com sucesso!',
                            '',
                            'success'
                        ).then((result) => {
                            if (result.value) {
                                getArticle()
                            }
                        })
                    } else {
                        Swal.fire(
                            'Não foi possível eliminar o artigo',
                            '',
                            'error'
                        )
                    }
                })
            }
        });
    })
    
});


// $('#addSuggestion').addEventListener('click', function () {
//     Swal.fire({
//         title: 'Adicionar sugestao',
//         inputAttributes: {
//             autocapitalize: 'off'
//         },
//         html: '<input id="txtTitle" class="swal2-input" placeholder="Titulo"><input type="text" id="txtSuggestion" style="height:200px;" class="swal2-input">',
//         showCancelButton: true,
//         confirmButtonText: 'Adicionar',
//         cancelButtonText: 'Cancelar',
//         confirmButtonColor: '#E5004E',
//         showLoaderOnConfirm: true,
//         preConfirm: () => {
//             let data =
//             {
//                 "title": $('#txtTitle').value,
//                 "suggestion": $('#txtSuggestion').value,
//             }
//             fetch.postData('suggestions', data).then(response => {
//                 console.log(response.success)
//                 if (response.success) {
//                     Swal.fire(
//                         'Adionado com sucesso!',
//                         '',
//                         'success'
//                     ).then((result) => {
//                         if (result.value) {
//                             getSuggestion()
//                         }
//                     })
//                 } else {
//                     Swal.fire(
//                         'Não foi possível adicionar o sugestao',
//                         '',
//                         'error'
//                     )
//                 }
//             })
//         }
//     });
// });

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


// deleteSuggestion()

// function deleteSuggestion() {
//     fetch.deleteData('articles/5').then(data => {
//         console.log(data)
//     });
// }











