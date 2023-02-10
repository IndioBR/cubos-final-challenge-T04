import P from 'prop-types';
import * as Styled from './styles';
import { ClientTitles } from './Titles';
import { ClientFields } from './Fields';
import { CardButton } from '../Cards/CardButton';


export const ClientsContainer = ({ clients }) => {
  return (
    <Styled.Container>
      <ClientTitles />
      <div className='clients_container'>
        {clients.map(client =>
          <ClientFields {...client} key={client.id} />
        )}
      </div>
      <div className='btn'>
        <CardButton />
      </div>
    </Styled.Container>
  );
};

ClientsContainer.propTypes = {
  clients: P.arrayOf(
    P.shape({
      client_name: P.string.isRequired,
      client_email: P.string.isRequired,
      client_cpf: P.string.isRequired,
      client_phone: P.string,
      client_status: P.string.isRequired,
    })
  ).isRequired,
};
