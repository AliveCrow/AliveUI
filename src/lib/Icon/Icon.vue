<template>
  <svg class="icon" >
    <use :xlink:href="`#icon${name}`"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'Icon',
  props:{
    name:String
  },

};
</script>
<style  lang='scss'>
.icon{
  fill: $color;
  height: 30px;
  width: 30px;
}
</style>