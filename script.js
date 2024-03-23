function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskDateTime = document.getElementById('taskDateTime');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();
    var taskTime = taskDateTime.value;

    if (taskText !== '') {
        var li = document.createElement('li');
        var editIcon = '<span class="edit" onclick="editTask(this)">&#9998;</span>';
        var deleteIcon = '<span class="delete" onclick="deleteTask(this)">X</span>';
        var clockIcon = '<span class="clock" onclick="setTime(this)">⏰</span>';
        li.innerHTML = '<span class="task-text"><strong>' + taskText + '</strong></span> - ' + taskTime + editIcon + deleteIcon + clockIcon;
        taskList.appendChild(li);
        taskInput.value = '';
        taskDateTime.value = '';
    }
}

function editTask(element) {
    var taskText = element.parentNode.querySelector('.task-text');
    var newText = prompt('Edit task:', taskText.textContent.trim());

    if (newText !== null && newText.trim() !== '') {
        taskText.innerHTML = '<strong>' + newText.trim() + '</strong>';
    }
}

function deleteTask(element) {
    element.parentNode.remove();
}

function setTime(element) {
    var time = prompt('Enter time to do this task (optional):');
    if (time !== null && time.trim() !== '') {
        element.parentNode.innerHTML += ' - <span class="time">' + time.trim() + '</span>';
    }
}
