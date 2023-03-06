import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../Input';
import clients from '../../../assets/clients.svg';
import close from '../../../assets/x.svg';
import { useState } from 'react';
import { Button } from '../../Button';

export const InsertClient = ({ client = {} }) => {
  const [mode, setMode] = useState(false);
  return (
    <Styled.Container>
      <div className='form_container'>
        <div className='form_top'>
          <div className='form_title'>
            <img src={clients} alt="Clients" />
            <h1>{mode ? 'Editar' : 'Cadastro do'} Cliente</h1>
          </div>
          <img src={close} alt="" />
        </div>
        <form>
          <Input
            label='Nome'
            required
            autoComplete={client && client.name}
            ph='Insira o Nome'
            type='text'
          />
          <Input
            label='E-mail'
            required
            autoComplete={client && client.email}
            ph='Insira o Email'
            type='email'
          />
          <div className='asides_middle'>
            <Input
            label='CPF'
            required
            autoComplete={client?.cpf && client.cpf}
            min={11}
            max={11}
            ph='Insira o CPF'
            type='number'
          />
          <Input
            label='Telefone'
            required
            autoComplete={client && client.phone}
            min={10}
            max={14}
            ph='Insira o Telefone'
            type='number'
          />
          </div>
          <Input
            label='Endereço'
            autoComplete={client?.address && client.address}
            ph='Insira o Endereço'
            type='text'
          />
          <Input
            label='Complemento'
            autoComplete={client?.complement && client.complement}
            ph='Insira o Complemento'
            type='text'
          />
          <div className='asides_bottom'>
            <Input
            label='CEP'
            autoComplete={client?.cep && client.name}
            ph='Insira o CEP'
            type='text'
            />
            <Input
              label='Bairro'
              autoComplete={client?.neighborhood && client.name}
              ph='Insira o Bairro'
              type='text'
            />
            <Input
              label='Cidade'
              autoComplete={client?.city && client.name}
              ph='Insira o Cidade'
              type='text'
            />
            <Input
              label='UF'
              autoComplete={client?.state && client.name}
              ph='Insira o UF'
              type='text'
            />
          </div>
          <div className='bottom_btn'>
            <span>Cancelar</span>
            <Button type='submit'>
              Aplicar
            </Button>
          </div>
        </form>
      </div>
    </Styled.Container>
  );
};

InsertClient.propTypes = {
  client: P.object,

}
