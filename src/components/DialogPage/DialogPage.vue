<template>
  <div class="content">
    <span> Dialog对话框组件 </span>
    <SourceCode :component="DialogDefault" ></SourceCode>
    <SourceCode :component="DialogCenter"></SourceCode>
    <SourceCode :component="DialogTitle"></SourceCode>
    <SourceCode :component="DialogType"></SourceCode>
    <SourceCode :component="DialogModal"></SourceCode>

  </div>
</template>
<script lang='ts'>
import DialogDefault from './DialogShowComponents/DialogDefault.vue';
import DialogTitle from './DialogShowComponents/DialogTitle.vue';
import DialogType from './DialogShowComponents/DialogType.vue';
import DialogCenter from './DialogShowComponents/DialogCenter.vue';
import DialogModal from './DialogShowComponents/DialogModal.vue';
export default {
  setup() {
    return {
      DialogDefault,
      DialogTitle,
      DialogType,DialogCenter,DialogModal
    };
  },
};
</script>
<style lang='scss' scoped>
</style>