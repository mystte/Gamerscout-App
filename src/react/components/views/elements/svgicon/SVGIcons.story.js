import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import SVGIcon from './SVGIcon';

const styles = {
  container: {
    backgroundColor: 'black',
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

storiesOf('Elements/SVGIcon', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <div style={styles.container}>
        <SVGIcon
          width={number('Width', 40)}
          height={number('Height', 40)}
          name={'delete'}
        />
      </div>
    );
  });
