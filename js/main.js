let taskBloc = document.getElementById('tasks');
let create = document.getElementById('create');

create.addEventListener('click', function () {
    let tasks = window.prompt('Titre de la tâche ');
    taskBloc.append(createNewTask(tasks));
})

function createNewTask(title) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = title;
    return card ;
}


