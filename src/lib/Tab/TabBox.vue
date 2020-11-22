<template>
  <slot></slot>
</template>
<script lang='ts'>
import { onMounted, watchEffect } from "vue";

export default {
  name: "TabBox",
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {},
};
</script>
<style lang='scss'>
</style>
