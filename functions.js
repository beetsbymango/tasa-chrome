const tasks_list = document.getElementById("tasks_box");
const add_task_button = document.getElementById("add_button");


add_task_button.addEventListener("click", () => {
    const new_task_item = document.getElementById("task_entry");
    const new_li = document.createElement("li");
    console.log(new_task_item.value);
    new_li.innerHTML=new_task_item.value;
    tasks_list.appendChild(new_li);

    new_task_item.value = "";
});
