document.addEventListener('DOMContentLoaded', function () {
    const canada = document.querySelectorAll('.Canada');
    const japan = document.querySelectorAll('.Japan')
    const norway = document.querySelectorAll('.Norway')
    const australia = document.querySelectorAll('.Australia')

    function addHoverEffect(elements, className) {
        elements.forEach(function (element) {
            var clicked = false;

            element.addEventListener('mouseover', function () {
                if (!clicked) {
                    elements.forEach(function (el) {
                        el.classList.add(className);
                    });
                }
            });

            element.addEventListener('mouseout', function () {
                if (!clicked) {
                    elements.forEach(function (el) {
                        el.classList.remove(className);
                    });
                }
            });

            element.addEventListener('click', function () {
                clicked = !clicked;

                if (clicked) {
                    elements.forEach(function (el) {
                        el.classList.add(className);
                    });
                } else {
                    elements.forEach(function (el) {
                        el.classList.remove(className);
                    });
                }
            });
        });
    }
    
    addHoverEffect(canada, 'hovered');
    addHoverEffect(japan, 'hovered');
    addHoverEffect(norway, 'hovered');
    addHoverEffect(australia, 'hovered')
})