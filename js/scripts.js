// Add task
function addTask() {
    // Get task title
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        // Clone template
        const templateTask = document.querySelector(".template");
        const newTask = templateTask.cloneNode(true);

        // Add titulo in new task
        newTask.querySelector(".task-title").textContent = taskTitle;

        // Remove needless classes
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // Add new task in task list
        const taskList = document.querySelector("#task-list");
        taskList.appendChild(newTask)

        // Add event on done button
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            doneTask(this)
        })

        // Add event on remove button
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        })

        // Clean new task title input
        document.querySelector("#task-title").value = ""
    }
}

// Add task event
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
})

// Done task
function doneTask(task) {
    task.parentNode.classList.add("done");
}

// Remove task
function removeTask(task) {
    task.parentNode.remove(true);
}