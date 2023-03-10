import P from 'prop-types';
import * as Styled from './styles';
import clients from '../../../../assets/clients.svg';
import edit from '../../../../assets/edit_client.svg';
import { ChargesContainer } from "../../../../components/ChargesContainer";

export const ClientPage = ({ client }) => {
  return (
    <Styled.Container>
      <div className='client_title'>
        <img src={clients}  alt='Client'/>
        <h1>{client.name}</h1>
      </div>
      <div className='client_container'>
        <div className='client_container_title'>
          <h3>Dados do Cliente</h3>
          <div className='client_edit'>
            <img src={edit} alt='Edit'/>
            <span>Editar Cliente</span>
          </div>
        </div>
        <div className="client_fields">
          <div className="client_ids">
            <div className='client_field'>
              <h6>E-mail</h6>
              <span>{client.email}</span>
            </div>
            <div className='client_field'>
              <h6>Telefone</h6>
              <span>{client.phone}</span>
            </div>
            <div className='client_field'>
              <h6>CPF</h6>
              <span>{client.cpf}</span>
            </div>
          </div>
          <div className="client_address">
            <div className='client_field'>
              <h6>Endereço</h6>
              <span>{client?.address}</span>
            </div>
            <div className='client_field'>
              <h6>Bairro</h6>
              <span>{client?.neighborhood}</span>
            </div>
            <div className='client_field'>
              <h6>Complemento</h6>
              <span>{client?.complement}</span>
            </div>
            <div className='client_field'>
              <h6>CEP</h6>
              <span>{client?.cep}</span>
            </div>
            <div className='client_field'>
              <h6>Cidade</h6>
              <span>{client?.city}</span>
            </div>
            <div className='client_field'>
              <h6>UF</h6>
              <span>{client?.state}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="client_charges_container">
        <div className='client_container_title'>
          <h3>Cobranças do Cliente</h3>
          <div className='new_charge'>
            <span>+ Nova cobrança</span>
          </div>
        </div>
        <ChargesContainer />
      </div>
    </Styled.Container>
  );
};

ClientPage.propTypes = {
  client: P.object.isRequired,
};
