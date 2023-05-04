practice();

function practice() {
    document.querySelector('form').addEventListener('submit', toDoListAdd);
    document.querySelector('ul').addEventListener('click', deleteThis);
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
    li.innerHTML = `<label>${value}<input type='checkbox'></label><span class="delete">x</span>`
    ul.appendChild(li);
    let append = document.getElementById('clear').style.display = 'block';
}

function deleteThis(e) {
    if (e.target.className == 'delete')
        deleteParent(e);
}

function deleteParent(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    if (parentNode.childElementCount == 0){
        let append = document.getElementById('clear').style.display = 'none';
    }
}

function deleteAll(e) {
    let ul = document.querySelector('ul').innerHTML = '';
    let append = document.getElementById('clear').style.display = 'none';
}