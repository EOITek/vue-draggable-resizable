import { configure, addParameters } from '@storybook/vue'

import Vue from 'vue'

import VueDraggableResizable from '../src/components/vue-draggable-resizable'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

addParameters({
  options: {
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false
  }
})

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
