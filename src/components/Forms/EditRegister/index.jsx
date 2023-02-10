import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import { Button } from '../../Button'
import { useContext } from 'react';
import { MyContext } from '../../Contexts';
import close from '../../../assets/x.svg';

export const EditRegister = ({ children }) => {
  const { user, setEditUserModal } = useContext(MyContext);

  return (
    <Styled.Container>
      <form id='edit-form'>
        <h1>Edite seu Cadastro</h1>
        <img src={close} alt="close" onClick={() => setEditUserModal(false)} />
        <Input label='Nome' type='text' required ph='Digite seu nome' autoComplete={user.name} />
        <Input label='E-mail' type='email' required ph='Digite seu e-mail' autoComplete={user.email} />
        <div className='asides'>
          <Input label='CPF' type='number' ph='Digite seu CPF' min={11} autoComplete={user.cpf && user.cpf} />
          <Input label='Telefone' type='number' ph='Digite seu Telefone' autoComplete={user.phone && user.phone} />
        </div>
        <Input label='Nova Senha' required min={8} passwordImg />
        <Input label='Repita a Senha' required min={8} passwordImg />
        <div className='btn'>
          <Button type='submit'>
            Aplicar
          </Button>
        </div>
      </form>
    </Styled.Container>
  );
};

EditRegister.propTypes = {
  children: P.node.isRequired,
};
