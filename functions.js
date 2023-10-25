//initializes the add/delete buttons and list of tasks
const tasks_list = document.getElementById("task_list");
const add_task_button = document.getElementById("add_button");
const delete_task_button = document.getElementById("delete_button");

//adds a task to the list
add_task_button.addEventListener("click", () => {
    const new_task_item = document.getElementById("task_entry_box");
    const new_li = document.createElement("li");
    if (new_task_item.value){
        new_li.innerHTML=new_task_item.value;
        tasks_list.appendChild(new_li);
        new_task_item.value = "";
    }
});

//removes a task from the list
delete_task_button.addEventListener("click", () => {
    const deletion_task = document.querySelector("li");
    tasks_list.removeChild(deletion_task);
});


