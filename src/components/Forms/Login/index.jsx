import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <Styled.Container>
      <Input label='E-mail' ph='Digite seu E-mail' required />
      <Input label='Senha' ph='Digite sua Senha' fgtPassword={true} required />
      <Button type='submit'>Entrar</Button>
      <p>Ainda não possui uma conta? <a href="/register/step-1">Cadastre-se</a></p>
    </Styled.Container>
  );
};
