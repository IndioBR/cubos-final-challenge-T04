import P from 'prop-types';
import * as Styled from './styles';
import { Charge } from './Charge';
import { CardTitle } from '../CardTitle';
import { CardFields } from '../CardFields';
import { CardButton } from '../CardButton'


export const ChargesCard = ({ charges = [] }) => {
  return (
    <Styled.Container>
      <CardTitle title_name='Cobranças Vencidas' clients_count={charges.length} />
      <CardFields middle='ID da Cob.' />
      {charges.map((charge) =>
        <Charge {...charge} key={charge.charge_id} />
      )}
      <CardButton />
    </Styled.Container>
  )
};

ChargesCard.propTypes = {
  charges: P.arrayOf(
    P.shape({
      client_name: P.string.isRequired,
      charge_value: P.number.isRequired,
      charge_id: P.number.isRequired,
    })
  ),
};
