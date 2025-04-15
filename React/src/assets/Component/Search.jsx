import React, { useState } from 'react';

const LiveSearchFilter = () => {
  const [search, setSearch] = useState('');
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default LiveSearchFilter;
