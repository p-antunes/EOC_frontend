import * as fetch from "./functions/fetch.js"




const $ = q => {
    return document.querySelector(q);
  };
  
  fetch.getData('family/' + sessionStorage.getItem("id_user")).then(data => {
    console.log(data)
    $('#email').value = data.login.email
    $('#pwd').value = data.password
    $('#checkPwd').value = data.confirmPassword
    $('#name').value = data.name  
    $('#birthDay').value = getDateFormat(data.birthDate)
    $('#phoneNr').value = data.phoneNr
    $('#city').value = data.city
    $('#country').value = data.county
    $('#postalCode').value = data.postalCode
    $('#adress').value = data.address
  })
  


  function getDateFormat(date) {
    let a = new Date().toISOString(date);
    var index = a.indexOf("T");
    console.log(a);
    console.log(a.substring(0, index));
    return a.substring(0, index);
  }
  
  
  $('#toggle-btn-1').addEventListener('change', function () {
    if (this.checked) {
      $('#pwd').value = "";
      $('#checkPwd').value ="";
      show('#pwd')
      show('#checkPwd')
    } else {
      hide('#pwd')
      hide('#checkPwd')
    }
  });


