
const urlBase = "http://localhost:8080/api/"


document.getElementById('ver-denun').addEventListener('click', function () {

    let selected = $("#Table-denun tr").hasClass("selected");
    console.log(selected)
    if(selected){
        let id = sessionStorage.getItem('id_denun')
    console.log(id)
    getData('reports/' + id).then(data => {
        console.log(data)
        Swal.fire(
            `${data.title}`,
            `${data.description}`,
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






getReports()
function getReports() {
    getData('reports').then(data => {
        console.log(data)
        let txt = `
    <table class="table table-bordered supTable" id="Table-denun" width="100%"  cellspacing="0" data-page-length='-1'>
        <thead>
            <tr>
                <th>ID</th>
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
                <td>${data[i].idReport}</td>
                <td>${data[i].title}</td>
                <td>${data[i].name}</td>
                <td>${data[i].phoneNr}</td>
                <td>${data[i].county}</td>
                <td>${data[i].description}</td>
            </tr>
        `
        }
        txt += '</tbody></table>'
        console.log(txt)
        $('#dataTable_wrapper').html(txt);

        
    }).then(() => {
        $("#Table-denun tr").click(function () {
            
            let selected = $(this).hasClass('selected');
            console.log(selected)
            if(selected){
                $(this).removeClass('selected')
                alert("fei")
            } else {
                $(this).addClass('selected');
                var id = $(this).find('td:first').html();
                sessionStorage.setItem('id_denun', id)
                alert(id)
            }
        });
    })

}


async function getData(route) {
    const response = await fetch(urlBase + route);

    const data = await response.json();
    return data;
}
