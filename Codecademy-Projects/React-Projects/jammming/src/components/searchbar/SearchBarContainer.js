import React, { useState } from 'react';
import SearchBarForm from './SearchBarForm';

function SearchBarContainer() {
  const [query, setQuery] = useState('Testing');

  const handleTextChange = ({ target }) => {
    setQuery(target.value)
  }

  return (
    <div>
      <SearchBarForm
        onTextChange={handleTextChange} />
      <p>{query}</p>
    </div>
  );
};

export default SearchBarContainer;