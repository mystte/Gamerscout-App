import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
  header: false,
});

import 'babel-polyfill';
// automatically import all files ending in *.story.js
const components = require.context('../src/react/stories', true, /.story.js$/);


function loadStories() {
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
