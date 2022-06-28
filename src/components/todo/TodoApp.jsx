import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    // const temp = [...todos];
    // temp.unshift(newTodo);

    setTitle(" ");
    setTodos([...todos, newTodo]);
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todoInput"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create Todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
