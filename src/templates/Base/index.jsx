import P from 'prop-types';
import * as Styled from './styles';
import { Nav as Menu } from '../../components/Menu/Nav';
import { TopBar } from '../../components/TopBar'
import { useLocation } from 'react-router-dom';

export const Base = ({ children, barInfo = {} }) => {
  return (
    <>
      <Menu />
      <Styled.Container>
        <TopBar
          aka={barInfo.aka}
          page={barInfo.page}
          username={barInfo.username}
        />
        {children}
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  barInfo: P.objectOf(
    P.shape({
      page: P.string.isRequired,
      aka: P.string.isRequired,
      username: P.string.isRequired,
    })
  ).isRequired
};
