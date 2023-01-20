import P from 'prop-types';
import * as Styled from './styles';

export const Charge = ({ client_name = '', charge_value = '', charge_id = '' }) => {
  const valueFormat = (value) => {
    const string = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    if (string.length > 10) {
      return string.slice(0, 10) + '...'

    }
    return string;
  }

  return (
    <Styled.Container>
      <Styled.Info>{client_name}</Styled.Info>
      <Styled.Info>{charge_id}</Styled.Info>
      <Styled.Info>{valueFormat(charge_value)}</Styled.Info>
    </Styled.Container>
  );
};

Charge.propTypes = {
  client_name: P.string.isRequired,
  charge_value: P.number.isRequired,
  charge_id: P.number.isRequired,
};
