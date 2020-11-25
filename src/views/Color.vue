<template>
  <div id="write" v-html="Color"></div>
</template>

<script lang="ts">
import Color from "../Doc/Color.md";
export default {
  name: 'Color',
  setup(){
    return {
      Color,
    };
  }
};
</script>
<style scoped lang='scss'>

</style>