let tasks = [];

function addTask() {
  const taskElement = document.getElementById("addTaskInput");
  tasks.push({ name: taskElement.value.trim() });
  document.getElementById("filterTaskInput").value = "";
  taskElement.value = "";
  loadTasks();
}

function loadTasks() {
  const filterTask = document.getElementById("filterTaskInput").value;

  let tasksHtml = "";

  for (task of tasks) {
    if (task.name.includes(filterTask)) {
      tasksHtml += createTask(task);
    }
  }

  document.getElementById("tasks").innerHTML = tasksHtml;
}

function createTask(task) {
  let taskName = task.name.trim();

  return `<div class="d-flex justify-content-between border p-2 text-center">
            <p>${taskName}</p>
            <div class="d-flex gap-2">
                <button class="btn btn-sm btn-warning" onclick="editTask('${taskName}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask('${taskName}')">Delete</button>
            </div>
        </div>`;
}

function deleteTask(taskName) {
  let index = tasks.findIndex((task) => task.name == taskName);

  if (index > -1) {
    tasks.splice(index, 1);
  }

  loadTasks();
}

function editTask(taskName) {
  let index = tasks.findIndex((task) => task.name == taskName);

  if (index > -1) {
    let task = tasks[index];
    const newTaskName = prompt("Edit task:", task.name);
    tasks[index] = { name: newTaskName.trim() };
  }

  loadTasks();
}
