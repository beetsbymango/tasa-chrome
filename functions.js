//initializes the add/delete buttons and list of tasks
const task_list = document.getElementById("task_list");
const add_button = document.getElementById("add_button");
const delete_task_button = document.getElementById("delete_button");

//adds a task to the list
add_button.addEventListener("click", () => {
    const task_input = document.getElementById("task_entry_box");
    const new_task = document.createElement("li");
    if (task_input.value) {
        new_task.innerHTML=task_input.value;
        task_list.appendChild(new_task);
        const dlt_btn = document.createElement("span");
        dlt_btn.innerHTML="&times;";
        new_task.appendChild(dlt_btn);

        task_input.value="";
    }
    saveTasks();
});

//removes a task from the list
task_list.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
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

