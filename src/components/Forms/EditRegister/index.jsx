import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import { Button } from '../../Button'
import { useContext } from 'react';
import { MyContext } from '../../Contexts';
import close from '../../../assets/x.svg';
import { useState } from 'react';

export const EditRegister = () => {
  const { user, setEditUserModal } = useContext(MyContext);
  const [equal, setEqual] = useState(true);

  const token = localStorage.getItem('token');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[4].value !== e.target[5].value) return setEqual(false);
    if (e.target[4].value !== e.target[5].value) setEqual(true);

    const data = {
      "_method": "PATCH",
      "name": e.target[0].value,
      "email": e.target[1].value,
      "password": e.target[4].value,
      "cpf": e.target[2].value,
      "phone": e.target[3].value,
    };
    console.log(JSON.stringify(data));
    try {
      fetch(`http://localhost:8000/api/users/${user.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then(p => p.json()).then(r => console.log(r)).catch(err => {
        throw new Error(err);
      }).finally(() => setEditUserModal(false));
    } catch (error) {
      console.error(error.msg);
    }
  }


  return (
    <Styled.Container>
      <form id='edit-form' onSubmit={handleSubmit}>
        <h1>Edite seu Cadastro</h1>
        <img src={close} alt="close" onClick={() => setEditUserModal(false)} />
        <Input label='Nome' type='text' required ph='Digite seu nome' autoComplete={user.name} />
        <Input label='E-mail' type='email' required ph='Digite seu e-mail' autoComplete={user.email} />
        <div className='asides'>
          <Input label='CPF' type='number' ph='Digite seu CPF' min={11} autoComplete={user.cpf && user.cpf} />
          <Input label='Telefone' type='number' ph='Digite seu Telefone' autoComplete={user.phone && user.phone} />
        </div>
        <Input label='Nova Senha' ph='Digite a Nova Senha' type='password' required min={8} passwordImg />
        <Input label='Repita a Senha' ph='Repita a Nova Senha' type='password' required min={8} passwordImg equal={equal} />
        <div className='btn'>
          <Button type='submit'>
            Aplicar
          </Button>
        </div>
      </form>
    </Styled.Container>
  );
};
