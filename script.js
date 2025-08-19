// Helper: Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

// Helper: Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks on the page
function renderTasks() {
    const tasks = loadTasks();
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';
    tasks.forEach((task, idx) => {
        const li = document.createElement('li');
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => {
            tasks.splice(idx, 1);
            saveTasks(tasks);
            renderTasks();
        };
        li.appendChild(delBtn);
        tasksList.appendChild(li);
    });
}

// Add new task
document.getElementById('add-btn').onclick = () => {
    const input = document.getElementById('new-task');
    const task = input.value.trim();
    if (task) {
        const tasks = loadTasks();
        tasks.push(task);
        saveTasks(tasks);
        input.value = '';
        renderTasks();
    }
};

// Initial render
renderTasks();
