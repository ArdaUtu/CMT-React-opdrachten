import ToDo from './ToDo'

const ToDoList = ({ name, list }) => {
    return (
        <div className="flex justify-center flex-col items-center">
            {list.map((lijstje) => (
                <ToDo name={name} list={lijstje} />
            ))}

        </div>
    );
}

export default ToDoList;