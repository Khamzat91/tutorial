import React from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const getUsers = async () => {
    // try {
    //   const response = await fetch('https://613a6e0e1fcce10017e78ec4.mockapi.io/users')
    //   if (!response.ok) {
    //     Error('произошла ошибка!')
    //   }
    //   const result = await response.json()
    //   setUsers(result)
    // } catch (e) {
    //   console.error()
    // }
    const response = await axios.get('https://613a6e0e1fcce10017e78ec4.mockapi.io/users')
    setUsers(response.data)
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'name') {
      setName(e.target.value)
    }
  }

  const handleClick = async () => {
    const data = {email, name}
    // const response = await fetch('https://613a6e0e1fcce10017e78ec4.mockapi.io/users', {
    //
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // const result = await response.json()
    // setUsers(result)
    await axios.post('https://613a6e0e1fcce10017e78ec4.mockapi.io/users', data)
  }


  return (
    <div>
      <ul>
        {
          users && users.length && users?.map((obj) => <li key={obj.name}>{obj.name}</li>)
        }
      </ul>
      <button onClick={getUsers}>Показать пользователей</button>
      <br/>
      <br/>
      <hr/>
      <br/>
      <h4>Создать пользователя</h4>

      <div>
        <input onChange={handleChange} value={email} name="email" type="text" placeholder="Email"/>
        <input onChange={handleChange} value={name} name="name" type="text" placeholder="Имя"/>
        <button onClick={handleClick}>Отправить</button>
      </div>

    </div>
  );
};

export default App;