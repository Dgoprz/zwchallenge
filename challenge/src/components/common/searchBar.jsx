import React, { useState } from 'react';
import Lens from '../../assets/img/icons/lens.svg'; 
import { Flex } from './flex';

const SearchBar = ({ onSearch, }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() || searchTerm === "") {
            onSearch(searchTerm);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Flex className="search-bar" justifyContent="center" alignItems="center">
            <img
                src={Lens}
                alt="Search"
                className="search-icon"
                onClick={handleSearch}
            />
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="SEARCH A CHARACTER..."
                className="search-input"
            />
        </Flex>
    );
};

export default SearchBar;
