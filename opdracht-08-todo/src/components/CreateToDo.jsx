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
        <form action="" className="flex flex-col">
            <textarea className="bg-white h-10 flex flex-col" value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
            <button className="bg-white text-black px-4 py-2 my-2 rounde" onClick={submitMessageHandler}>Toevoegen</button>
        </form>
    );
}

export default CreateToDo;