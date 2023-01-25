import P from 'prop-types';
import * as Styled from './styles';
import complete from '../../../../assets/register_complete.svg';
import { Button } from '../../../Button'

export const RegisterComplete = () => {
  return (
    <Styled.Container>
      <Styled.Success>
        <img src={complete} alt='register complete' />
        <p>Cadastro realizado com sucesso!</p>
      </Styled.Success>
      <Button type='button'>
        Ir para Login
      </Button>
    </Styled.Container>
  );
};

RegisterComplete.propTypes = {
  children: P.node.isRequired,
};
