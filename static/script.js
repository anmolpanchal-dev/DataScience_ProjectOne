

// Show result card after submit (demo only; real result comes from server)
document.getElementById('predictForm')?.addEventListener('submit', function (e) {
    const card = document.getElementById('resultCard');
    if (card) {
        card.classList.add('visible');
        document.getElementById('resultVal').textContent = '...';
    }
});
