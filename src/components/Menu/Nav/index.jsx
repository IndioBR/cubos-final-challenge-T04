import P from 'prop-types';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';

import { Link } from '../Link';

import { mock } from './mock';

export const Nav = () => {
  const location = useLocation();

  return (
    <Styled.Container>
      {mock.map(item => {
        return (
          <Link
            alt={item.alt}
            link={item.link}
            src={
              location.pathname === item.link
                ?
                item.secondarySVG
                :
                item.primarySVG
            }
            page={item.page}
            selected={
              location.pathname === item.link
                ?
                true
                :
                false
            }
            key={item.link}
          />
        )
      })}
    </Styled.Container>
  );
};
