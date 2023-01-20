import P from 'prop-types';
import * as Styled from './styles';

export const AmountCard = ({ amount = 0, name = '', src = '', color = '' }) => {
  return (
    <Styled.Container color={color}>
      <Styled.CardImage src={src} />
      <div>
        <Styled.CardName>
          {name}
        </Styled.CardName>
        <Styled.Value>
          {amount.toLocaleString(
            'pt-br', { style: 'currency', currency: 'BRL' }
          )
          }
        </Styled.Value>
      </div>
    </Styled.Container>
  );
};

AmountCard.propTypes = {
  amount: P.number.isRequired,
  name: P.string.isRequired,
  src: P.string.isRequired,
  color: P.string.isRequired
};
