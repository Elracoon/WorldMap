document.addEventListener("DOMContentLoaded", function () {
    const paths = document.querySelectorAll('.world-map path');

    paths.forEach(path => {
        path.addEventListener('mouseenter', function () {
            this.style.fill = '#ff0000';
            const countryName = this.getAttribute('name');
            const countryClass = this.getAttribute('class');
            showCountryInfo(countryName, countryClass);
        });

        path.addEventListener('mouseleave', function () {
            this.style.fill = '#ececec';
            hideCountryInfo();
        });
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
    tooltip.style.display = 'none';
}
