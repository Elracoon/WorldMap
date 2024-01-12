document.addEventListener('DOMContentLoaded', function () {
    const canada = document.querySelectorAll('.Canada');
    const japan = document.querySelectorAll('.Japan')
    const norway = document.querySelectorAll('.Norway')
    const australia = document.querySelectorAll('.Australia')
    const denmark = document.querySelectorAll('.Denmark')
    const angola = document.querySelectorAll('.Angola')
    const azerbaijan = document.querySelectorAll('.Azerbaijan')

    function addHoverEffect(elements, className) {
        elements.forEach(function (element) {
            let clicked = false;

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
    addHoverEffect(australia, 'hovered');
    addHoverEffect(denmark, 'hovered');
    addHoverEffect(angola, 'hovered');
    addHoverEffect(azerbaijan, 'hovered');
})