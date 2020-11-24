<template>
  <div class="content">
    <span> Table组件 </span>
    <SourceCode :component="Base"></SourceCode>
    <SourceCode :component="Border"></SourceCode>
    <SourceCode :component="Stripe"></SourceCode>
    <SourceCode :component="State"></SourceCode>
  </div>
</template>

<script lang="ts">
import Base from './TableShowComponents/Base.vue';
import Stripe from './TableShowComponents/Stripe.vue';
import State from './TableShowComponents/State.vue';
import Border from './TableShowComponents/Border.vue';
export default {
  name: 'TablePage',
  setup(){
    return {
      Base,Stripe,State,Border
    }
  }
};
</script>
<style scoped lang='scss'>

</style>