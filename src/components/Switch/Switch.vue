<template>
  <div id="Switch_app">
    <SwitchContainer v-model:value="value" />
  </div>
</template>

<script lang="ts">
import SwitchContainer from "../../lib/Switch/SwitchContainer.vue";
import { ref } from "vue";

export default {
  name: "Switch",
  components: {
    SwitchContainer,
  },
  setup() {
    const value = ref(false);
    return {
      value,
    };
  },
};
</script>
<style scoped lang='scss'>
</style>