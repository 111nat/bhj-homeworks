const reveal = document.getElementsByClassName('reveal').item(0);
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    if (reveal.getBoundingClientRect().top > 0 && reveal.getBoundingClientRect().bottom < viewportHeight) {
        if (!reveal.classList.contains('reveal_active')) {
            reveal.classList.add('reveal_active');
        }
    }
    else {
        if (reveal.classList.contains('reveal_active')) {
            reveal.classList.remove('reveal_active');
        }
    }
});