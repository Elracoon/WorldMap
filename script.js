document.addEventListener("DOMContentLoaded", function () {
    const paths = document.querySelectorAll('.world-map path');
    const hoverColorInput = document.getElementById('hover-color');
    let hoverColor = hoverColorInput.value;

    function updateHoverColor(path) {
        path.style.fill = hoverColor;
    }

    hoverColorInput.addEventListener('input', function() {
        hoverColor = hoverColorInput.value;
    });

    paths.forEach(path => {
        const defaultColor = path.style.fill;

        path.addEventListener('mouseenter', function () {
            updateHoverColor(path);
            const countryName = path.getAttribute('name');
            const countryClass = path.getAttribute('class');
            showCountryInfo(countryName, countryClass);
        });

        path.addEventListener('mouseleave', function () {
            path.style.fill = defaultColor;
            hideCountryInfo();
        });
    });

    function showCountryInfo(name, className) {
        const tooltip = document.getElementById('country-info');
        if (name) {
            tooltip.textContent = name;
        } else if (className) {
            tooltip.textContent = className;
        }
        tooltip.style.display = 'block';
    }

    function hideCountryInfo() {
        const tooltip = document.getElementById('country-info');
        tooltip.textContent = '';
    }
});