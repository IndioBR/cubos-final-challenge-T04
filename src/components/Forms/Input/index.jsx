import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

import hide_password from '../../../assets/hide-password.svg';
import show_password from '../../../assets/show-password.svg';


export const Input = ({ label = '', required = false, ph, fgtPassword = false, type = 'text', passwordImg = false }) => {
  const [show, setShow] = useState(false);

  const showPassword = () => {
    if (show) return show_password;
    return hide_password;
  }

  const typeSetter = (tp) => {
    if (passwordImg && show) return 'text';
    if (passwordImg && !show) return 'password';

    return tp;
  }

  return (
    <Styled.Label>
      <div>
        <span>{label}{required && '*'}</span>
        {fgtPassword && <a>Esqueceu a Senha?</a>}
      </div>
      <div className='input'>
        <Styled.Container placeholder={ph} type={typeSetter(type)} />
        {passwordImg && <img src={showPassword()} onClick={() => setShow(!show)} />}
      </div>
    </Styled.Label>
  );
};

Input.propTypes = {
  label: P.string.isRequired,
  type: P.string.isRequired,
  required: P.bool.isRequired,
  ph: P.string.isRequired,
  fgtPassword: P.bool,
  passwordImg: P.bool,
};
