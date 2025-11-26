import  Message from './Message'

const MessageList = ({name, message}) => {
    return (  
        <div >
            {message.map((Lijstje) => (
                <ToDo name={name} list={Lijstje} />
            ))}

        </div>
    );
};
 
export default MessageList;