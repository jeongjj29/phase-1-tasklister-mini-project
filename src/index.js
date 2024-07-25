document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.querySelector("#create-task-form");
  const toDoListUl = document.querySelector("#tasks")

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // adds task to DOM
    const newTaskLi = document.createElement("li");
    newTaskLi.textContent = createTaskForm["new-task-description"].value;
    toDoListUl.append(newTaskLi);

    // creates dropdown to select priority
    const prioDropDown = document.createElement("select");
    prioDropDown.name = "priority";
    prioDropDown.id = "priority";

    const choosePriorityOption = document.createElement("option");
    choosePriorityOption.value = "";
    choosePriorityOption.textContent = "Choose Priority: "
    const highPriorityOption = document.createElement("option");
    highPriorityOption.value = "high-priority";
    highPriorityOption.textContent = "High Priority";
    highPriorityOption.style.color = "red";
    const medPriorityOption = document.createElement("option");
    medPriorityOption.value = "medium-priority";
    medPriorityOption.textContent = "Medium Priority";
    medPriorityOption.style.color = "yellow";
    const lowPriorityOption = document.createElement("option");
    lowPriorityOption.value = "low-priority";
    lowPriorityOption.textContent = "Low Priority";
    lowPriorityOption.style.color = "green";
    
    prioDropDown.addEventListener("change", () => {
      switch (prioDropDown.value) {
        case "high-priority":
          newTaskLi.style.color = "red";
          break;
        case "medium-priority":
          newTaskLi.style.color = "yellow";
          break;
        case "low-priority":
          newTaskLi.style.color = "green";
          break;
        default: 
          newTaskLi.style.color = "black";
      }
    })
    prioDropDown.append(choosePriorityOption, highPriorityOption, medPriorityOption, lowPriorityOption);

    // adds a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", () => {
      newTaskLi.remove();
    })
    
    newTaskLi.append(prioDropDown, deleteBtn);
    
  })

});
