import React, { useState } from 'react';

function LedController() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2> Led Controller </h2>{' '}
      <button onClick={handleClick}> {isOn ? 'Turn off' : 'Turn on'} </button>{' '}
      <p> The LED is currently {isOn ? 'on' : 'off'}. </p>{' '}
    </div>
  );
}

export default LedController;
