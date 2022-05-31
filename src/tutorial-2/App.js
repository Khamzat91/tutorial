import React from 'react';

const App = () => {
  let email = null;
  let password = null;

  const handleChange = (e) => {
    if (e.target.name === "email"){
      email = e.target.value
    } else {
      password = e.target.value
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password){
      console.log({email, password})
      e.target.reset()
      email = null;
      password = null;
    } else {
      if (!email){
        alert("заполните поле E-mail")
      } else {
        alert("заполните поле Пороль")
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: "block", textAlign: "center"}}>
        <input name="email" onChange={handleChange} type="email" placeholder="E-mail"/>
        <input name="password" onChange={handleChange} type="password" placeholder="Пароль"/>
        <button type={"submit"}><b>Войти</b></button>
      </form>
    </div>
  );
};

export default App;