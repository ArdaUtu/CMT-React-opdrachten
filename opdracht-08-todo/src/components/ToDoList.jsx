import ToDo from './ToDo'

const ToDoList = ({ name, list }) => {
    return (
        <div >
            {list.map((lijstje) => (
                <ToDo name={name} list={lijstje} />
            ))}

        </div>
    );
}

export default ToDoList;