const addMessage = document.querySelector('.toDo__input')
const addButton = document.querySelector('.toDo__button')
const todo = document.querySelector('.toDo__items')

let todoList = []

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayTodo()
}

addButton.addEventListener('click', ()=>{
    const newTodo = {
        todo: addMessage.value,
        checked:false,
    }

    todoList.push(newTodo)
    displayTodo()
    addMessage.value =''
    localStorage.setItem('todo' , JSON.stringify(todoList))
})

function displayTodo () {
    let displayMessage ='';
    todoList.map((item, index)=>{
        displayMessage += `
        <li>
        <input type="checkbox"  id="${index}" ${item.checked ? 'checked' :''}>
        <label for='item_${index}' > ${item.todo} </label>
        </li>`;

        todo.innerHTML = displayMessage;
    })

    todo.addEventListener('onclick', (event)=>{
       delete todoList[event.target.id]
    })

}