document.addEventListener('DOMContentLoaded', () => {
    const envelopes = Array.from(document.querySelectorAll('.envelope'));
    const selectContainer = document.querySelector('.select-container');
    const resultContainer = document.querySelector('.result-container');
    const resultImageWrapper = document.querySelector('.result-image');
    const playAgainBtn = document.getElementById('replay');

    resultContainer.style.display = 'none';
    playAgainBtn.addEventListener('click', function() {
        location.reload();
    });

    const numbers = [1,2,3,4,5,6];
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    envelopes.forEach((el, idx) => {
        el.dataset.number = numbers[idx];
        el.style.cursor = 'pointer';
        el.addEventListener('click', onEnvelopeClick, { once: true });
    });

    function onEnvelopeClick(e) {
        const num = parseInt(this.dataset.number, 10);

        selectContainer.style.display = 'none';
        resultContainer.style.display = '';

        resultImageWrapper.innerHTML = '';

        let src = '';
        if ([1,3,5].includes(num)) {
            src = 'images/keo-lac.png';
        } else if ([2,6].includes(num)) {
            src = 'images/5000.jpg';
        } else if (num === 4) {
            src = 'images/10000.jpg';
        }

        const img = document.createElement('img');
        img.src = src;
        img.style.maxWidth = '50%';
        img.alt = `result-${num}`;
        resultImageWrapper.appendChild(img);
    }
});