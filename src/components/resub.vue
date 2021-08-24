<template>

  <el-menu-item
    :key="data.title"
    v-if="!data.children"
  >{{data.title}}</el-menu-item>
  <el-submenu v-else>
    <template #title>{{data.title}}</template>
    <template
      v-for="d in data.children"
      :key="d.title"
    >
      <resub :data="d"></resub>
    </template>

  </el-submenu>
</template>

<script>

import ElMenuItem from './el-menu-item.vue'
import ElSubmenu from './el-submenu.vue'

export default {
  name: 'resub',
  components: {
    ElMenuItem,
    ElSubmenu
  },
  props: { data: [] }
}
</script>

<style>
</style>