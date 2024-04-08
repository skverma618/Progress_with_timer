import React, { useState, useEffect } from 'react';

const TimerWithProgress = () => {
  const [secondsLeft, setSecondsLeft] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prevSeconds => Math.max(0, prevSeconds - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progress = ((100 - (secondsLeft / 100) * 100) || 0).toFixed(2);

  return (
    <div>
      <div>Time Left: {secondsLeft} seconds</div>
      <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '5px', marginTop: '10px' }}>
        <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'blue', borderRadius: '5px' }}></div>
      </div>
    </div>
  );
};

export default TimerWithProgress;
