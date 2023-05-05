import { useState } from "react";

function TodoInput(props) {
  const [value, setValue] = useState("");

  function handleButtonClick() {
    props.onAddNew(value);
    setValue('');
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder={props.label}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>{props.buttonText}</button>
    </div>
  );
}

export default TodoInput;
