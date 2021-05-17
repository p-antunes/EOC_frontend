import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
};


getMateriais()

function getMateriais() {
    fetch.getData('files').then(data => {
        console.log(data);
        let txt = ''
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
            console.log(addAPIToUrl(data[i]))
            let img = addAPIToUrl(data[i])

            txt += '<div class="col-md-6"><img width="500" style="margin:10px; border-radius:10px;" src="' + img + '"></div>'
        }
        console.log(txt)


        $('#images').innerHTML = txt;
    });
}





$('#file').addEventListener("change", function () {
    console.log($('#file').files);
})




$('#addFile').addEventListener("click", e => {

    e.preventDefault();

    const formData = new FormData();

    console.log($('#file').files);

    formData.append("file", $('#file').files[0]);

    fetch.postFile('upload', formData).then(response => {
        if (response.ok) {
            Swal.fire(
                'Material adicionado com successo',
                '',
                'success'
            ).then((result) => {
                if (result.value) {
                    getMateriais()
                }
            })

        } else {
            Swal.fire(
                'Não foi possível adicionar o material',
                '',
                'error'
            )
        }
    })
})

$('#remover-mat').addEventListener("click", e => {
    let url = "http://localhost:8080/files/945663e4-0c87-41f1-af58-2d56a77f710a"
    let id = getIDMateriais(url)
    e.preventDefault();
    fetch.deleteData('files/' + id).then(data => {
        if (data.ok) {
            Swal.fire(
                'Material eliminado com successo',
                '',
                'success'
            ).then((result) => {
                if (result.value) {
                    getMateriais()
                }
            })

        } else {
            Swal.fire(
                'Não foi possível eliminar o material',
                '',
                'error'
            )
        }
    })
})

function addAPIToUrl(obj) {
    let url = obj.url;
    return url.substring(0, 22) + "api/" + url.substring(22,);
}


function getIDMateriais(url) {
    return url.substring(28,);
}