document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var openFormButton = document.getElementById('openFormButton');
    var closeButton = document.querySelector('.close-button');

    openFormButton.addEventListener('click', function () {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});
