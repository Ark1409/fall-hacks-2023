document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName("nav-item");
    var firstElement = elements[0];
    var secondElement = elements[1];

    firstElement.addEventListener('click', function() {
        firstElement.classList.add('nav-selected');
        secondElement.classList.remove('nav-selected');
    });

    secondElement.addEventListener('click', function () {
        secondElement.classList.add('nav-selected');
        firstElement.classList.remove('nav-selected');
    });
})