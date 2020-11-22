
<template>
  <div class="content">
    <span> Button按钮组件 </span>
    <SourceCode :component="ButtonDefault"></SourceCode>
    <SourceCode :component="ButtonSize"></SourceCode>
    <SourceCode :component="ButtonLong"></SourceCode>
    <SourceCode :component="ButtonDisabled"></SourceCode>
    <SourceCode :component="ButtonLoading"></SourceCode>
  </div>
</template>
<script lang='ts'>
import ButtonDefault from "./ButtonShowComponents/ButtonDefault.vue";
import ButtonDisabled from './ButtonShowComponents/ButtonDisabled.vue';
import ButtonLoading from './ButtonShowComponents/ButtonLoading.vue';
import ButtonLong from './ButtonShowComponents/ButtonLong.vue';
import ButtonSize from './ButtonShowComponents/ButtonSize.vue';

export default {
  setup() {
    return {
      ButtonDefault,ButtonDisabled,ButtonLoading,
      ButtonLong,ButtonSize
    };
  },
};
</script>
<style lang='scss' scoped>
</style>