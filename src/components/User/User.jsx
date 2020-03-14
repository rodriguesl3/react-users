import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';

import { UserCard, Divider } from './User.style';

const User = ({ user }) => {
  const [showCatchPhrase, setShowCatchPhrase] = useState(false);

  return user ? (
    <UserCard>
      <h2>General Information</h2>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <Divider />
      <h2>Address</h2>
      <div>Street: {`${user.address.street}, ${user.address.suite || ''}`}</div>
      <div>City: {user.address.city}</div>
      <div>Zip Code: {user.address.zipcode || ''}</div>
      <Divider />
      <h2>WebSite</h2>
      <div>{user.website}</div>
      <Divider />

      <div
        className="company-section"
        onMouseEnter={() => setShowCatchPhrase(true)}
        onMouseLeave={() => setShowCatchPhrase(false)}
      >
        <h2>Company</h2>
        <div>{user.company.name}</div>
        <Divider />
        <small>View More...</small>
        <FaArrowDown />
        {showCatchPhrase && user.company.catchPhrase}
      </div>
    </UserCard>
  ) : (
    <div>User Not Found</div>
  );
};

User.prototype = {
  user: PropTypes.object.isRequired,
};

export default User;
