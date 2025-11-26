const CreateToDo = ({textInput, setMessage, setTextInput, message}) => {

    const userInputHandler = (e) => {
    setTextInput(e.target.value)
    }

    const submitMessageHandler = (e) => {
    e.preventDefault();

    setMessage([...message, textInput])
    setTextInput('')
    }

    return (
        <form action="">
            <textarea value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
            <button onClick={submitMessageHandler}>Toevoegen</button>
            <h1>To do list:</h1>
        </form>
    );
}

export default CreateToDo;