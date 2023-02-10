import P from 'prop-types';
import * as Styled from './styles';

export const Charge = ({ debtor = '', amount = 0, id_billing = '' }) => {
  const valueFormat = (value) => {
    const string = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    if (string.length > 10) {
      return string.slice(0, 10) + '...'

    }
    return string;
  }
  const truncate = (value) => {

    if (value.length > 12) {
      return value.slice(0, 12) + '...';
    }
    return value;
  }

  return (
    <Styled.Container>
      <Styled.Info className='cli_field'>{debtor}</Styled.Info>
      <Styled.Info>{id_billing}</Styled.Info>
      <Styled.Info className='value_field'>{valueFormat(amount)}</Styled.Info>
    </Styled.Container>
  );
};

Charge.propTypes = {
  debtor: P.string.isRequired,
  amount: P.number.isRequired,
  id_billing: P.number.isRequired,
};
