const footer = document.getElementById('myFooter');

fetch('footer.html', { cache: 'no-cache' })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
    })
    .then(content => {
        footer.innerHTML = content;
        const year = footer.querySelector('[data-copyright-year]');
        if (year) {
            year.textContent = String(new Date().getFullYear());
        }
    })
    .catch(error => {
        console.error('Error loading footer:', error);
        footer.innerHTML = '<p>Error loading footer. Please host on a server.</p>';
    });
