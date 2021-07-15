const prev_editor = document.getElementById('editor');
prev_editor.outerHTML = prev_editor.outerHTML + '<button id="button">Очистить</button>';

const editor = document.getElementById('editor');

if (localStorage.length && localStorage.getItem('first')) {
    editor.value = localStorage.first;
}

editor.addEventListener('keyup', () => {
    localStorage.first = editor.value;
});

const button = document.getElementById('button');
button.addEventListener('click', () => {
    editor.value = '';
    localStorage.first = editor.value;
});