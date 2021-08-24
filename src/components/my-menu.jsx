import ElMenu from './el-menu.vue';
import ElMenuItem from './el-menu-item.vue';
import ElSubmenu from './el-submenu.vue';

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu,
  },
  render() {
    let renderChildren = (data) => {
      return data.map((child) => {
        return child.children ? (
          <el-submenu>
            <div slot="title">{child.title}</div>
            {renderChildren(child.children)}
          </el-submenu>
        ) : (
          <el-menu-item>{child.title}</el-menu-item>
        );
      });
    };

    return <el-menu>{renderChildren(this.data)}</el-menu>;
  },
};
