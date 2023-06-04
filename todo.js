let todoItemsContainer = document.getElementById("todoItemsContainer");
let addtodobutton = document.getElementById("addTodoButton");
let todoList = [{
        text: "Learn HTML",
        uniqueno: 1
    },
    {
        text: "Learn CSS",
        uniqueno: 2
    },
    {
        text: "Learn JavaScript",
        uniqueno: 3
    }
];
let todolength = todoList.length;

function createAndAppendTodo(todo) {
    let checkboxid = "checkbox" + todo.uniqueno;
    let labelid = "label" + todo.uniqueno;
    let todoid = "todo" + todo.uniqueno;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoid;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxid;
    inputElement.onclick = function() {
        let checkboxElement = document.getElementById(checkboxid);
        let labelElement = document.getElementById(labelid);
        labelElement.classList.toggle('checked');
    }
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.id = labelid;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        let lielement = document.getElementById(todoid);
        todoItemsContainer.removeChild(lielement);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}


addtodobutton.onclick = function() {

    let userinput = document.getElementById("todoUserInput");
    let userinputvalue = userinput.value;
    console.log(userinputvalue);
    let newtodo = {
        text: userinputvalue,
        uniqueno: todolength + 1
    }
    createAndAppendTodo(newtodo);
    userinputvalue = ""

}