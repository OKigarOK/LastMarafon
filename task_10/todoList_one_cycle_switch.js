const list = {
    'walk the dog': 'Done',
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    let todoTasks = '';
    let inProgressTasks = '';
    let doneTasks = '';
    let noTasks = `\n -`;
    for (let key in list) {
        switch (list[key]) {
            case 'To Do':
                todoTasks += `\n "${key}"`;
                break;
            case 'In progress':
                inProgressTasks += `\n "${key}"`;
                break;
            case 'Done':
                doneTasks += `\n "${key}"`;
                break;
        }
    }
    console.log('Todo:' + (todoTasks || noTasks));
    console.log('In Progress:' + (inProgressTasks || noTasks));
    console.log('Done:' + (doneTasks || noTasks));
}

showList();
addTask('make a todo list');
addTask('become a developer');
showList();
changeStatus('become a developer', 'In progress');
changeStatus('make a todo list', 'In progress');
showList();
deleteTask('walk the dog');
showList();
