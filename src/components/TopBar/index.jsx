import P from 'prop-types';
import { useContext } from 'react';
import { MyContext } from '../Contexts';
import * as Styled from './styles';
import { User } from './User';

export const TopBar = ({ page = '' }) => {
  const pageTitle = (page) => {
    if (page === 'Início') return 'Resumo de Cobranças';
    return page;
  };

  const { user } = useContext(MyContext);

  return (
    <Styled.Container>
      <Styled.PageTitle>{pageTitle(page)}</Styled.PageTitle>
      <User aka={user.aka}>{user.name}</User>
    </Styled.Container>
  );
};

TopBar.propTypes = {
  page: P.string.isRequired,
};
