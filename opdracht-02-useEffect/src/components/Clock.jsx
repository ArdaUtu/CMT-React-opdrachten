import{ useEffect, useState } from 'react';

function Clock() {
const [currentTime, setCurrentTime] = useState(new Date());
  

useEffect(() => {
const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

return () => clearInterval(intervalId);
}, []);


return (
    <section className="clock-list">
      <p>huidige tijd: {currentTime.toLocaleTimeString()}</p>
    </section>
  );
};
export default Clock;
