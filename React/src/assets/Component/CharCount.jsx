// 1. Character Count Code
// import React, { useState } from 'react';
// function CharacterCount() {
//   const [text, setText] = useState('');
//   return (
//     <div>
//       <h3>Character Count</h3>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Characters: {text.length}</p>
//     </div>
//   );
// }
// export default CharacterCount;







// 2. Word Count Code

// import React, { useState } from 'react';

// function WordCount() {
//   const [text, setText] = useState('');
//   const count = text.trim() ? text.trim().split(/\s+/).length : 0;
//   return (
//     <div>
//       <h3>Word Count</h3>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Words: {count}</p>
//     </div>
//   );
// }

// export default WordCount;






// 3. Line Count Code

// import React, { useState } from 'react';
// function LineCount() {
//   const [text, setText] = useState('');
//   const count = text ? text.split('\n').length : 0;
//   return (
//     <div>
//       <h3>Line Count</h3>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Lines: {count}</p>
//     </div>
//   );
// }
// export default LineCount;







// 4 Live Preview Code

import React, { useState } from 'react';
function LivePreview() {
  const [text, setText] = useState('');
  return (
    <div>
      <h3>Live Preview</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
        {text || 'Preview will appear here...'}
      </div>
    </div>
  );
}
export default LivePreview;
