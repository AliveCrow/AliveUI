<template>
  <Nav />
  <div class="app_box">
    <Aside v-show="asideVisible" />
    <router-view style="width: 100%" />
  </div>
</template>

<script lang="ts">
import  {provide,ref} from 'vue'
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";
import router from './router'

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
      if(screenWidth<650){
        asideVisible.value = false
      }
    })

    return { asideVisible };
  },
};
</script>

<style lang="scss">
.app_box {
  display: flex;
  height: 100%;
}
</style>
