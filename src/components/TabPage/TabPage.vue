<template>
  <div class="content">
    <span>Tab组件</span>
    <SourceCode :component="TabDefault" ></SourceCode>
    <SourceCode :component="TabDisabled" ></SourceCode>
  </div>
</template>
<script lang='ts'>
import Tabs from "../../lib/Tab/Tabs.vue";
import TabBox from "../../lib/Tab/TabBox.vue";
import TabDefault from './TabShowComponents/TabDefault.vue';
import TabDisabled from './TabShowComponents/TabDisabled.vue';

export default {
  components: {
    Tabs,
    TabBox,
  },
  setup(){
    return {
      TabDefault,TabDisabled
    }
  }

};
</script>
<style lang='scss'>
</style>