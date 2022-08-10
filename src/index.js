import './style.css';
import render from './populateTaskList.js';
import AddToDoList from './addRemoveTask.js';
// import img from '../images/index-removebg-preview.png'

const taskList = new AddToDoList();
render(taskList);

const addTodoBtn = document.getElementById('addTask');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.getElementById('task').value.trim();
  const completed = false;
  const index = taskList.list.length + 1;

  const newTask = {
    id, description, completed, index,
  };
  if (description) {
    taskList.addTask(newTask);
    render(taskList);
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  taskList.clearCompletedTask();
  render(taskList);
});
