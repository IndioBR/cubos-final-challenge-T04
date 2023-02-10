import P from 'prop-types';
import { Base } from '../../Base';
import * as Styled from './styles';
import { ClientsContainer } from '../../../components/ClientsContainer'
import { useState } from 'react';

export const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  return (
    <Styled.Container>
      <Base page='Clientes'>
        <ClientsContainer clients={clients} />
      </Base>
    </Styled.Container>
  );
};
