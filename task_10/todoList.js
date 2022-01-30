const list = {
    'make a todo list': 'In progress',
    'make a bed': 'Done',
    'walk the dog': 'Done',
    'write a post': 'To Do',
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
    let repeat;
    console.log('Todo:');
    repeat = 0;
    for (let key in list) {
        if (list[key] === 'To Do') {
            console.log(' "' + key + '"');
            repeat ++;
        }
    }
    if (!repeat) console.log(' - ');

    console.log('In Progress:');
    repeat = 0;
    for (let key in list) {
        if (list[key] === 'In progress') {
            console.log(' "' + key + '"');
            repeat ++;
        }
    }
    if (!repeat) console.log(' - ');

    console.log('Done:');
    repeat = 0;
    for (let key in list) {
        if (list[key] === 'Done') {
            console.log(' "' + key + '"');
            repeat ++;
        }
    }
    if (!repeat) console.log(' - ');
}

showList();
deleteTask('make a bed');
addTask('become a developer');
changeStatus('write a post', 'Done');
changeStatus('make a todo list', 'Done');
showList();

