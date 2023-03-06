import P from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { MyContext } from '../../Contexts';
import closeFail from '../../../assets/x-error.svg';
import closeSuccess from '../../../assets/x-success.svg';
import success from '../../../assets/circle-check.svg';
import fail from '../../../assets/x-circle.svg';

export const Feedback = ({ type, message }) => {
  const {setFeedbackActive} = useContext(MyContext);

  return (
    <Styled.Container styleFb={type}>
      <div>
        <img src={type === 'success' ? success : fail} alt='Status'/>
        <span>{message}</span>
      </div>
      <img src={type === 'success' ? closeSuccess : closeFail} alt="Close" onClick={() => setFeedbackActive(false)}/>
    </Styled.Container>
  );
};

Feedback.propTypes = {
  type: P.string.isRequired,
  message: P.string.isRequired
}
