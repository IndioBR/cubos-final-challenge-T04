import P from 'prop-types';
import * as Styled from './styles';

export const CardFields = ({ middle }) => {
  return (
    <Styled.Container>
      <Styled.Field>Cliente</Styled.Field>
      <Styled.Field>{middle}</Styled.Field>
      <Styled.Field className='value_field'>Valor</Styled.Field>
    </Styled.Container>
  );
};

CardFields.propTypes = {
  middle: P.oneOf(['ID da Cob.', 'Data de Venc.'])
}
