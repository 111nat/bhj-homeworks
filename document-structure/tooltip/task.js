const has_tooltip = document.getElementsByClassName('has-tooltip');

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].outerHTML = has_tooltip[i].outerHTML + `<div class="tooltip" data-position="right">${has_tooltip[i].getAttribute('title')}</div>`;
}

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].onclick = function(){return false};
}

const tooltip = document.getElementsByClassName('tooltip');
for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', function () {
        const search_tooltip_active = document.getElementsByClassName('tooltip_active');
        if (search_tooltip_active.length != 0) {
            if (tooltip[i].classList.contains('tooltip_active')) {
                tooltip[i].classList.remove('tooltip_active');
            }
        }
        else {
            tooltip[i].classList.toggle('tooltip_active');
            switch(tooltip[i].dataset.position) {
                case 'bottom':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().bottom}px`);
                break;
                
                case 'top':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height)}px`);
                break;

                case 'left':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left - (tooltip[i].getBoundingClientRect().width)}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height/2 - has_tooltip[i].getBoundingClientRect().height/2)}px`);
                break;

                case 'right':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().right}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height/2 - has_tooltip[i].getBoundingClientRect().height/2)}px`);
                break;
            }         
        }       
    });
}

window.addEventListener('scroll', () => {
    for (let i = 0; i < has_tooltip.length; i++) {       
        if (tooltip[i].classList.contains('tooltip_active')) {
           
            switch(tooltip[i].dataset.position) {
                case 'bottom':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().bottom}px`);
                break;
                
                case 'top':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height)}px`);
                break;

                case 'left':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left - (tooltip[i].getBoundingClientRect().width)}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height/2 - has_tooltip[i].getBoundingClientRect().height/2)}px`);
                break;

                case 'right':
                    tooltip[i].setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().right}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height/2 - has_tooltip[i].getBoundingClientRect().height/2)}px`);
                break;
            }
        }
    }
});