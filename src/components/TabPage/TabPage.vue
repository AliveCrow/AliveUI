<template>
  <div class="content">
    <span>Tab组件</span>
    <SourceCode :component="TabDefault" ></SourceCode>
    <SourceCode :component="TabDisabled" ></SourceCode>
  </div>
</template>
<script lang='ts'>
import TabDefault from './TabShowComponents/TabDefault.vue';
import TabDisabled from './TabShowComponents/TabDisabled.vue';

export default {

  setup(){
    return {
      TabDefault,TabDisabled
    }
  }

};
</script>
<style lang='scss'>
</style>