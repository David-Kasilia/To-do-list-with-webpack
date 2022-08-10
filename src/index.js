import './style.css';
import render from './toDoList.js';
import AddToDoList from './addToDo.js';

const todosList = new AddToDoList();
render(todosList);

// add todo
const addTodoBtn = document.getElementById('addTask');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.getElementById('task').value.trim();
  const completed = false;
  const index = todosList.list.length + 1;

  const newTodo = {
    id, description, completed, index,
  };
  if (description) {
    todosList.addTodo(newTodo);
    render(todosList);
  }
});

// clear all completed todos
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  todosList.clearCompletedTodos();
  render(todosList);
});
