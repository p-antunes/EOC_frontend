import * as fetch from "./functions/fetch.js"



const $ = q => {
  return document.querySelector(q);
};

const show = q => {
  $(q).style.display = 'block';
};

const hide = q => {
  $(q).style.display = 'none';
};

document.querySelector('.country_select').addEventListener('change', (event) => {
  getParamsUsers(event.target.value)
  sessionStorage.setItem('type', event.target.value)
})



$('#btnRegistar').addEventListener('click', function () {
  let type = sessionStorage.getItem('type');
  let userRoute = getTypeUser(type)
  let userData = getDataParms(type);
  console.log(userRoute)
  console.log(userData)

  fetch.postData(userRoute, userData).then(response => {
    console.log(response.message)
    if (!response.success) {
      Swal.fire(
        `${response.message}`,
        '',
        'warning'
      )
    } else {
      Swal.fire("Sucesso!",
        `${response.message}`,
        "success").then((result) => {
          if (result.value) {
            window.location.replace('./login.html')
          }
        })
    }
  }
  )
})


function getDataParms(type) {
  let dataChild = {
    "email": $('#email').value,
    "password": $('#pwd').value,
    "confirmPassword": $('#checkPwd').value,
    "name": $('#name').value,
    "birthDate": $('#birthDay').value + " 00:00:00",
    "city": $('#city').value,
    "county": $('#country').value,
    "postalCode": $('#postalCode').value,
    "address": $('#adress').value,
    "school": $('#school').value,
    "role": { "idRole": 1 }
  }

  let dataTeenager = {
    "email": $('#email').value,
    "password": $('#pwd').value,
    "confirmPassword": $('#checkPwd').value,
    "name": $('#name').value,
    "birthDate": $('#birthDay').value + " 00:00:00",
    "phoneNr": $('#phoneNr').value,
    "city": $('#city').value,
    "county": $('#country').value,
    "postalCode": $('#postalCode').value,
    "address": $('#adress').value,
    "school": $('#school').value,
    "role": { "idRole": 2 }
  }

  let dataFamily = {
    "email": $('#email').value,
    "password": $('#pwd').value,
    "confirmPassword": $('#checkPwd').value,
    "name": $('#name').value,
    "birthDate": $('#birthDay').value + " 00:00:00",
    "phoneNr": $('#phoneNr').value,
    "city": $('#city').value,
    "county": $('#country').value,
    "postalCode": $('#postalCode').value,
    "address": $('#adress').value,
    "role": { "idRole": 3 }
  }

  let dataProchild = {
    "email": $('#email').value,
    "password": $('#pwd').value,
    "confirmPassword": $('#checkPwd').value,
    "name": $('#name').value,
    "birthDate": $('#birthDay').value + " 00:00:00",
    "phoneNr": $('#phoneNr').value,
    "city": $('#city').value,
    "county": $('#country').value,
    "postalCode": $('#postalCode').value,
    "address": $('#adress').value,
    "role": { "idRole": 5 }
  }

  let psychologist = {
    "email": $('#email').value,
    "password": $('#pwd').value,
    "confirmPassword": $('#checkPwd').value,
    "name": $('#name').value,
    "birthDate": $('#birthDay').value + " 00:00:00",
    "phoneNr": $('#phoneNr').value,
    "city": $('#city').value,
    "county": $('#country').value,
    "postalCode": $('#postalCode').value,
    "address": $('#adress').value,
    "role": { "idRole": 6 }
  }


  switch (type) {
    case '1': return dataChild
      break;
    case '2': return dataTeenager
      break;
    case '3': return dataFamily
      break;
    case '4': return psychologist
      break;
    case '5': return dataProchild
      break;
  }

}

function getTypeUser(type) {
  switch (type) {
    case '1': return "children"
      break;
    case '2': return "teenagers"
      break;
    case '3': return "family"
      break;
    case '4': return "psychologists"
      break;
    case '5': return "prochilds"
      break;
  }
}




function getParamsUsers(type) {
  console.log(type)
  getNoneParms()

  switch (type) {
    case '1': getChildParms()
      break;
    case '2': getTeenagerParms()
      break;
    case '3': getAdultsParms()
      break;
    case '4': getAdultsParms()
      break;
    case '5': getAdultsParms()
      break;
  }
}


function getNoneParms() {
  hide("#name")
  hide("#birthDay")
  hide("#email")
  hide("#postalCode")
  hide("#city")
  hide("#country")
  hide("#adress")
  hide("#phoneNr")
  hide("#school")
  hide("#pwd")
  hide("#checkPwd")
};

function getTeenagerParms() {
  show("#name")
  show("#birthDay")
  show("#email")
  show("#postalCode")
  show("#city")
  show("#country")
  show("#adress")
  show("#phoneNr")
  show("#school")
  show("#pwd")
  show("#checkPwd")
}


function getAdultsParms() {
  show("#name")
  show("#birthDay")
  show("#email")
  show("#postalCode")
  show("#city")
  show("#country")
  show("#adress")
  show("#phoneNr")
  show("#pwd")
  show("#checkPwd")
}

function getChildParms() {
  show("#name")
  show("#birthDay")
  show("#email")
  show("#postalCode")
  show("#city")
  show("#country")
  show("#adress")
  show("#school")
  show("#pwd")
  show("#checkPwd")
}































































