import { configure } from '@storybook/vue';
import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';
import VueResize from 'vue-resize';
import Vlf from 'vlf';

import kebabCase from 'lodash.kebabcase';

Vue.use(Element, {
  locale,
});
Vue.use(Vlf);
Vue.use(VueResize);

import '../src/app.scss';
import '../src/variables.scss'; // * To use $--color-primary scss variable

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  console.log('req keys', req.keys());
  req.keys().forEach(filename => req(filename));
}

// add vue components
const req2 = require.context('../src/components', true, /.vue$/);
req2.keys().forEach((filename) => {
  const vueComponent = req2(filename);

  const tokens = filename.split('/');
  const shortFilename = tokens[tokens.length - 1].replace('.vue', '');
  if (shortFilename === 'LandingPage') {
    console.log(1111, filename, vueComponent);
  }

  Vue.component(kebabCase(shortFilename), vueComponent);
})

configure(loadStories, module);
