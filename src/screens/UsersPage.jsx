import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../components/SearchBar/Search';
import { UserTypes } from '../store/users/types';
import User from '../components/User/User';
import { UserCard, SearchCard } from './UserPage.style';

const UserPage = () => {
  const [queryparam, setQueryParam] = useState();
  const dispatch = useDispatch();
  const { users, userFiltered, userRequest, userFailure } = useSelector(
    state => state.userState,
  );

  useEffect(() => {
    dispatch({
      type: UserTypes.USER_REQUEST,
    });
  }, []);

  const searchValue = searchQuery => {
    setQueryParam(searchQuery);
    dispatch({
      type: UserTypes.USER_FILTER,
      payload: searchQuery,
    });
  };

  const renderNoUser = () => {
    if (userFailure) return <div>Problem to found users</div>;
    else if (userRequest) return <div>Searching...</div>;
  };

  const renderResult = () => {
    if (queryparam) {
      return (
        <UserCard>
          {userFiltered && userFiltered.length > 0
            ? userFiltered.map((user, idx) => <User key={idx} user={user} />)
            : renderNoUser()}
        </UserCard>
      );
    }

    return (
      <UserCard>
        {users && users.length > 0
          ? users.map((user, idx) => <User key={idx} user={user} />)
          : renderNoUser()}
      </UserCard>
    );
  };

  return (
    <>
      <SearchCard>
        <Search searchRequest={searchValue} />
      </SearchCard>
      {renderResult()}
    </>
  );
};

export default UserPage;
