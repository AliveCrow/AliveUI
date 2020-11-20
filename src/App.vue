<template>
  <div style="height: 60px" class="nav_box">
    <Nav />
  </div>

  <div style="display: flex; flex-direction: row">
    <transition name="slide">
      <Aside v-show="asideVisible" />
    </transition>
    <div class="router">
      <router-view
        v-slot="{ Component }"
        style="max-width: 700px; margin: 0 auto"
      >
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { provide, ref, Component } from "vue";
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";
import router from "./router";

export default {
  name: "App",
  components: {
    Aside,
    Nav,
  },
  setup() {
    const screenWidth = document.documentElement.clientWidth; //页面宽度
    const asideVisible = ref(screenWidth > 650);
    provide("asideVisible", asideVisible);
    router.afterEach((to, from) => {
      // to and from are both route objects.
      if (screenWidth < 650) {
        asideVisible.value = false;
      }
    });

    return { asideVisible };
  },
};
</script>

<style lang="scss" >
.nav_box {
  display: none;
}

.router {
  max-height: 100vh;
  width: 100%;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 60px;
  overflow-y: scroll !important;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $light-color;
    width: 8px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    width: 8px;
  }
}

@media (max-width: 650px) {
  .nav_box {
    display: block;
  }
  .router {
    padding: 60px 30px;
  }
  body {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>
