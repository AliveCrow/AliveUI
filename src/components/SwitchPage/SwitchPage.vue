<template>
  <div>
    <SwitchLib v-model:value="value" />
  </div>
</template>

<script lang="ts">
import SwitchLib from "../../lib/Switch/Switch.vue";
import { ref } from "vue";

export default {
  name: "SwitchPage",
  components: { SwitchLib },

  setup() {
    const value = ref(false);

    return {
      value,
    };
  },
};
</script>
