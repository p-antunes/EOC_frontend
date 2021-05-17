// import * as fetch from "./functions/fetch.js"

const fetch = require("node-fetch");
const urlBase = "http://localhost:8080/api/"

async function getData(route) {
    const response = await fetch(urlBase + route);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    
    const data = await response.json();
    return data;
}


function postData(route, data) {
    console.log(urlBase + route)
    fetch(urlBase + route, {
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicado!");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            alert("Submetido com sucesso");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Erro de submissão");
        console.error(err);
    });
}

function deleteData(route) {
    fetch(urlBase + route, {
            method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}

function putData(route, data) {
    fetch(urlBase + route, {
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
        else {
            alert("Submetido com sucesso");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Erro de submissão");
        console.error(err);
    });
}

const $ = q => {
  return document.querySelector(q);
};

const show = q => {
  $(q).style.display = 'block';
};

const hide = q => {
  $(q).style.display = 'none';
};

const isChecked = q => {
  return $(q).checked;
};

const onClick = (q, func) => {
  $(q).addEventListener('click', func);
};

function addErrorMsg(msg) {
  $('#error-text').innerHTML = msg;
  show('#error');
};

function addSuccessMsg(msg) {
  $('#success-text').innerHTML = msg;
  show('#success');
};

function removeMsgs() {
  hide('#error');
  hide('#success');
};



// CHILDREN ------------------------------------------------------------------------------------------------------------------------------------

// getData('children').then(data => {
//   console.log(data);
// });


// let dataChild =  {
//     "email":"dex@gmail.com",
//     "password":"#aB23456",
//     "confirmPassword":"#aB23456",
//     "name":"Dong",
//     "birthDate":"1999-03-03 24:05:30",
//     "city":"Guima",
//     "county":"Pt",
//     "postalCode":"4835-033",
//     "address":"rua s. joao",
//     "school":"Chico de Holanda",
//     "role": {"idRole": 1}
//   }

// postData('children', dataChild);



// let idChild = 2
// deleteData('children/' + idChild);

// putData('children', dataChild);


// TEENAGER ------------------------------------------------------------------------------------------------------------------------------------

//  getData('teenagers').then(data => {
//   console.log(data);
// });

// let teenager =
// {
//     "email":"dfwe@gmail.com",
//     "password":"#aB23456",
//     "confirmPassword":"#aB23456",
//     "name":"Dong Xuyong",
//     "birthDate":"1999-03-03 24:05:30",
//     "phoneNr":"939017636",
//     "city":"Guima",
//     "county":"Braga",
//     "postalCode":"4835-033",
//     "address":"rua s. joao",
//     "school":"Chico de Holanda",
//     "role": {"idRole": 2}
//   }


  
// postData('teenagers', teenager);

// let idTeenager = 1;
// deleteData('teenagers/' + idTeenager)

// FAMILY ------------------------------------------------------------------------------------------------------------------------------------

// getData('family').then(data => {
//   console.log(data);
// });


// let dataFamily =  {
//   "email":"dxfe@gmail.com",
//   "password":"#aB23456",
//   "confirmPassword":"#aB23456",
//   "name":"Dong Xuyong",
//   "birthDate":"1999-03-03 24:05:30",
//   "phoneNr":"939017636",
//   "city":"Guima",
//   "county":"Braga",
//   "postalCode":"4835-033",
//   "address":"rua s. joao",
//   "role": {"idRole": 3}
// }

  

// postData('family', dataFamily);

// let idFamily = 6;
// deleteData('family/' + idFamily);


// Institution ------------------------------------------------------------------------------------------------------------------------------------
// getData('institution').then(data => {
//   console.log(data);
// });

// let dataInstitution =  {
//   "email":"dxfffrfee@gmail.com",
//   "password":"#aB23456",
//   "confirmPassword":"#aB23456",
//   "name":"Dong Xuyong",
//   "phoneNr":"939017636",
//   "city":"Guima",
//   "county":"Braga",
//   "postalCode":"4835-033",
//   "address":"rua s. joao",
//   "role": {"idRole": 4}
// }

// let institution =
// {
//   "email":"",
//   "password":"",
//   "confirmPassword":"",
//   "name":"",
//   "phoneNr":"",
//   "city":"",
//   "county":"",
//   "postalCode":"",
//   "address":"",
//   "role": {"idRole": 4}
//   }

// postData('institution', dataInstitution);

// Prochild ------------------------------------------------------------------------------------------------------------------------------------
// getData('prochilds').then(data => {
//   console.log(data);
// });

// let prochild =  {
//   "email":"dffee@gmail.com",
//   "password":"#aB23456",
//   "confirmPassword":"#aB23456",
//   "name":"Dong Xuyong",
//   "birthDate":"1999-03-03 24:05:30",
//   "phoneNr":"939017636",
//   "city":"Guima",
//   "county":"Braga",
//   "postalCode":"4835-033",
//   "address":"rua s. joao",
//   "role": {"idRole": 5}
// }


// postData('prochilds', prochild);

// let idProchild = 1; 
// deleteData('prochilds/' + idProchild); 

// Psychologist ------------------------------------------------------------------------------------------------------------------------------------
// getData('psychologists').then(data => {
//   console.log(data);
// });

// let psychologist =  {
//   "email":"a@gmail.com",
//   "password":"#aB23456",
//   "confirmPassword":"#aB23456",
//   "name":"Dong Xuyong",
//   "birthDate":"1999-03-03 24:05:30",
//   "phoneNr":"939017636",
//   "city":"Guima",
//   "county":"Braga",
//   "postalCode":"4835-033",
//   "address":"rua s. joao",
//   "role": {"idRole": 6}
// }




// let Psychologist = 
// {
//   "email":"",
//   "password":"",
//   "confirmPassword":"",
//   "name":"",
//   "birthDate":"",
//   "phoneNr":"",
//   "city":"",
//   "county":"",
//   "postalCode":"",
//   "address":"",
//   "role": {"idRole": 6}
//   }
  
  // postData('prochilds', psychologist);

// Direitos  ------------------------------------------------------------------------------------------------------------------------------------


// getData('rights').then(data => {
//   console.log(data)
//   // let txt = '';
//   // for (let i in data) {
//   //   // console.log(data[i])
//   //   txt += `${data[i].rights}<br>`;
//     // console.log(txt)
//   // }
//   // $('#direitos').innerHTML = txt;
// });


// let direitos = {
//   "rights":" Direito a livros escolares"
//   }
  
// postData('rights', direitos);

// let idRight = 7;
// deleteData('rights/' + idRight);
// Link de videos ------------------------------------------------------------------------------------------------------------------------------------

// https://www.youtube.com/embed/2txldr_OVcg
// getData('videorights').then(data => {
//   console.log(data);
//   let txt = '';
//   txt += `<iframe width='420' height='315' src= '${data[0].link_video}'></iframe>`;
//   $('#videos').innerHTML = txt;
// });

// let dataVideo = {
//       "linkVideo": "https://www.youtube.com/embed/2txldr_OVcg"
// };

// postData('videorights', dataVideo);

// let idVideo = 2;
// deleteData('videorights/' + idVideo);




