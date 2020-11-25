<template>
  <main class="alive-main main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
export default {
  name: 'Main'

};
</script>
<style  lang='scss'>
.main{
  display: block;
  overflow: auto;
  flex: 1;
  flex-basis: auto;
}
</style>