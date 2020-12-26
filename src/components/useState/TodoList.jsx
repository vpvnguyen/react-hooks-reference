import React, { useState } from "react";

// pass in completeTodo function as a prop
function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    // style - if completed, run a line through, else return empty string
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        {/* takes in index to know which value is completed */}
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  // since this is form submit, preventDefault submit
  const handleSubmit = e => {
    e.preventDefault();

    // if value dont exist, return
    if (!value) return;

    // else, value to todo
    addTodo(value);

    // then set value to empty string to clear out the form
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* set value to update state */}
      {/* e = event; getting value from input */}
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add todo..."
      />
    </form>
  );
}

// hooks allows to use state with function components rather than class
export default function Hooks() {
  // create state - uses 2 variables to HOLD and SET state
  // const [state, setState] = useState([{}]);
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: " Learn about React Life Cycle Components",
      isCompleted: false
    },
    {
      text: "Learn about React Hooks",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    // use spread operator to add every todos in
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // add as prop to Todo function and Todo component
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
