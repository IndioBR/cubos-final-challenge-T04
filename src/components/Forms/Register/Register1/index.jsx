import P from 'prop-types';
import { Button } from '../../../Button';
import { Input } from '../../Input';
import * as Styled from './styles';

export const Register1 = () => {
  return (
    <Styled.Container>
      <Input label='Nome' ph='Digite seu Nome' required type='text' />
      <Input label='E-mail' ph='Digite seu E-mail' required type='email' />
      <Button type='submit'>Entrar</Button>
      <p>Já possui uma conta? Faça o <a href="">Login</a></p>
    </Styled.Container>
  );
};
