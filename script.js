// Get the task list and add task form elements
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskTime = document.getElementById('task-time');
const addTaskBtn = document.getElementById('add-task-btn');

// Initialize an empty task list
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const taskHTML = `
            <li ${task.completed ? 'class="completed"' : ''}>
                ${task.text}
                <span>${task.date} ${task.time}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </li>
        `;
        taskList.innerHTML += taskHTML;
    });
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;
    const taskTimeValue = taskTime.value;
    if (taskText && taskDateValue && taskTimeValue) {
        const newTask = {
            text: taskText,
            date: taskDateValue,
            time: taskTimeValue,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';
    }
}

// Function to edit a task
function editTask(taskIndex) {
    const task = tasks[taskIndex];
    taskInput.value = task.text;
    taskDate.value = task.date;
    taskTime.value = task.time;
    addTaskBtn.textContent = 'Update Task';
}

// Function to delete a task
function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    renderTasks();
}

// Event listeners
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, e.target.parentNode);
        editTask(taskIndex);
    } else if (e.target.classList.contains('delete-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, e.target.parentNode);
        deleteTask(taskIndex);
    }
});

// Initialize the task list
renderTasks();