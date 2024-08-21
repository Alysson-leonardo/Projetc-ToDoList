import styles from "./Itemlist.module.css";
function Itemlist({
  id,
  text,
  category,
  isCompleted,
  removeTodo,
  completeTodo,
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.item}
        style={{ textDecoration: isCompleted ? "line-through" : "" }}
      >
        <p>{text}</p>
        <p className="category">({category})</p>
      </div>
      <div className={styles.button}>
        <button className={styles.complete} onClick={() => completeTodo(id)}>
          Completar
        </button>
        <button className={styles.remove} onClick={() => removeTodo(id)}>
          X
        </button>
      </div>
    </div>
  );
}
export default Itemlist;
