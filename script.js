document.addEventListener("DOMContentLoaded", function () {
    const paths = document.querySelectorAll('.world-map path');

    paths.forEach(path => {
        path.addEventListener('mouseenter', function () {
            this.style.fill = '#ff0000';
        });

        path.addEventListener('mouseleave', function () {
            this.style.fill = '#ececec';
        });
    });
});
