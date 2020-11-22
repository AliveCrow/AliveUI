<template>
  <div id="write" v-html="Use"></div>
</template>
<script>
import { onMounted } from "vue";
import Use from "../Doc/Use.md";
export default {
  setup(props, context) {
    return {
      Use,
    };
  },
};
</script>