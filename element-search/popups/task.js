const modal_main = document.getElementById('modal_main');
modal_main.className += ' modal_active';

for (let i = 0; i < document.getElementsByClassName('modal__close').length; i++) {
    const modal__close = document.getElementsByClassName('modal__close').item(i);
    modal__close.onclick = () => {
        modal_main.className = modal_main.className.replace(' modal_active', '');
        document.getElementById('modal_success').className = document.getElementById('modal_success').className.replace(' modal_active', '');
    };
}


const show_success = document.getElementsByClassName('show-success').item(0);
show_success.onclick = () => {
    modal_main.className = modal_main.className.replace(' modal_active', '');
    document.getElementById('modal_success').className += ' modal_active';
};