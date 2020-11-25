<template>
  <aside class="alive-aside" :style="{'width':width}">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'Aside',
  props:{
    width:{
      type:String,
      default:'200px'
    }
  }
};
</script>
<style  lang='scss'>
.alive-aside{
  overflow: auto;
  flex-shrink: 0;
}
</style>