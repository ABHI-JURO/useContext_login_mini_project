import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {

  const { user } = useContext(UserContext);

  if (!user) return <div className='text-white text-center p-5 text-3xl'>Please login</div>

  return <div className='text-white text-center p-3 text-3xl'>Welcome {user.username}</div>

}

export default Profile;