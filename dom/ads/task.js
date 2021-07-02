const rotator__case = document.getElementsByClassName('rotator__case');

let speed = rotator__case.item(0).dataset.speed;
rotator__case.item(0).setAttribute('style', 'color: ' + rotator__case.item(0).dataset.color);

function tiomeOut(speed) {
    setTimeout(function () {
        for (let i = 0; i < rotator__case.length; i++) {
            if (rotator__case.item(i).classList.contains('rotator__case_active')) {
                rotator__case.item(i).classList.remove('rotator__case_active');
    
                if (i + 1 < rotator__case.length) {
                    rotator__case.item(i + 1).classList.add('rotator__case_active');
                    rotator__case.item(i + 1).setAttribute('style', 'color: ' + rotator__case.item(i + 1).dataset.color);
                    speed = rotator__case.item(i + 1).dataset.speed;
                }
                else {
                    rotator__case.item(0).classList.add('rotator__case_active');
                    rotator__case.item(0).setAttribute('style', 'color: ' + rotator__case.item(0).dataset.color);
                    speed = rotator__case.item(0).dataset.speed;
                }
                break;
            }
        }
        tiomeOut(speed);
    }, speed);   
}

tiomeOut(speed);