<template>
  <div class="content">
    <span> Switch开关组件 </span>
    <SourceCode :component="SwitchDefault"></SourceCode>
    <SourceCode :component="SwitchCustomColor"></SourceCode>
    <SourceCode :component="SwitchLoading"></SourceCode>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SwitchDefault from './SwitchShowComponents/SwitchDefault.vue';
import SwitchCustomColor from './SwitchShowComponents/SwitchCustomColor.vue';
import SwitchLoading from './SwitchShowComponents/SwitchLoading.vue';
export default {
  name: "SwitchPage",
  setup() {
    let codeShow = ref(false);
    const hidden = () => {
      codeShow.value = !codeShow.value;
    };
    return {
      SwitchDefault,
      SwitchCustomColor,
      SwitchLoading,
      codeShow,
      hidden,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
