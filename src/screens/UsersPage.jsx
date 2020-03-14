import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserTypes } from '../store/users/types';
import User from '../components/User';

const UserPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userState.users);

  useEffect(() => {
    dispatch({
      type: UserTypes.USER_REQUEST,
    });
  }, []);

  return (
    <div>
      {userList && userList.length > 0 ? userList.map(user => <User user={user} />) : <div>User not found</div>}
    </div>
  );
};

export default UserPage;
