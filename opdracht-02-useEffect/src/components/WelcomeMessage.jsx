import {useEffect, useState} from 'react';

function welcomeMessage(){
    const [message, setMessage] = useState('');

    useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime
  let newMessage = '';
 
    if (hours < 12) {
      newMessage = 'Goedemorgen!';
    } else if (hours < 18) {
      newMessage = 'Goedemiddag!';
    } else {
      newMessage = 'Goedenavond!';
    }
 
    setMessage(newMessage);
  }, []);
 
  return (
    <section className="WelcomeMessage">
      <p>{message}</p>
    </section>
      );
}

export default welcomeMessage