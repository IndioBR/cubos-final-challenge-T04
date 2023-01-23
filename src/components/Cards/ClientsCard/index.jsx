import P from 'prop-types';
import * as Styled from './styles';
import { CardTitle } from '../CardTitle';
import { CardFields } from '../CardFields';
import { Charge } from './Charge';
import { CardButton } from '../CardButton'

export const ClientsCard = ({ title, charges = [] }) => {
  return (
    <Styled.Container>
      <CardTitle title_name={title} clients_count={charges.length} />
      <CardFields middle='Data de Venc.' />
      {charges.map((charge) =>
        <Charge {...charge} key={charge.id} />
      )}
      <CardButton />
    </Styled.Container>
  );
};

ClientsCard.propTypes = {
  title: P.string.isRequired,
  count: P.number.isRequired,
  charges: P.arrayOf(
    P.shape({
      client_name: P.string.isRequired,
      charge_value: P.number.isRequired,
      charge_id: P.number.isRequired,
      charge_date: P.node.isRequired
    })
  ),
};
