/**
* @jest-environment jsdom
*/

import AddToDoList from '../src/addRemoveTask.js';

document.body.innerHTML = ` 

        <div class="form-container"> 
            <form id="taskList" > 
                <input id="task" placeholder="Add to your list" type="text" name="Task" autofocus /> 
                <button  type="submit" id="addTask"><span id="enter" class="material-symbols-outlined"> 
                    keyboard_return 
                    </span></button> 
            </form> 
        </div> 
        <div id="task-container"> 
        
        </div> 
       `;

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new AddToDoList();
    const newTask = {
      id: 'id123',
      description: 'task1',
      completed: false,
      index: 1,
    };
    const newTask2 = {
      id: 'id1234',
      description: 'task2',
      completed: false,
      index: 2,
    };
    const newTask3 = {
      id: 'id12345',
      description: 'task3',
      completed: false,
      index: 2,
    };
    todoList.addTask(newTask);
    expect(todoList.list).toHaveLength(1);
    todoList.addTask(newTask2);
    expect(todoList.list).toHaveLength(2);
    expect(todoList.list[1].description).toBe('task2');
    todoList.addTask(newTask3);
    expect(todoList.list).toHaveLength(3);
    expect(todoList.list[2].description).toBe('task3');
  });
});

describe('editTaskTest', () => {
  test('editTask', () => {
    const todoList = new AddToDoList();
    const newTask4 = {
      id: 'id123456',
      description: 'task4',
      completed: false,
      index: 3,
    };
    todoList.addTask(newTask4);
    todoList.editTask(newTask4.id, 'task changed');
    expect(todoList.list[3].description).toBe('task changed');
    expect(todoList.list).toHaveLength(4);
  });
});

describe('Complete Task Test', () => {
  test('completedTask', () => {
    const todoList = new AddToDoList();
    const newTask5 = {
      id: 'id1234567',
      description: 'task5',
      completed: false,
      index: 4,
    };
    todoList.addTask(newTask5);
    todoList.completeTask(newTask5.id, true);
    expect(todoList.list[4].completed).toBeTruthy();
    expect(todoList.list).toHaveLength(5);
  });
});

describe('Clear Completed Test', () => {
  test('clearCompletedTask', () => {
    const todoList = new AddToDoList();
    todoList.clearCompletedTask();
    expect(todoList.list).toHaveLength(4);
    expect(todoList.list[1].completed).toBeFalsy();
  });
});