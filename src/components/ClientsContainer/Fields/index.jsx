import P from 'prop-types';
import * as Styled from './styles';
import addCharge from '../../../assets/add-charge.svg';

export const ClientFields = ({ client_name, client_email, client_cpf, client_phone, client_status }) => {
  return (
    <Styled.Container>
      <span>{client_name}</span>
      <span>{client_cpf}</span>
      <span>{client_email}</span>
      <span>
        {client_phone ? client_phone : 'Insira um número de Telefone'}
      </span>
      <span>{client_status}</span>
      <span className='charge_img'>
        <img src={addCharge} alt="" />
        Cobrança
      </span>

    </Styled.Container>
  );
};

ClientFields.propTypes = {
  client_name: P.string.isRequired,
  client_email: P.string.isRequired,
  client_cpf: P.string.isRequired,
  client_phone: P.string,
  client_status: P.string.isRequired,
};
