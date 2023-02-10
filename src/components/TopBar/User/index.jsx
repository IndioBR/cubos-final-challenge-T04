import P from 'prop-types';
import * as Styled from './styles';
import arrow from '../../../assets/arrow-down.svg';
import { SettingsModal } from '../SettingsModal';
import { useState } from 'react';


export const User = ({ children, aka = '' }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Styled.Container>
      <Styled.TopBar>
        <Styled.Aka>{aka}</Styled.Aka>
        <Styled.Name>{children}</Styled.Name>
        <Styled.Image src={arrow} alt='Arrow Down' onClick={() => setShowModal(!showModal)} />
      </Styled.TopBar>
      {showModal && <SettingsModal />}
    </Styled.Container>
  );
};

User.propTypes = {
  children: P.string,
  aka: P.string,
};
