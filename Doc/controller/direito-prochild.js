// Link de videos ------------------------------------------------------------------------------------------------------------------------------------
import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
};


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



$('#deleteVideo').addEventListener('click', function () {
    Swal.fire({
        title: 'Tens a certeza?',
        // text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eliminar!',
        cancelButtonText: 'Não, manter'
    }).then((result) => {


        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
            )
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })



})

$('#addVideo').addEventListener('click', function () {
    Swal.fire({
        title: 'Adicionar vídeo',
        text: "Insira um link de vídeo",
        //input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        html: '<input id="txtVideo" class="swal2-input" placeholder="Insira um link de um vídeo">',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        confirmButtonText: 'Adicionar',
        confirmButtonColor: '#E5004E',
        cancelButtonColor: '#E5004E',
        showLoaderOnConfirm: true,
        preConfirm: (post) => {

            const link = document.getElementById('txtVideo').value;
            console.log(link)
            let data = {
                "linkVideo": link
            }
            return fetch.postData('videorights', data)
                .catch(error => {
                    Swal.showValidationMessage(
                        `Nao foi possivel adicionar o video`
                    )
                })
        }
    });
})





