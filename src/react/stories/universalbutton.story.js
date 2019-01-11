import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  boolean,
} from '@storybook/addon-knobs/react';
import UniversalView from '../../../sharedComponents/universalcomponents/universalview/src/UniversalView';
import UniversalButton from '../../../sharedComponents/universalcomponents/universalbutton/src/UniversalButton';

const styles = {
  container: {
    width: 120,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    display: 'flex',
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50,
  },
};

storiesOf('UniversalComponents', module)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [UniversalView, UniversalView],
  })(() => (
    <UniversalView style={styles.container}>
      <UniversalButton
        onPress={() => { }}
        disabled={boolean('disabled', false)}
      >
        Button
      </UniversalButton>
    </UniversalView>
  )));
