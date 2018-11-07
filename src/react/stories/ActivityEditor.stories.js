import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ActivityEditor from '../ActivityEditor';

storiesOf('ActivityEditor', module)
  .add('main', withInfo({
  })(() => (
    <ActivityEditor />
  )));
