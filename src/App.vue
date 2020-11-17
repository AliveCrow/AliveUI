<template>
  <div style="height: 60px" class="nav_box">
    <Nav />
  </div>
  <div style="display: flex; flex-direction: row">
    <transition name="fade">
      <Aside v-show="asideVisible" />
    </transition>
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { provide, ref } from "vue";
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
  overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(-285px);
}

@media (max-width: 650px) {
  .nav_box {
    display: block;
  }
  body {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>
