import P from 'prop-types';
import * as Styled from './styles';

export const CardFields = () => {
  return (
    <Styled.Container>
      <Styled.Field>Nome</Styled.Field>
      <Styled.Field>ID da Cob.</Styled.Field>
      <Styled.Field>Valor</Styled.Field>
    </Styled.Container>
  );
};
