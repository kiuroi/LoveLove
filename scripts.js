document.addEventListener('DOMContentLoaded', (event) => {
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const envelope = document.querySelector('.envelope');

    openButton.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        envelope.classList.remove('open');
    });
});