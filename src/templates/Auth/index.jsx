import { useEffect, useState } from 'react';
import { MyContext } from '../../components/Contexts';
import P from 'prop-types'
import { Navigate } from 'react-router-dom';


export const AuthProvider = ({ children }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [feedbackActive, setFeedbackActive] = useState(true);


  const token = localStorage.getItem('token');

  const values = {
    authenticated: !!token,
    registerName, setRegisterName,
    registerEmail, setRegisterEmail,
    user, setUser,
    loading, setLoading,
    editUserModal, setEditUserModal,
    showModal, setShowModal,
    feedbackActive, setFeedbackActive,
  }

  useEffect(() => {
    if (feedbackActive) {
      setTimeout(() => {
        setFeedbackActive(false);
      }, 3000);
    }
  }, [feedbackActive]);

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
