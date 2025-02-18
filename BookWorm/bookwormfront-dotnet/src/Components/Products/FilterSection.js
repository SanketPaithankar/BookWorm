import React from 'react';

const FilterSection = ({ setLanguageDesc, setproductType, setGenreDesc }) => {
    return (
        <div className="filter-section">
            <select onChange={(e) => setLanguageDesc(e.target.value)}>
                <option value="">Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="French">French</option>
                <option value="Marathi">Marathi</option>
            </select>
            <select onChange={(e) => setproductType(e.target.value)}>
                <option value="">Type</option>
                <option value="eBook">E-Books</option>
                <option value="eComic">E-Comics</option>
                <option value="AudioBook">Audio Books</option>
                <option value="Videos">Videos</option>
            </select>
            <select onChange={(e) => setGenreDesc(e.target.value)}>
                <option value="">Genre</option>
                <option value="action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
            </select>
        </div>
    );
};

export default FilterSection;
