import React, { useSyncExternalStore } from "react";

let nextId = 0;
let todos = [{ id: nextId++, text: "Next Task #1" }];
let listeners = [];

const todoStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Next Task #" + nextId }];
    //todos.push({ id: nextId++, text: "Next Task #" + nextId });
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};
function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export default function UseSyncExternalStoreToDo() {
  let counter = 0;
  const todoList = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );
  return (
    <div>
      <h3>UseSyncExternalStore ToDo Component</h3>
      <button onClick={() => todoStore.addTodo()}>Add Task</button>
      <hr />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => {
        counter++;
        console.log("counter", counter);
      
      }}>counter++</button>
      <div>Counter: {counter}</div>
    </div>
  );
}
