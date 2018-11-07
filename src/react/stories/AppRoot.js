import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import AppRoot from '../AppRoot';

storiesOf('AppRoot', module)
  .add('main', withInfo({
  })(() => (
    <AppRoot />
  )));
