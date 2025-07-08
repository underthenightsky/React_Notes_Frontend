import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            className=" mb-4 p-2 border col-span-2  -col-end-1 row-span-1  max-h-10 outline-0  justify-end"
            placeholder="Search by title or tag"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;
