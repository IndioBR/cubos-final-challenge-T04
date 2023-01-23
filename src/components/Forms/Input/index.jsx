import P from 'prop-types';
import * as Styled from './styles';

export const Input = ({ label = '', required = false }) => {
  return (
    <Styled.Label>
      <span>{label}{required && '*'}</span>
      <Styled.Container />
    </Styled.Label>
  );
};

Input.propTypes = {
  label: P.string.isRequired,
  required: P.bool.isRequired,
};
