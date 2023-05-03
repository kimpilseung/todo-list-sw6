practice();

function practice() {
    document.querySelector('form').addEventListener('submit', toDoListAdd);
    document.getElementById('clear').addEventListener('click', deleteAll);
}

function toDoListAdd(e) {
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '') toDoListSum(toDoValue.value);
    toDoValue.value = '';
}

function toDoListSum(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<label>${value}<input type='checkbox'></label>`
    ul.appendChild(li);
    let append = document.getElementById('clear').style.display = 'block';
}

function deleteAll(e) {
    let ul = document.querySelector('ul').innerHTML = '';
    let append = document.getElementById('clear').style.display = 'none';
}