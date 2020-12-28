let imgCards = document.querySelectorAll('.img-card');

imgCards.forEach(e => {
    e.addEventListener("click", () => {
        document.querySelector('.expand').classList.remove('expand');
        e.classList.add('expand');
    });
});