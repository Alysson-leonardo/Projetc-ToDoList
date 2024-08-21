import { useState } from "react";
import "./App.css";
import Itemlist from "./Componentes/Itemlist";
import TodoForm from "./Componentes/Todoform";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar react",
      category: "estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "limpar casa",
      category: "domestico",
      isCompleted: false,
    },
    {
      id: 3,
      text: "banhar",
      category: "higiene",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const listTodos = [...todos];
    const newTodos = listTodos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Lista de tarefas</h1>
        <div className="toDolist">
          {todos.map((todo) => (
            <Itemlist
              text={todo.text}
              category={todo.category}
              key={todo.id}
              id={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
