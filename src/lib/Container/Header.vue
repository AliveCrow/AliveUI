<template>
  <header class="alive-header" :style="{'height':height}">
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props:{
    height:{
      type:String,
      default:'60px'
    }
  }

};
</script>
<style  lang='scss'>
.alive-header{
  flex-shrink: 0;
}
</style>