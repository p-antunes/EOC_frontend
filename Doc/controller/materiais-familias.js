


function saveFile(){
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    
    file instanceof File; // true
    file instanceof Blob; // true
    
    const formData = new FormData();
    formData.append('myimage.png', file);
    
    // Post the form, just make sure to set the 'Content-Type' header
    const res = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
}


