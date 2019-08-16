import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useReactRouter from 'use-react-router';

import styles from './styles';
import { doValidateAccount } from '../../../redux/actions/app';
import { getHomeUrl } from '../../../config/routes';

const ValidateAccount = () => {
  const dispatch = useDispatch();
  const { match } = useReactRouter();
  const [token] = useState(match.params.token);

  useEffect(() => {
    dispatch(doValidateAccount(token));
  }, []);

  return (
    <div style={styles.container}>
      <Redirect to={getHomeUrl()} />
    </div>
  );
};

ValidateAccount.propTypes = {
};

ValidateAccount.defaultProps = {
};

export default ValidateAccount;
