import P from 'prop-types';
import * as Styled from './styles';
import alert from '../../../assets/triangle-warning.svg'
import { useContext } from 'react';
import { MyContext } from '../../Contexts';

export const DeleteCharge = ({ id_billing }) => {
  const {setDeleteChargeForm} = useContext(MyContext);
  return (
    <Styled.Modal>
      <Styled.Container>
        <img src={alert} alt='alert'/>
        <span>Tem certeza que quer excluir essa cobrança</span>
        <div className='btn_container'>
          <div className="close_delete_modal" onClick={() => setDeleteChargeForm(false)}>
            <span>Não</span>
          </div>
          <div className="delete_charge" onClick={() => console.log(id_billing)}>
            <span>Sim</span>
          </div>
        </div>
      </Styled.Container>
    </Styled.Modal>
  );
};

DeleteCharge.propTypes = {
  id_billing: P.string.isRequired,
};
