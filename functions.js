//initializes the add/delete
const task_list = document.getElementById("task_list");
const add_button = document.getElementById("add_button");
const task_entry_box = document.getElementById("task_entry_box")

//adds a task to the list
add_button.addEventListener("click", () => {
    if (task_entry_box.value) {
        const new_task = document.createElement("li");
        new_task.innerHTML=task_entry_box.value;
        task_list.appendChild(new_task);
        const dlt_btn = document.createElement("button");
        dlt_btn.innerHTML="&times;";
        new_task.appendChild(dlt_btn);

        task_entry_box.value="";
    }
    saveTasks();
});

//removes a task from the list
task_list.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
    saveTasks();
}, false);

//saves list after exiting app
function saveTasks() {
    localStorage.setItem("tasks", task_list.innerHTML);
}
//displays any saved lists
function displayTasks() {
    task_list.innerHTML = localStorage.getItem("tasks");
}
displayTasks();