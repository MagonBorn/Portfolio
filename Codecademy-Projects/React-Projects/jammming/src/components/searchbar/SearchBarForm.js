import React from 'react';

function SearchBarForm({onTextChange }) {
  return (
    <form>
      <label for='search'>Search: </label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        onChange={onTextChange} />
    </form>
  )
}

export default SearchBarForm;