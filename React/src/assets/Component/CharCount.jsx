// 1. Character Count Code
import React, { useState } from 'react';
function CharacterCount() {
  const [text, setText] = useState('');
  return (
    <div>
      <h3>Character Count</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Characters: {text.length}</p>
    </div>
  );
}
export default CharacterCount;
