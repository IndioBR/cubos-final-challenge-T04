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
        {clients && clients.map(client =>
          <ClientFields {...client} key={client.id} />
        )}
      </div>
    </Styled.Container>
  );
};

ClientsContainer.propTypes = {
  clients: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      email: P.string.isRequired,
      cpf: P.string.isRequired,
      phone: P.string,
      status: P.string.isRequired,
    })
  ).isRequired,
};
