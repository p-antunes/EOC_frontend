
const urlBase = "http://localhost:8080/api/"


document.getElementById('ver-critica').addEventListener('click', function () {

    let selected = $("#Table-denun tr").hasClass("selected");
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


document.getElementById('add-denun').addEventListener('click', function () {
    if(document.getElementById('email3').value.trim() == '' && document.getElementById('descricao').value.trim()==''){
        Swal.fire(
            'Preencha todos os campos',
            '',
            'error'
        )
    } else {
    saveData()
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
                <th>Morada</th>
                <th>Conteúdo</th>
            </tr>
        </thead>
        <tbody>`


        for (let i = 0; i < data.length; i++) {
            txt += `
            <tr>
                <td style="display:none">${data[i].idComplaint}</td>
                <td>${data[i].title}</td>
                <td>${data[i].name}</td>
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
            sessionStorage.setItem('id_complaint', id)
        });
    })

}


function saveData() {
    let complaint =
    {
        "title": document.getElementById('email3').value.trim(),
        "complaint": document.getElementById('descricao').value.trim(),
    }

    console.log(complaint);
    postData('complaints', complaint).then(response => {
        console.log(response)
        
        if(response.ok){
            Swal.fire(
                'Submetido com sucesso',
                '',
                'success'
            ).then((result) => {
                if (result.value) {
                    document.getElementById('email3').value = ''
                    document.getElementById('descricao').value = ''
                    getSuggestions()
                }
            })
        } else {
            Swal.fire(
                'Erro de submissao',
                '',
                'error'
            )
        }
    });
}

async function getData(route) {
    const response = await fetch(urlBase + route);

    const data = await response.json();
    return data;
}




async function postData(route, data) {
    console.log(urlBase + route)
    const response = await fetch(urlBase + route, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
            'Cookie': 'token=' + sessionStorage.getItem("accessToken")
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

    console.log(response)
    const res = await response.json();
    console.log(res)
    return res;
}

async function postData(route, data) {
    console.log(urlBase + route)
    const response = await fetch(urlBase + route, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
            'Cookie': 'token=' + sessionStorage.getItem("accessToken")
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

    return response;
}


































