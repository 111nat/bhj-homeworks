const task_input = document.getElementById('task__input');

const tasks__list = document.getElementById('tasks__list');

const tasks_add = document.getElementById('tasks__add');


if (localStorage.length != 0 && localStorage.first.includes('task')) {
    //console.log(localStorage.first.includes('task'));

    tasks__list.insertAdjacentHTML('afterbegin', localStorage.getItem('first'));

    for (let i = 0; i < document.getElementsByClassName('task__remove').length; i++) {
        const task__remove_localStorage = document.getElementsByClassName('task__remove')[i];
        const task__localStroage = document.getElementsByClassName('task')[i];

        
        task__remove_localStorage.addEventListener('click', () => {
            task__localStroage.remove();
        });
        
    }
}


task_input.addEventListener('keydown', (e) => {

    if (e.key == 'Enter' && e.target.value != '') {
        
        localStorage.clear();

        tasks__list.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${e.target.value} </div> <a href="#" class="task__remove">&times;</a> </div>`);
        e.target.value = '';

        localStorage.setItem('first', tasks__list.innerHTML);

        const task__remove = document.getElementsByClassName('task__remove')[document.getElementsByClassName('task__remove').length - 1];
        const task = document.getElementsByClassName('task')[document.getElementsByClassName('task').length - 1];
        task__remove.addEventListener('click', () => {
            
            task.remove();
        });
    }
});

tasks_add.onclick = function(){return false}; 