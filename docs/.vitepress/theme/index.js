import{ watch } from 'vue'

import DefaultTheme from 'vitepress/theme'
import ImageViewer from '../components/ImageViewer.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ImageViewer', ImageViewer)
  }
}