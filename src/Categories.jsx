import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Help from "./Help";

// [ { title: 'Elso', todos: [...] }, { title: 'Masodik', todos: [...] } ]

function Categories() {
  const [categories, setCategories] = useState([
    { title: "Homework", todos: [{ text: "Porszivozas" }, { text: "Furcsi" }] }, // category 0
    { title: "Codecool", todos: [{ text: "Si tasks" }, { text: "Workshop" }] }, // category 1
  ]);

  function addNewCategory(title) {
    // 1. create a new array
    // 2. Copy the old elements from the previous one
    // 3. push the new element

    // best practice
    setCategories([...categories, { title: title, todos: [] }]);

    // -------
    // const next = Array.from(categories);
    // next.push({ title: title, todos: [] });
    // setCategories(next);
    // -------

    // -------
    // const clone = structuredClone(categories);
    // clone.push({ title: title, todos: [] });
    // setCategories(clone);
    // -------

    // State is storing the actual value

    // I. call the set state functions
    // II. It has to differ from the actual value

    // Comparing: actual === newState
  }

  function addNewTodoItem(text, categoryIndex) {
    const clone = structuredClone(categories);
    clone[categoryIndex].todos.push({ text: text });
    setCategories(clone);

    // shallow copy
    /*setCategories(
      categories.map((category, index) => {
        if (index !== categoryIndex) {
          return category;
        }
        return {
          ...category,
          todos: [...category.todos, { text: text }],
        };
      })
    );*/
  }

  return (
    <div className="categories">
      <div>
        {categories.map((category, index) => {
          return (
            <TodoList
              title={category.title}
              todos={category.todos}
              onAddTodo={(text) => addNewTodoItem(text, index)}
              key={index}
            />
          );
        })}
      </div>
      <hr />
      <TodoInput
        onAddNew={addNewCategory}
        buttonText="Add new Category"
        label="Category Title"
      />
      <Help text="With this input, you can create a new category" />
    </div>
  );
}

export default Categories;
