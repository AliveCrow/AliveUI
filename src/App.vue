<template>
  <Nav />
  <div class="app_box ">
    <Aside />
    <router-view style="width: 100%"  />
  </div>
</template>


<script lang="ts">
import Nav from './components/Nav.vue';
import Aside from './components/Aside.vue';

export default {
  name: 'App',
  components:{
    Aside,
    Nav,
  },
  setup(){
    const asideVisible = ref

  },
}

</script>

<style lang="scss">

.app_box {
  display: flex;
  height: 100%;
}
</style>
