window.onload = (event) => {
    var myToast = document.querySelector('.toast');
    var bsToast = new bootstrap.Toast(myToast);
    bsToast.show();
}

var myToast = document.querySelector('.toast');

function showToast() {
    var bsToast = new bootstrap.Toast(myToast);
    bsToast.show();
}