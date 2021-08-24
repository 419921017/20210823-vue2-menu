<template>
  <el-menu>
    <template
      v-for="item in data"
      :key="item.data"
    >
      <ReSub :data="item"></ReSub>
    </template>
  </el-menu>
</template>

<script lang="ts">
import ElMenu from './el-menu.vue'
import ReSub from './resub.vue'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ElMenu,
    ReSub
  }
}
</script>

<style>
</style>