import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import { Button } from '../../Button';

export const LoginForm = () => {
  return (
    <Styled.Container>
      <Input label='E-mail' ph='Digite seu E-mail' required />
      <Input label='Senha' ph='Digite sua Senha' fgtPassword={true} required />
      <Button type='submit'>Entrar</Button>
      <p>Ainda não possui uma conta? <a href="">Cadastre-se</a></p>
    </Styled.Container>
  );
};
