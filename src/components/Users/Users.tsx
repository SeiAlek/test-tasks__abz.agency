import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as store from '../../store';
import { ButtonLink } from '../Button';
import { UserCard } from '../UserCard/UserCard';
import './Users.scss';

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(store.getVisibleUser);
  const usersTotal = useSelector(store.getUsersTotal);
  const usersVisible = users.length;

  const handleLoadUsers = () => {
    dispatch(store.userActions.increaseVisible());
  };

  return (
    <div className="Users">
      <ul className="Users__List">
        {users.map((user) => (
          <li key={user.id} className="Users__Item">
            <UserCard user={user} />
          </li>
        ))}
      </ul>
      {(usersTotal > usersVisible) && (
        <ButtonLink
          href="users-end"
          text="Show more"
          className="Users__Button"
          handleClick={handleLoadUsers}
        />
      )}
    </div>
  );
};
