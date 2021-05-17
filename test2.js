
import * as fetch from "./functions/fetch.js"


getSuggestions()
function getSuggestions() {
    fetch.getData('suggestions').then(data => {
        console.log(data)
        let txt = `
    <table class="table table-bordered supTable" id="Table-denun" width="100%"  cellspacing="0" data-page-length='-1'>
        <thead>
            <tr>
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
                <td>${data[i].title}</td>
                <td>Nome</td>
                <td>Contacto</td>
                <td>Morada</td>
                <td>${data[i].suggestion}</td>
            </tr>
        `
        }
        txt += '</tbody></table>'
        console.log(txt)
        $('#dataTable_wrapper').html(txt);

        $("#Table-denun tr").click(function(){
            $(this).addClass('selected').siblings().removeClass('selected');    
            var value=$(this).find('td:first').html();
            alert(value);    
         });
    })

}





