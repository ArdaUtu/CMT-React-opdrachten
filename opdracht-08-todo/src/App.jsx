import { useState } from "react";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";   
function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);
  let name = "Arda";
  return (
    <>
      <section className="flex flex-col items-center mt-30">
        <h1 className="my-4 text-5xl text-white">{name} To Do List:</h1>
        <CreateToDo
          textInput={textInput} 
          setMessage={setMessage}
          setTextInput={setTextInput}
          message={message}
        />
      
        <ToDoList name={name} list={message} />
      </section>
    </>
  );
}

export default App;