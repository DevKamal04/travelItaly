document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.tooltip');
    const modal = document.getElementById('info-modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', () => {
            const info = tooltip.getAttribute('data-info');
            fetchLandmarkInfo(info);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function fetchLandmarkInfo(info) {
        let content = '';
        switch(info) {
            case 'florence-cathedral':
                content = '<h2>Florence Cathedral</h2><p>The Florence Cathedral is an iconic landmark...</p>';
                break;
            case 'ponte-vecchio':
                content = '<h2>Ponte Vecchio</h2><p>Ponte Vecchio is a medieval stone closed-spandrel segmental arch bridge...</p>';
                break;
            case 'uffizi-gallery':
                content = '<h2>Uffizi Gallery</h2><p>The Uffizi Gallery is a prominent art museum located adjacent to the Piazza della Signoria...</p>';
                break;
            default:
                content = '<h2>Unknown Landmark</h2><p>Information not available.</p>';
        }
        modalText.innerHTML = content;
        modal.style.display = 'block';
    }
});
