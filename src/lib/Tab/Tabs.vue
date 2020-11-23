<template>
  <div class="alive-tab alive-tab-nav" ref="NavBar">
    <div
      v-for="cNode in cNodes"
      :key="cNode.props.title"
      @click="[cNode.props.disabled === '' ? '' : selecteTab(cNode)]"
      :class="
        'alive-tab-nav_item' +
        [currentTab === cNode ? ' selected ' : ''] +
        [cNode.props.disabled === '' ? ' disabled' : '']
      "
      :ref="
        //@ts-ignore
        (el) => {
          if (currentTab === cNode) selectedTab = el;
        }
      "
    >
      {{ cNode.props.title }}
    </div>
    <div
      class="alive-tab-nav_slide"
      :style="{ width: TabBarWidth, left: TabBarPosition }"
    ></div>
  </div>

  <transition name="fade" mode="out-in">
    <div :key="currentTab.props.title">
      <keep-alive>
        <component
          :is="currentTab"
          :key="currentTab.props.title"
          ref="currentComponent"
        ></component>
      </keep-alive>
    </div>
  </transition>
</template>
<script lang="ts">
import TabBox from "./TabBox.vue";

import {
  getCurrentInstance,
  onMounted,
  onUpdated,
  ref,
  watchEffect,
} from "vue";
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props: any, context: any) {
    //点击nav切换内容
    const cNodes = context.slots.default();
    cNodes.forEach((cNode: any) => {
      //判断子组件类型是否为TabBox
      if (cNode.type !== TabBox) {
        throw Error("子组件类型不为TabBox");
      }
    });
    let currentTab = ref(cNodes[props.index]);
    const selecteTab = (cNode: any) => {
      currentTab.value = cNode;
    };
    //nav选择项下面横线
    const selectedTab = ref<HTMLDivElement>();
    //@ts-ignore
    const NavBar = ref<HTMLDivElement>(null);
    const TabBarWidth = ref("");
    const TabBarPosition = ref(""); //位移差

    onMounted(() => {
      watchEffect(() => {
        if (selectedTab.value) {
          const {
            width,
            left: selectedNavLeft,
          } = selectedTab.value.getBoundingClientRect();
          TabBarWidth.value = width + "px";
          const { left: navWidth } = NavBar.value.getBoundingClientRect();
          TabBarPosition.value = selectedNavLeft - navWidth + "px";
        }
      });
    });

    return {
      cNodes,
      selecteTab,
      selectedTab,
      currentTab,
      NavBar,
      TabBarWidth,
      TabBarPosition,
    };
  },
};
</script>
<style lang="scss">

.alive-tab {
  height: 40px;
  font-size: 1rem;
  margin-bottom: 15px;
  &-nav {
    position: relative;
    border-bottom: 2px solid rgba($color, 0.2);
    & > .selected {
      color: rgb(255, 79, 87);
    }
    & > .disabled {
      color: rgba($color, 0.3);
      pointer-events: none;
      &:hover {
        color: rgba($color, 0.3);
      }
    }
    &_slide {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: red;
      bottom: -2px;
      transition: all 0.25s cubic-bezier(1, 1.67, 0.21, 0.84);
    }
    &_item {
      display: inline-block;
      height: 100%;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: $light-color;
      }
    }
  }
}
</style>
