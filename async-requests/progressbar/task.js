const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.upload.onprogress = function(e) {
        progress.value = e.loaded/e.total;
    }
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
    request.send(formData);
    e.preventDefault();
});