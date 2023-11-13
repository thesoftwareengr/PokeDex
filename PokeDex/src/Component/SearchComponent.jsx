import React, { useState } from 'react';


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(); // Your list of data

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    // Filter the data based on the search query
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Use or display the filteredData as needed
    console.log(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter PokeDex Number..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchComponent;