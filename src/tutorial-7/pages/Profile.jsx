import React from 'react';
import {Navigate} from 'react-router-dom';

const Profile = () => {
  if (!window.localStorage.getItem('token')){
    return  <Navigate to='/'/>
  }
  return <h1>Эта закрытый профиль юзера</h1>

};

export default Profile;