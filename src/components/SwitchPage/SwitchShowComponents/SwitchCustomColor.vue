<sourceCode>
<title>自定义颜色</title>
<p>
  自定义两个状态的颜色,设置属性<span>trueColor</span>和<span
>falseColor</span
>
</p>
</sourceCode>
<template>
  <Switch v-model:value="value" trueColor="#433" falseColor="#888" />
</template>
<script lang='ts'>
import {ref} from 'vue';
export default {
  setup() {
    const value = ref(false);
    return {
      value,
    };
  },

};
</script>
<style lang='scss'>


</style>