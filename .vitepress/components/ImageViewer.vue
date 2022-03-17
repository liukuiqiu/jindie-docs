<script setup lang="ts">
import { useRouter } from 'vitepress'
import { onMounted, watch } from 'vue'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

const router = useRouter()
let initViewer = null

watch(
  () => router.route.data.relativePath,
  (path) => {
    console.log('path: ', path)
    initViewer.destroy()
  }
)

onMounted(() => {
  console.log('onMounted')
  console.log('initViewer: ', initViewer)

  initViewer = new Viewer(
    document.getElementsByClassName('content')[0] as HTMLElement,
    {
      navbar: true,
      title: true,
      toolbar: {
        prev: true,
        next: true,
      },
    }
  )
})
</script>

<template>
  <div>
    <!-- <img :src="src" :alt="alt" /> -->
  </div>
</template>
