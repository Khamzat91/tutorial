import React from 'react';
import './index.css';
import avatar from './img/avatar.png';
import axios from "axios";

const App = () => {
  const [users, setUsers] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

  const getUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${name}`)
      setError(false)
      setUsers(response.data)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setError(true)
      setLoading(false)
      setName(null)
    }
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input onChange={handleChange} value={name} name="name" type="text" className="app-input" placeholder="Укажите GitHub-аккаунт"/>
          <button disabled={loading} onClick={getUsers} className="app-form_btn">Найти</button>
        </form>
        {loading && <h3><b>"Загрузка..."</b></h3>}
        {users && <div className="app-user">
          <div className="app-user_info">
            <div className="app-user_image">
              <img src={users.avatar_url} alt=""/>
            </div>
            <div className="app-user_data">
              <h1 className="app-user_name">
                {users.name}
                <span>{users.login}</span>
              </h1>
              <p className="app-user_about">
                {users.bio}
              </p>
            </div>
          </div>
          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              {users.public_repos}
              <br/>
              <span>124</span>
            </li>
            <li className="app-user_stats-item">
              {users.followers}
              <br/>
              <span>1.2к</span>
            </li>
            <li className="app-user_stats-item">
              {users.public_repos}
              <br/>
              <span>506</span>
            </li>
          </ul>
          <ul className="app-user_location">
            <li className="app-user_location-item">{users.location}</li>
            <li className="app-user_location-item">
              <a href="http://archakov.im">{users.url}</a>
            </li>
          </ul>
        </div>}
        {error && <h4>user not found</h4>}
      </div>
    </div>
  );
};

export default App;