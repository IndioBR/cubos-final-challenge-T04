import P from 'prop-types';
import { Base } from '../../Base';
import * as Styled from './styles';

export const ChargesPage = ({ children }) => {
  return (
    <Styled.Container>
      <Base page='Cobranças'>

      </Base>
    </Styled.Container>
  );
};

ChargesPage.propTypes = {
  children: P.node.isRequired,
};
