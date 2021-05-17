import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
};


//Altera o id confirmar para o correspondente do butao da pagina
$('#confirm').addEventListener('click', function () {
    if ($('#email3').value.trim() == '' && $('#descricao').value.trim() == '') {
        Swal.fire(
            'Preencha todos os campos!',
            '',
            'error'
        )
    } else {
    saveData();
    }
});


function saveData() {
    let denounce = {
        "title": $('#email3').value.trim(),
        "description": $('#descricao').value.trim()
    }

    console.log(denounce);
    fetch.postData('reports', denounce).then(response => {
        console.log(response)
            if(response.ok){
                Swal.fire(
                    'Submetido com sucesso!',
                    '',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        $('#email3').value = '';
                        $('#descricao').value = '';
                    }
                })
            } else {
                Swal.fire(
                    'Erro de submissao!',
                    '',
                    'error'
                )
            }
          
            
        }
    );
}


