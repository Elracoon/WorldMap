document.addEventListener('DOMContentLoaded', function () {
    const canada = document.querySelectorAll('.Canada');
    const japan = document.querySelectorAll('.Japan')

    function addHoverEffect(elements, className) {
        elements.forEach(function (element) {
            element.addEventListener('mouseover', function () {
                elements.forEach(function (el) {
                    el.classList.add(className);
                });
            });

            element.addEventListener('mouseout', function () {
                elements.forEach(function (el) {
                    el.classList.remove(className);
                });
            });
        });
    }

    addHoverEffect(canada, 'hovered');
    addHoverEffect(japan, 'hovered');
})