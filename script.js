//initializes elements
const task_list = document.getElementById("task_list");
const add_button = document.getElementById("add_button");
const task_entry_box = document.getElementById("task_entry_box");
const clear_button = document.getElementById("clear_button");
//adds tasks
add_button.addEventListener("click", () => {
    if(task_entry_box.value) {
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
        if(task_list.childElementCount !=0){
            const hr = document.createElement("hr");
            task_list.appendChild(hr);
        }
        task_list.appendChild(new_task);
        task_entry_box.value="";
        console.log("added new task");
    }
    saveTasks();
});
//lets user use "Enter button to add tasks"
task_entry_box.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        add_button.click();
    }
});
//event listener for task buttons
task_list.addEventListener("click", function(e) {
    //delete button
    if (e.target.className === "delete") {
        if(e.target.parentElement.parentElement === task_list.firstChild) {
            console.log("deleting first element");
            if(task_list.childElementCount > 1){
                e.target.parentElement.parentElement.nextElementSibling.remove();
            }
            e.target.parentElement.parentElement.remove();
        }
        else if(e.target.parentElement.parentElement === task_list.lastChild){
            console.log('deleting last element');
            e.target.parentElement.parentElement.previousElementSibling.remove();
            e.target.parentElement.parentElement.remove();
        }
        else {
            console.log('deleting middle element');
            e.target.parentElement.parentElement.previousElementSibling.remove();
            e.target.parentElement.parentElement.remove();
        }
        console.log("deleted task");
        saveTasks();
    //checkbox 
    } else if (e.target.className === "status") {
        const completion_status = e.target;
        const task_alter = completion_status.nextElementSibling;
        if(completion_status.checked) {
            task_alter.style.textDecoration = "line-through";
            console.log("task is complete");
        } else {
            task_alter.style.textDecoration = "none";
            console.log("task is not complete");
        }
        saveTasks();
    //focus button
    }else if (e.target.className === "focus") {
        const priority_task = e.target.parentElement.parentElement;
        toggleFocus(priority_task);
        console.log("prioritizing a task");
        saveTasks();
    }
}, false);

//toggles a task's focus
function toggleFocus(new_head) {
    if (task_list.childElementCount > 1 && new_head != task_list.firstChild) {
        let prev_hr = new_head.previousElementSibling;
        task_list.removeChild(prev_hr);
        task_list.insertBefore(prev_hr, task_list.firstChild);
        task_list.removeChild(new_head);
        task_list.insertBefore(new_head, task_list.firstChild);
    }
}

//event listener for clear button / lets user clear out entire task list
clear_button.addEventListener("click", () => {
    if(task_list.childElementCount > 0){
        while(task_list.childElementCount > 0) {
            task_list.removeChild(task_list.lastChild);
        }
        console.log("cleared all children");
        saveTasks();
    }
});
//saves list after exiting app
function saveTasks() {
    localStorage.setItem("tasks", task_list.innerHTML);
}
//displays any saved lists
function displayTasks() {
    task_list.innerHTML = localStorage.getItem("tasks");
}
displayTasks();