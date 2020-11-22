<template>
  <div class="content">
    <span> Dialog对话框组件 </span>
    <SourceCode :component="DialogDefault" ></SourceCode>
    <SourceCode :component="DialogCenter"></SourceCode>
    <SourceCode :component="DialogTitle"></SourceCode>
    <SourceCode :component="DialogType"></SourceCode>
<!--    <ShowBox>-->
<!--      <template v-slot:title>基本用法</template>-->
<!--      <template v-slot:description> Dialog 弹出一个对话框 </template>-->
<!--      <template v-slot:code> </template>-->
<!--      <template v-slot:content>-->
<!--        <Button @click="toggleDialog" type="error">Success</Button>-->
<!--        <Button @click="toggleDialog" type="success">是</Button>-->
<!--        <Button type="warning" @click="openDialog">dakai</Button>-->
<!--      </template>-->
<!--    </ShowBox>-->
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
import DialogDefault from './DialogShowComponents/DialogDefault.vue';
import DialogTitle from './DialogShowComponents/DialogTitle.vue';
import DialogType from './DialogShowComponents/DialogType.vue';
import DialogCenter from './DialogShowComponents/DialogCenter.vue';
export default {
  setup() {
    return {
      DialogDefault,
      DialogTitle,
      DialogType,DialogCenter
    };
  },
};
</script>
<style lang='scss' scoped>
</style>