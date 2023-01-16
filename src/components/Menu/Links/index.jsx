import P from 'prop-types';
import * as Styled from './styles';

export const Links = ({ src, link = '#', alt = '' }) => {
  return (
    <Styled.Container href={link} >
      <img src={src} alt={alt} />
    </Styled.Container>
  );
};

Links.propTypes = {
  src: P.string.isRequired,
  link: P.string.isRequired,
  alt: P.string.isRequired
};
