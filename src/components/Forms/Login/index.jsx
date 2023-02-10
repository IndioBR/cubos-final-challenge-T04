import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../Contexts/index'

export const LoginForm = () => {

  const { setUser } = useContext(MyContext);

  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    try {
      const req = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const promise = await req.json();

      if (req.status !== 200) throw new Error(promise.error);

      const res = await promise;

      localStorage.setItem('token', res.token);
      localStorage.setItem('user_id', res.user.id);
      localStorage.setItem('user_name', res.user.name);
      localStorage.setItem('user_aka', res.user.aka);
      localStorage.setItem('user_email', res.user.email);

      setUser(res.user);
      goTo('/home');

    } catch (error) {
      console.error(error);
    }


  }

  return (
    <Styled.Container onSubmit={loginSubmit}>
      <Input label='E-mail' ph='Digite seu E-mail' type='email' required />
      <Input label='Senha' ph='Digite sua Senha' type='password' fgtPassword={true} required passwordImg />
      <Button type='submit'>Entrar</Button>
      <p>Ainda não possui uma conta? <a href="/register/step-1">Cadastre-se</a></p>
    </Styled.Container>
  );
};
