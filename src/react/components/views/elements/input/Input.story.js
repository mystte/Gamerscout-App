import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Elements/Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Input
      placeholder={text('Placeholder', 'placeholder')}
      value={text('Value', 'Input value')}
      title={text('Title', 'Title')}
    />
  ));  