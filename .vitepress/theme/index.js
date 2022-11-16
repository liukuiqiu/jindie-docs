import{ watch } from 'vue'

import './styles/vars.css'

import DefaultTheme from 'vitepress/theme'
import ImageViewer from '../components/ImageViewer.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    console.log('app: ', app);
    app.component('ImageViewer', ImageViewer)
  }
}