import { useState } from 'react';
import { MyContext } from '../../components/Contexts';
import P from 'prop-types'


export const AuthProvider = ({ children }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [authenticated, setAuthenticated] = useState(false);


  const values = {
    authenticated,
    registerName, setRegisterName,
    registerEmail, setRegisterEmail,
  }

  return (
    <MyContext.Provider value={values} >
      {children}
    </MyContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
