// script.js

document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const entries = [...formData.entries()];
    
    console.log('Form submitted!');
    entries.forEach(entry => {
        console.log(entry[0] + ': ' + entry[1]);
    });
    
    alert('Formulário enviado com sucesso!');
});
