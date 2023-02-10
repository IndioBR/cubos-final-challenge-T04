import P from 'prop-types';
import * as Styled from './styles';
import { Charge } from './Charge';
import { CardTitle } from '../CardTitle';
import { CardFields } from '../CardFields';
import { CardButton } from '../CardButton'


export const ChargesCard = ({ charges = [], name }) => {
  return (
    <Styled.Container>
      <CardTitle title_name={name} clients_count={charges.length} />
      <CardFields middle='ID da Cob.' />
      <div className='card_container'>
        {charges.map((charge) =>
          <Charge {...charge} key={charge.charge_id} />
        )}
      </div>
      <CardButton />
    </Styled.Container>
  )
};

ChargesCard.propTypes = {
  name: P.string.isRequired,
  charges: P.arrayOf(
    P.shape({
      debtor: P.string.isRequired,
      amount: P.number.isRequired,
      id_billing: P.number.isRequired,
    })
  ),
};
