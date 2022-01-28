const list = {
    'make a todo list': 'In progress',
    'make a bed': 'Done',
    'walk the dog': 'Done',
    'write a post': 'To Do',
}

function changeStatus(task, status) {
    for (let key in list) {
        if (task === key) {
            list[key] = status;
        }
    }
}

function addTask(task) {
    const addTask = {
        [task]: 'To Do',
    }
    Object.assign(list, addTask);
}

function deleteTask(task) {
    for (let key in list) {
        if (task === key) {
            delete list[key];
        }
    }
}

function showList() {
    console.log('Todo:');
    for (let key in list) {
        if (list[key] === 'To Do') {
            console.log(' "' + key + '"');
        }
    }
    console.log('In Progress:');
    for (let key in list) {
        if (list[key] === 'In progress') {
            console.log(' "' + key + '"');
        }
    }
    console.log('Done:');
    for (let key in list) {
        if (list[key] === 'Done') {
            console.log(' "' + key + '"');
        }
    }
}

showList();
deleteTask('make a bed');
addTask('become a developer');
changeStatus('write a post', 'Done');
showList();