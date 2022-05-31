import React from 'react';
import {Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://mentor.archakov.im/api/mock/login?email=${email}&password=${password}`)
  if (response.ok){
    const {token} = await response.json()
    window.localStorage.setItem('token', token)
    navigate('/profile')

  }else{
    alert('неверная почта или пароль')
  }

  }

  return (
    <div className="form-group">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={handleChange} name="email" type="email"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control value={password} onChange={handleChange} name="password" type="password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default Login;