<template>
  <footer class="alive-footer" :style="{'height':height}">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  props:{
    height:{
      type:String,
      default:'60px'
    }
  }

};
</script>
<style  lang='scss'>
.alive-footer{
  flex-shrink: 0;
}

</style>