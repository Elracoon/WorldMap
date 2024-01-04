document.addEventListener('DOMContentLoaded', function () {
    const canada = document.querySelectorAll('.Canada');

    canada.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            canada.forEach(function (el) {
                el.classList.add('hovered');
            });
        });

        element.addEventListener('mouseout', function () {
            canada.forEach(function (el) {
                el.classList.remove('hovered');
            });
        });
    });
});