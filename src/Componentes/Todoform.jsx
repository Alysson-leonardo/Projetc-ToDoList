import { useState } from "react";
import styles from "./Todoform.module.css";
function TodoForm({ addTodo }) {
  const [value, setValue] = useState();
  const [category, setCategory] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <div className={styles.todoform}>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">seleciona uma categoria</option>
          <option value="trabalho ">trabalho</option>
          <option value="pessoal">pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">criar tarefa</button>
      </form>
    </div>
  );
}
export default TodoForm;
