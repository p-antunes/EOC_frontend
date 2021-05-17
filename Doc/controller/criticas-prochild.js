
const urlBase = "http://localhost:8080/api/"


document.getElementById('ver-critica').addEventListener('click', function () {

    let selected = $("#Table-denun tbody tr").hasClass("selected");
    console.log(selected)
    if(selected){
        let id = sessionStorage.getItem('id_complaint')
    console.log(id)
    getData('complaints/' + id).then(data => {
        console.log(data)
        Swal.fire(
            `${data.title}`,
            `${data.complaint}`,
            ''
        )
    })
    } else {
        Swal.fire(
            'Seleciona uma linha!',
            '',
            'error'
        )
    }
    
});

document.getElementById('delete-critica').addEventListener('click', function () {
    let selected = $("#Table-denun tbody tr").hasClass("selected");
    console.log(selected)

    if(selected){
        Swal.fire({
            title: 'Tens a certeza?',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#130470',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                let id = sessionStorage.getItem('id_complaint');
                deleteData('suggestions/' + id).then(response => {
                    console.log(response.ok)
                    if (response.ok) {
                        Swal.fire(
                            'Eliminado com sucesso!',
                            '',
                            'success'
                        ).then((result) => {
                            if (result.value) {
                                getSuggestions()
                            }
                        })
                    } else {
                        Swal.fire(
                            'Não foi possível eliminar!',
                            '',
                            'error'
                        )
                    }
                })
            }
        });
    } else {
        Swal.fire(
            'Seleciona uma linha!',
            '',
            'error'
        )
    }
    
});




getSuggestions()
function getSuggestions() {
    getData('complaints').then(data => {
        console.log(data)
        let txt = `
    <table class="table table-bordered supTable" id="Table-denun" width="100%"  cellspacing="0" data-page-length='-1'>
        <thead>
            <tr>
                <th style="display:none">ID</th>
                <th>Titulo</th>
                <th>Nome</th>
                <th>Contacto</th>
                <th>Morada</th>
                <th>Conteúdo</th>
            </tr>
        </thead>
        <tbody>`


        for (let i = 0; i < data.length; i++) {
            txt += `
            <tr>
                <td style="display:none">${data[i].idComplaint}</td>
                <td>${data[i].name}</td>
                <td>${data[i].phoneNr}</td>
                <td>${data[i].postalCode}</td>
                <td>${data[i].county}</td>
                <td>${data[i].complaint}</td>
            </tr>
        `
        }
        txt += '</tbody></table>'
        console.log(txt)
        $('#dataTable_wrapper').html(txt);

        
    }).then(() => {
        $("#Table-denun tbody tr").click(function () {
            
            $(this).addClass('selected').siblings().removeClass('selected');
            var id = $(this).find('td:first').html();
            sessionStorage.setItem('id_suggestion', id)
        });
    })

}


async function getData(route) {
    const response = await fetch(urlBase + route);

    const data = await response.json();
    return data;
}



async function deleteData(route) {

    console.log(urlBase + route)
    const response = await fetch(urlBase + route, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
            'Cookie': 'token=' + sessionStorage.getItem("accessToken")
        },
        method: 'DELETE',
    })
    console.log(response)
    const res = await response.json();
    console.log(res)
    return res;
}




































