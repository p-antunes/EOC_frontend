const $ = q => {
    return document.querySelector(q);
};


$('#exit2').addEventListener('click', function () {
    Swal.fire({
        title: 'Queres sair da conta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
            sessionStorage.clear();
            window.location.replace("./index.html")
        } 
      })
});



