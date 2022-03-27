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

    if (addMessage.value =='') return;

    todoList.push(newTodo)
    displayTodo()
    addMessage.value =''
    localStorage.setItem('todo' , JSON.stringify(todoList))
})

function displayTodo () {
    if (todoList.length === 0 ) {todo.innerHTML = ''}
    let displayMessage ='';
    todoList.map((item, index)=>{
        displayMessage += `
        <li>
        <input type="checkbox"  id="${index}" ${item.checked ? 'checked' :''}>
        <label for='item_${index}' > ${item.todo} </label>
        <button onclick = 'deleteTask(${index})' > удалить таску </button>
        </li>`;

        todo.innerHTML = displayMessage;
    })

}

function deleteTask (index) {
    todoList.splice(index,1)
    localStorage.setItem('todo' , JSON.stringify(todoList))
    displayTodo ()
}