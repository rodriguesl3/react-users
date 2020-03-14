import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { UserSearch } from './Search.style';

const SearchBar = ({ searchRequest }) => {
  const [userQuery, setUserQuery] = useState('');
  const onChange = e => {
    const value = e.target.value;
    setUserQuery(value);
    searchRequest(value);
  };

  return (
    <UserSearch>
      <input
        type="text"
        name="search"
        placeholder="search a user"
        className="user-search"
        onChange={onChange}
        value={userQuery}
      />
    </UserSearch>
  );
};

SearchBar.prototype = {
  searchRequest: PropTypes.func.isRequired,
};

export default SearchBar;
