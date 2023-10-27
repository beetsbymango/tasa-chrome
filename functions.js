//initializes the add/delete
const task_list = document.getElementById("task_list");
const add_button = document.getElementById("add_button");
const task_entry_box = document.getElementById("task_entry_box")

//adds a task to the list
add_button.addEventListener("click", () => {
    if (task_entry_box.value) {
        const new_task = document.createElement("li");
        new_task.innerHTML=
        `
            <span id="left">
                <input type="checkbox" class="status">
                <span id="task">${task_entry_box.value}</span>
            </span>
            <span id="right">
                <button class="focus">★</button>
                <button class="delete">&times;</button>
            </span>
        `;
        task_list.appendChild(new_task);
        task_entry_box.value="";
    }
    saveTasks();
});
task_entry_box.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        add_button.click();
    }
});

//event listeners for checkbox, delete button in list items
task_list.addEventListener("click", function(e) {
    //delete button
    if (e.target.className === "delete") {
        e.target.parentElement.parentElement.remove();
        saveTasks();
    //checkbox
    } else if (e.target.className === "status") {
        const completion_status = e.target;
        const task_alter = completion_status.nextElementSibling;
        if(completion_status.checked) {
            task_alter.style.textDecoration = "line-through";
        } else {
            task_alter.style.textDecoration = "none";
        }
        saveTasks();
    }else if (e.target.className === "focus") {
        const priority_task = e.target.parentElement.parentElement;
        toggleFocus(priority_task);
        saveTasks();
    }
    
}, false);
//toggles a task's focus
function toggleFocus(new_head) {
    task_list.removeChild(new_head);
    task_list.insertBefore(new_head, task_list.firstChild);
    console.log("it still works");
}

//saves list after exiting app
function saveTasks() {
    localStorage.setItem("tasks", task_list.innerHTML);
}
//displays any saved lists
function displayTasks() {
    task_list.innerHTML = localStorage.getItem("tasks");
}
displayTasks();