const input = document.querySelector('#task');
const button = document.querySelector('#button');
const ul = document.querySelector('#list');

const tasks = [];

function handleClickAdd() {
const li = document.createElement('li');
const btnClick = document.createElement('btnClick');
li.textContent = input.value;
btnClick.textContent = 'X';
li.appendChild(btnClick);
ul.appendChild(li);
input.value = '';
tasks.push(li);
const index = tasks.length - 1;

btnClick.onclick = () => handleClickRemove(index);
}
button.onclick = handleClickAdd;

function handleClickRemove(index) {
tasks[index].remove()
}