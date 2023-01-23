import P from 'prop-types';
import * as Styled from './styles';
import { User } from './User'

export const TopBar = ({ page = '', aka = '', username }) => {
  const pageTitle = (page) => {
    if (page === 'Início') return 'Resumo de Cobranças';
    return page;
  }

  return (
    <Styled.Container>
      <Styled.PageTitle>{pageTitle(page)}</Styled.PageTitle>
      <User aka={aka}>{name}</User>
    </Styled.Container>
  );
};

TopBar.propTypes = {
  page: P.string.isRequired,
  src: P.string.isRequired,
  aka: P.string.isRequired,
  username: P.string.isRequired,
};
