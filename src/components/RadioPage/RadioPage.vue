<template>
  <div class="content">
    <span> Radio 单选框 </span>
    <SourceCode :component="Base"></SourceCode>
    <SourceCode :component="Disabled"></SourceCode>
    <SourceCode :component="RadioGroup"></SourceCode>
  </div>
</template>

<script lang="ts">
import Base from './RadioShow/Base.vue';
import Disabled from './RadioShow/Disabled.vue';
import RadioGroup from './RadioShow/RadioGroup.vue';
export default {
  name: 'RadioPage',
  setup(){
    return {
      Base,Disabled,RadioGroup
    }
  }

};
</script>
<style scoped lang='scss'>

</style>