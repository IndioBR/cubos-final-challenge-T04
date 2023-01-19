import P from 'prop-types';
import * as Styled from './styles';
import arrow from '../../../assets/arrow-down.svg'


export const User = ({ children, src, aka = '' }) => {
  return (
    <Styled.Container>
      <Styled.Aka>{aka}</Styled.Aka>
      <Styled.Name>{children}</Styled.Name>
      <Styled.Image src={arrow} alt='Arrow Down' />
    </Styled.Container>
  );
};

User.propTypes = {
  children: P.string.isRequired,
  src: P.string.isRequired,
  aka: P.string.isRequired,
};
