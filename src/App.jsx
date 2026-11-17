import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/usersSlice';

const App = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(`loading: ${loading}`, users);

  return (
    <div>App</div>
  );
};

export default App;