import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Elements/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <Button label={text('Label', 'Delete')} />;
  });
