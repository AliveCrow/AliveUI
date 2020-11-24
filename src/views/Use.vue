<template>
  <div id="write" v-html="Use"></div>
</template>
<script>
import Use from "../Doc/Use.md";
export default {
  setup(props, context) {
    return {
      Use,
    };
  },
};
</script>