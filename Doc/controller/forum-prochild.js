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
        html: '<input id="txtTitle" class="swal2-input" placeholder="Titulo"><textarea type="text" id="txtArticle" style="height:200px;" class="swal2-input" maxlength="500"></textarea><input id="txtLink" class="swal2-input" placeholder="Fonte">',
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
                console.log(response.ok)
                if (response.ok) {
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
            txt += `<h10>${data[i].idArticle} :  ${data[i].title}</h10><br>`
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
                    console.log(response.ok)
                    if (response.ok) {
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











