import P from 'prop-types';
import * as Styled from './styles';
import { colorSelector } from './selector'

export const CardTitle = ({ title_name = '', clients_count = 0 }) => {
  const { backgroundColor, color, src } = colorSelector(title_name);

  return (
    <Styled.Container>
      <div>
        {src && <Styled.Image src={src} />}
        <Styled.Title as='h3'>{title_name}</Styled.Title>
      </div>
      <Styled.TitleCount back={backgroundColor} color={color}>{clients_count}</Styled.TitleCount>
    </Styled.Container>
  );
};

CardTitle.propTypes = {
  title_name: P.string.isRequired,
  clients_count: P.number.isRequired,
  src: P.string,
};
