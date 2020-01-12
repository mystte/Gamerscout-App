import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useReactRouter from 'use-react-router';

import styles from './styles';
import { doValidatePassword } from '../../../redux/actions/app';
import { getHomeUrl } from '../../../config/routes';

const ValidatePassword = () => {
  const dispatch = useDispatch();
  const { match } = useReactRouter();
  const [token] = useState(match.params.token);

  useEffect(() => {
    dispatch(doValidatePassword(token));
  }, []);

  return (
    <div style={styles.container}>
      <Redirect to={getHomeUrl()} />
    </div>
  );
};

ValidatePassword.propTypes = {};

ValidatePassword.defaultProps = {};

export default ValidatePassword;
