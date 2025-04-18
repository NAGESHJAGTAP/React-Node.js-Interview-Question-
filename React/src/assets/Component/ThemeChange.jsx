// import React, { useState } from 'react';

// function ThemeChange() {
//   const [Dark, setDark] = useState(false);

//   const styles = {
//     backgroundColor: Dark ? 'black' : 'white', 
//     color: Dark ? 'white' : 'black',
//     height: '100vh',
//     width: '100vw',
//   };

//   return (
//     <div style={styles}>
//       <h1>{Dark ? 'Dark Mode' : 'Light Mode'}</h1>
//       <button onClick={() => setDark(!Dark)}>
//         Switch to {Dark ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </div>
//   );
// }

// export default ThemeChange;






// 2. Minimal Toggle Without Button 

import React, { useState } from 'react';
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}
export default ThemeToggle;


