import P from 'prop-types';
import * as Styled from './styles';
import addCharge from '../../../assets/add-charge.svg';
import { useEffect, useState } from 'react';
import { colorSelector } from './selector';
import { InsertCharges } from '../../Forms/InsertCharges';
import { useContext } from 'react';
import { MyContext } from '../../Contexts';
import { Link } from 'react-router-dom';

export const ClientFields = ({ name, email, cpf, phone, status, id }) => {
  const [statusStyle, setStatusStyle] = useState({});
  const {insertChargeForm, setInsertChargeForm} = useContext(MyContext);

  useEffect(() => {
    const style = colorSelector(status);

    style && setStatusStyle(style)
  }, [status]);

  const truncate = (value) => {

    if (value.length > 20) {
      return value.slice(0, 20) + '...';
    }
    return value;
  }

  return (
    <Styled.Container statBg={statusStyle.backgroundColor} statColor={statusStyle.color}>
      {insertChargeForm && <InsertCharges debtor={name} />}
      <Link to={`/clients/client?debtor_id=${id}`}>{truncate(name)}</Link>
      <span>{cpf}</span>
      <span>{email}</span>
      <span>
        {phone ? phone : 'Insira um número de Telefone'}
      </span>
      <span className='status_field'>{statusStyle.status}</span>
      <span className='charge_img' onClick={() => setInsertChargeForm(true)}>
        <img src={addCharge} alt="" />
        Cobrança
      </span>
    </Styled.Container>
  );
};

ClientFields.propTypes = {
  name: P.string.isRequired,
  email: P.string.isRequired,
  cpf: P.string.isRequired,
  phone: P.string,
  status: P.string.isRequired,
  id: P.number.isRequired,

};
