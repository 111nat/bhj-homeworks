const items = document.getElementById('items');

if (localStorage.length && JSON.parse(localStorage.item)[0].key == 'AUD') {
    document.getElementById('loader').classList.remove('loader_active');
    const parse = JSON.parse(localStorage.item);
    for (let i = 0; i < parse.length; i++) {
        items.insertAdjacentHTML('beforeend',`<div class="item"><div class="item__code">${parse[i].key}</div><div class="item__value">${parse[i].value}</div><div class="item__currency">${parse[i].name}</div></div>`);
    }
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState == xhr.DONE) {
        if (document.getElementById('loader').classList.contains('loader_active')) {
            document.getElementById('loader').classList.remove('loader_active');
        }
        items.innerHTML = ''; 
        const parse = JSON.parse(xhr.responseText);
        for (let key in parse.response.Valute) {
            items.insertAdjacentHTML('beforeend',`<div class="item"><div class="item__code">${parse.response.Valute[key].CharCode}</div><div class="item__value">${parse.response.Valute[key].Value}</div><div class="item__currency">${parse.response.Valute[key].Name}</div></div>`);
        }
    
        let arr = [];
        for (let key in parse.response.Valute) {
            arr.push({key: parse.response.Valute[key].CharCode, value: parse.response.Valute[key].Value, name: parse.response.Valute[key].Name});
        }

        localStorage.clear();
        localStorage.setItem('item', JSON.stringify(arr));
    }
});