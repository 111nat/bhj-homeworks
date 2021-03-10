function nextSlide() {
    for (let i = 0; i < document.getElementsByClassName('slider__item').length; i++) {

        if (document.getElementsByClassName('slider__item').item(i).className.includes('slider__item_active')) {
            document.getElementsByClassName('slider__item').item(i).className = document.getElementsByClassName('slider__item').item(i).className.replace(' slider__item_active', '');

            if(i + 1 == document.getElementsByClassName('slider__item').length) {
                document.getElementsByClassName('slider__item').item(0).className += ' slider__item_active';
                document.getElementsByClassName('slider__dot').item(0).click();
                break;
            } else {
                document.getElementsByClassName('slider__item').item(i + 1).className += ' slider__item_active';
                document.getElementsByClassName('slider__dot').item(i + 1).click();
                break;
            }
        }
    }
}

document.getElementsByClassName('slider__arrow_next').item(0).onclick = () => {
 nextSlide();
};

function prevSlide() {
    for (let i = 0; i < document.getElementsByClassName('slider__item').length; i++) {

        if (document.getElementsByClassName('slider__item').item(i).className.includes('slider__item_active')) {
            document.getElementsByClassName('slider__item').item(i).className = document.getElementsByClassName('slider__item').item(i).className.replace(' slider__item_active', '');

            if(i - 1 == -1) {
                document.getElementsByClassName('slider__item').item(document.getElementsByClassName('slider__item').length - 1).className += ' slider__item_active';
                document.getElementsByClassName('slider__dot').item(document.getElementsByClassName('slider__item').length - 1).click();
                break;
            } else {
                document.getElementsByClassName('slider__item').item(i - 1).className += ' slider__item_active';
                document.getElementsByClassName('slider__dot').item(i - 1).click();
                break;
            }
        }
    }
}

document.getElementsByClassName('slider__arrow_prev').item(0).onclick = () => {
    prevSlide();
};

for (let i = 0; i < document.getElementsByClassName('slider__dot').length; i++) {
    document.getElementsByClassName('slider__dot').item(i).onclick = () => {
        for (let j = 0; j < document.querySelectorAll('div.slider__dot_active').length; j++) {
            document.querySelectorAll('div.slider__dot_active').item(j).className = document.querySelectorAll('div.slider__dot_active').item(j).className.replace(' slider__dot_active', '');
        }
        document.getElementsByClassName('slider__dot').item(i).className += ' slider__dot_active';

        document.querySelector('div.slider__item_active').className = document.querySelector('div.slider__item_active').className.replace(' slider__item_active', '');

        document.getElementsByClassName('slider__item').item(i).className += ' slider__item_active';
    };
}