import P from 'prop-types';
import * as Styled from './styles';
import deleteIcon from '../../../assets/delete.svg';
import editIcon from '../../../assets/edit.svg';
import { selector } from './selector';
import { useState } from 'react';
import { useEffect } from 'react';
import {InsertCharges} from '../../Forms/InsertCharges';
import { useContext } from 'react';
import { MyContext } from '../../Contexts';
import { DeleteCharge } from '../../Forms/DeleteCharge';



export const ChargesFields = ({ debtor, id_billing, amount, due_date, description, status }) => {
  const [style, setStyle] = useState({});
  const {insertChargeForm, setInsertChargeForm, deleteChargeForm, setDeleteChargeForm} = useContext(MyContext);

  useEffect(() => {
    if (status) {
      const selected = selector(status);
      selected && setStyle(selected);
    }
  }, [status]);

  const truncate = (value) => {

    if (value.length > 12) {
      return value.slice(0, 12) + '...';
    }
    return value;
  }

  const charge = {
    debtor,
    id_billing,
    amount,
    due_date,
    description,
    status
  }

  return (
    <Styled.Container status_bg={style.background} status_color={style.color}>
      {insertChargeForm && <InsertCharges charge={charge}/>}
      {deleteChargeForm && <DeleteCharge id_billing={id_billing}/>}
      <div className='container'>
        <span>{truncate(debtor.name)}</span>
        <span>{truncate(id_billing)}</span>
        <span>
          {amount.toLocaleString(
            'pt-br', { style: 'currency', currency: 'BRL' }
          )
          }
        </span>
        <span>
          {new Date(due_date).toLocaleDateString()}
        </span>
        <span className='status_field'>{style.name}</span>
        <span>{description}</span>
      </div>
      <div className='icons'>
        <span onClick={() => setInsertChargeForm(true)}>
          <img src={editIcon} alt="Edit" />
          Editar
        </span>
        <span className='delete_icon' onClick={() => setDeleteChargeForm(true)}>
          <img src={deleteIcon} alt="" />
          Excluir
        </span>
      </div>
    </Styled.Container>
  );
};

ChargesFields.propTypes = {
  debtor: P.object.isRequired,
  id_billing: P.string.isRequired,
  amount: P.number.isRequired,
  due_date: P.string.isRequired,
  description: P.string,
  status: P.string.isRequired,
};
