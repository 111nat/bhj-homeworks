if (!document.cookie.includes('yes')) {
    const modal_main = document.getElementsByClassName('modal')[0];
    modal_main.classList.add('modal_active');

    const modal__close = document.getElementsByClassName('modal__close')[0];
    modal__close.addEventListener('click', () => {
        modal_main.classList.remove('modal_active');

        document.cookie = 'close=yes';
        console.log(document.cookie);
    });
}