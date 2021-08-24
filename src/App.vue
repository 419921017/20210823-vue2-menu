<template>
  <div>
    <MyMenu :data="tree"></MyMenu>
  </div>
</template>
<script >
import MyMenu from './components/my-menu.jsx'

export default {
  components: {
    MyMenu
  },
  data() {
    return {
      tree: [
        { title: '菜单1' },
        { title: '菜单2' },
        {
          title: '菜单3',
          children: [
            { title: '菜单3-1' },
            { title: '菜单3-2' }
          ]
        },
      ]
    }
  }
}
</script>
<style lang="scss">
</style>
