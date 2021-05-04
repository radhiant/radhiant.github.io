const scriptURL = 'https://script.google.com/macros/s/AKfycbxVoVlcwKbpHIAcuqz345e0tXOTnQKOKW4YZEygHwehWrCezo17Vqpccw33ZutAEIHNoQ/exec';
const form = document.forms['radhian-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert-submited');
const alertFail = document.querySelector('.alert-fail');

//ketika tombol submit di klik
form.addEventListener('submit', e => {
    e.preventDefault();
    //tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            //tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            //tampilkan alert
            alertSuccess.classList.toggle('d-none');
            //reset form
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => {
            //tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            //tampilkan alert
            alertFail.classList.toggle('d-none');
            console.error('Error!', error.message);
        });
});