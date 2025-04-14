import React, { useState } from 'react';

function ThemeChange() {
  const [Dark, setDark] = useState(false);

  const styles = {
    backgroundColor: Dark ? 'black' : 'white', // Fixed the issue here
    color: Dark ? 'white' : 'black',
    height: '100vh',
    width: '100vw',
  };

  return (
    <div style={styles}>
      <h1>{Dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDark(!Dark)}>
        Switch to {Dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeChange;
