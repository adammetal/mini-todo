import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

import "./TodoList.css";

//  [{ text: 'valami' }, { text: 'valami' }, { text: 'valami' }]

function TodoList(props) {
  //  [{ text: 'valami' }, { text: 'valami' }, { text: 'valami' }]
  const todos = props.todos;
  // ------> [<TodoItem text={?.text}/>, <TodoItem />]
  
  const todoJSXElements = [];

  for (let i = 0; i < todos.length; i++) {
    todoJSXElements.push(<TodoItem key={i} text={todos[i].text} />)
  }

  /*
  todoJSXElements = todos.map((todo, index) => <TodoItem key={index} text={todo.text} />)
  */

  return (
    <div className="todo-list">
      <header>
        <h2>{props.title.toUpperCase()}</h2>
      </header>

      <TodoInput onAddNew={props.onAddTodo} label="Todo text" buttonText="Add todo" />

      <div>
        {todoJSXElements}
      </div>
    </div>
  );
}

export default TodoList;
