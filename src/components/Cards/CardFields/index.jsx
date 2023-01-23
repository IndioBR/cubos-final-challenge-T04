import P from 'prop-types';
import * as Styled from './styles';

export const CardFields = ({ middle }) => {
  return (
    <Styled.Container>
      <Styled.Field>Nome</Styled.Field>
      <Styled.Field>{middle}</Styled.Field>
      <Styled.Field>Valor</Styled.Field>
    </Styled.Container>
  );
};

CardFields.propTypes = {
  middle: P.oneOf(['ID da Cob.', 'Data de Venc.'])
}
