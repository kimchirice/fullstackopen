import React from 'react';

const Search = ({ search, handleChange }) => {
    return (
        <div>
            Find country: <input value={search} name="search" onChange={handleChange} />
        </div>
    )
}

export default Search;