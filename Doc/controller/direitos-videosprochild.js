import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
};

getVideos()


$('#add').addEventListener('click', function () {
    Swal.fire({
        title: 'Adicionar link do vídeo',
        inputAttributes: {
            autocapitalize: 'off'
        },
        html: '<input id="txtLink" class="swal2-input" placeholder="Email">',
        showCancelButton: true,
        confirmButtonText: 'Adicionar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#E5004E',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            let data = {
                "linkVideo": $('#txtLink').value
            };
            fetch.postData('videorights', data).then(response => {
                console.log(response.success)
                if (response.success) {
                    Swal.fire(
                        'Adionado com sucesso!',
                        '',
                        'success'
                    ).then((result) => {
                        if (result.value) {
                            getVideos()
                        }
                    })
                } else {
                    Swal.fire(
                        'Não foi possível adicionar o vídeo',
                        '',
                        'error'
                    )
                }
            })
        }
    });
})


$('#delete').addEventListener('click', function () {
    fetch.getData('videorights').then(data => {
        console.log(data);
        let idVideo = data[0].idVideo;
        fetch.deleteData('videorights/' + idVideo).then(data => {
            console.log(data)
            if (data.success) {
                Swal.fire(
                    'Eliminado com sucesso!',
                    '',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        getVideos()
                    }
                })
            } else {
                Swal.fire(
                    'Não foi possível eliminar o vídeo',
                    '',
                    'error'
                )
            }
        }
        )
    });
})

function getVideos(){
    fetch.getData('videorights').then(data => {
        console.log(data);
        let txt = '';
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].linkVideo)
            txt += `<div class="col-md-6 form-group">
            <div><iframe width="420" height="315"
                src='${data[i].linkVideo}'></iframe></div>
            </div>`;
    
        }
        console.log(txt)
        $('#videos').innerHTML = txt;
    });
    }

    // https://www.youtube.com/embed/2txldr_OVcg
    // https://www.youtube.com/embed/wmNnzKOOuA0