import { useState } from "react";
import './App.css'
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [textInput, setTextInput] = useState('')
  const [message, setMessage] = useState([])

  return (
    <>
      <CreateToDo textInput={textInput} setMessage={setMessage} setTextInput={setTextInput} message={message} />
      <ToDoList list={message} />
    </>
  );
}

export default App;