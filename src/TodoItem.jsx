function TodoItem(props) {
  return (
    <div className="todo-item">
      <span>{props.text}</span>
      <button>Done</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoItem;
