document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('envelopeFlap').classList.toggle('open');
    setTimeout(() => {
        document.querySelector('.envelope-body h2').style.display = 'none';
        document.querySelector('.envelope-body img').classList.add('show');
    }, 600); // Tiempo que tarda en abrirse la solapa
});
