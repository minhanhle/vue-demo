<template>
  <app-layout>
    <div slot="header">
      <app-header></app-header>
    </div>
    <div slot="content">
      <router-view></router-view>
    </div>
  </app-layout>
</template>

<script>
import Header from '@/components/Header.vue'
import appLayout from '@/components/Layout.vue'

export default {
  name: 'PageContent',
  data () {
    return {}
  },
  components: {
    appLayout,
    'app-header': Header
  }
}
</script>
