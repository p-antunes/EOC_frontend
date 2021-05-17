import * as f from "./functions/fetch.js"


const $ = q => {
    return document.querySelector(q);
};


$('#btnlogin').addEventListener('click', function () {
    login();
});

$('#btnlogout').addEventListener('click', function () {
    logout();
});

$('#btnDenuncy').addEventListener('click', function () {
    denuncy();
});

$('#complaint').addEventListener('click', function () {
    complaint();
});
$('#article').addEventListener('click', function () {
    article();
});
$('#suggestion').addEventListener('click', function () {
    suggestion();
});

function login() {
    // let credenciais = {
    //     "email": $('#emailLogin').value.trim(),
    //     "password": $('#pwd1').value.trim(),
    // }

    let credenciais = {
        "email": "luffy@gmail.com",
        "password": "password"
    }

    fetch('http://127.0.0.1:8080/api/auth/signin', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(credenciais),
        credentials: 'include'
    })
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
        .then(function (result) {
            if (result) {
                sessionStorage.setItem('id_user', result.userId);
                sessionStorage.setItem('role', result.role);
                sessionStorage.setItem("accessToken", result.accessToken);
                console.log(result);

                // TypeOfUserPage(result.role);

            } else {
                Swal.fire(
                    'Os dados que inseriu não estão corretos!',
                    '',
                    'warning'
                )
                console.log(result);
            }
        });
};


async function logout() {
    fetch('http://localhost:8080/api/auth/logout', {
        headers: {
            // 'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
            'Cookie': 'token=' + sessionStorage.getItem("accessToken")
        },
        method: 'GET',
        credentials: "include"
    })
        .then((response) => {
            // console.log('Bearer ' + sessionStorage.getItem("accessToken"))
            console.log('token=' + sessionStorage.getItem("accessToken"))
            return response.json();
        })
        .then((error) => {
            console.log(error);
        }).then(data => {
            console.log(data)
        });
}

function denuncy() {

    //So precisas de alterar os estes paramentros
    let denounce = {
        "title": "Lack of Suport",
        "description": "I felt an enourmous lack of suport from the prochild institution on the last event"
    }

    // let denounce = {
    //     "title":"consumo de alcool",
    //     "description":"Hoje por volta das 13h encontravam-se vários adolescentes a consumir alcool em frente à escola"
    // }

    console.log(denounce);
    f.postData('reports', denounce);
}

function complaint() {

    //So precisas de alterar os estes paramentros
    let complaint = 
    {
        "title":"Lack of Suport",
        "complaint":"I felt an enourmous lack of suport from the prochild institution on the last event"
    }

    console.log(complaint);
    f.postData('complaints', complaint);
}

function article() {

    //So precisas de alterar os estes paramentros
    let article = 
    {
        "title":"Lack of Suport",
        "article":"I felt an enourmous lack of suport from the prochild institution on the last event",
        "link":"asdfhzf"
    }

    console.log(article);
    f.postData('articles', article);
}

function suggestion() {

    //So precisas de alterar os estes paramentros
    let suggestion = 
    {
        "title":"Go",
        "suggestion":"I felt an enourmous lack of suport from the prochild institution on the last event",
    }

    console.log(suggestion);
    f.postData('suggestions', suggestion);
}



function TypeOfUserPage(type) {
    switch (type) {
        case "ROLE_CHILD": window.location.replace("./menu_child.html")
            break;
        case "ROLE_TEENAGER": window.location.replace("./menu-adolescente.html")
            break;
        case "ROLE_FAMILY": window.location.replace("./menu-familias.html")
            break;
        case "ROLE_PROCHILDCOLLAB": window.location.replace("./menu-prochild.html")
            break;
        case "ROLE_PSYCHOLOGIST": window.location.replace("./menu-psicologa.html")
            break;
        default:
            break;
    }
}








