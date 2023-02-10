import P from 'prop-types';
import * as Styled from './styles';
import { Nav as Menu } from '../../components/Menu/Nav';
import { TopBar } from '../../components/TopBar'
import { useLocation } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { MyContext } from '../../components/Contexts';

export const Base = ({ children, page }) => {
  const { user, setUser } = useContext(MyContext);

  useMemo(() => {
    const recoveredUser = {
      id: localStorage.getItem('user_id'),
      name: localStorage.getItem('user_name'),
      aka: localStorage.getItem('user_aka'),
      email: localStorage.getItem('user_email'),
    };

    if (!user) return setUser(recoveredUser);
  }, [user, setUser]);


  return (
    <Styled.Base>
      <Menu />
      <Styled.Container>
        <TopBar
          page={page}
        />
        {children}
      </Styled.Container>
    </Styled.Base>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  page: P.string.isRequired,
};
