import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value); // Cập nhật trạng thái trong Searchbar
        onSearch(value); // Gửi giá trị lên component cha
    };

    return (
        <form role="search">
            <div className="form-group">
                <input 
                    name="search" 
                    type="text" 
                    className="form-control" 
                    placeholder="Search" 
                    value={searchValue} 
                    onChange={handleChange} 
                />
            </div>
        </form>
    );
};

export default Searchbar;
