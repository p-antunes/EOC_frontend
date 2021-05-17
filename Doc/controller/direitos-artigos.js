import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
};


const onClick = (q, func) => {
    $(q).addEventListener('click', func);
  };


getRights()


$('#add').addEventListener('click', function () {
    Swal.fire({
        title: 'Adicionar frase do direito',
        inputAttributes: {
            autocapitalize: 'off'
        },
        html: '<input id="txtRight" class="swal2-input" placeholder="Direito">',
        showCancelButton: true,
        confirmButtonText: 'Adicionar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#E5004E',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            let data = {
                "rights": $('#txtRight').value
            };
            fetch.postData('rights', data).then(response => {
                console.log(response.success)
                if (response.success) {
                    Swal.fire(
                        'Adionado com sucesso!',
                        '',
                        'success'
                    ).then((result) => {
                        if (result.value) {
                            getRights()
                        }
                    })
                } else {
                    Swal.fire(
                        'Não foi possível adicionar o direito',
                        '',
                        'error'
                    )
                }
            })
        }
    });
})


$('#delete').addEventListener('click', function () {
    fetch.getData('rights').then(data => {
        console.log(data);
        let idRight = data[0].idRight;
        fetch.deleteData('rights/' + idRight).then(data => {
            console.log(data)
            if (data.success) {
                Swal.fire(
                    'Eliminado com sucesso!',
                    '',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        getRights()
                    }
                })
            } else {
                Swal.fire(
                    'Não foi possível eliminar o direito',
                    '',
                    'error'
                )
            }
        }
        )
    });
})

function getRights(){
    fetch.getData('rights').then(data => {
        console.log(data);
        let txt = '<div class="space2"></div><div class="direitos-frase1">Os direitos das crianças são reconhecidos a todas as crianças (menos de 18 anos de idade) sem discriminação alguma, independentemente de qualquer consideração de raça, cor, sexo, idioma, religião, opinião política ou outra da criança, ou da sua família, da sua origem nacional ou social, fortuna, nascimento ou de qualquer outra situação. </div><br></br><div class="direitos-frase2">';
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].rights)
            
            txt += `<a id='${data[i].idRight}' class="fe"><span style="color : #E5004E;">• </span>${data[i].rights}<span style="color : #F6E57D;">•</span></a> <br>`;
            
        }
        txt += '<br><br></div>'
        console.log(txt)
        $('#direitos').innerHTML = txt;
    });
    }


    
    // style="background:red"




  

