import P from 'prop-types';
import * as Styled from './styles';
import { LoginForm } from '../../../components/Forms/Login';
import loginSide from '../../../assets/images/login_side.png';

export const LoginPage = () => {
  return (
    <Styled.Container>
      <Styled.Left>
        <img src={loginSide} alt="" />
        <p>Gerencie todos os pagamentos da sua empresa em um só lugar.</p>
      </Styled.Left>
      <Styled.Right>
        <h1>Faça Seu Login!</h1>
        <LoginForm />
      </Styled.Right>
    </Styled.Container>
  );
};
