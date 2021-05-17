import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
  };


let typeUser = TypeOfUser(sessionStorage.getItem("role"));
let id = sessionStorage.getItem("id_user");
console.log(typeUser)
fetch.getData(typeUser + "/" + id).then(data => {
    console.log(data)
    $('#tituloMenuChild').innerHTML = `Olá ${data.name} !`

})




function TypeOfUser(type) {
    switch (type) {
        case "ROLE_CHILD": return "children";
        case "ROLE_TEENAGER": return "teenagers"
        case "ROLE_FAMILY": return "family"
        case "ROLE_PROCHILDCOLLAB": return "prochilds"
        case "ROLE_PSYCHOLOGIST": return "psychologists"
        default:
            break;
    }
}

// async function logout() {
//     fetch('http://localhost:8080/api/auth/logout', {
//         headers: {
//             'Authorization': 'Bearer '+ sessionStorage.getItem("accessToken"),
//              'Cookie': 'token='+sessionStorage.getItem("accessToken")
//           },
//           method: 'GET',
//           credentials: "include"
//     })
//   .then((response) => {
//     return response.json();
//   })
//   .then((error) => {
//     console.log(error);
//   }).then( data => {
//       console.log(data)
//   });
// }