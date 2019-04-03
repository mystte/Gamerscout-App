import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Input, { INPUT_TYPE } from './Input';

storiesOf('Elements/Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {

    return (
      <Input
        placeholder={text('Placeholder', 'placeholder')}
        value={text('Value', 'value')}
        title={text('Title', 'Title')}
        type={select('Type', INPUT_TYPE, INPUT_TYPE.TEXT)}
        message={text('Message', 'message')}
      />
    );
  });