<sourceCode>
  <title>基础用法</title>
  <p>绑定<span>v-model</span>到一个<span>Boolean</span>类型的变量</p>
</sourceCode>
<template>
  <Switch v-model:value="value" />
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(false);
    return {
      value,
    };
  },
};
</script>
