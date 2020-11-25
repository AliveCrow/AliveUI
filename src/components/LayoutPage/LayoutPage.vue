<template>
  <div class="content">
    <span> Layout </span>
    <SourceCode :component="Base"></SourceCode>
    <SourceCode :component="Gaps"></SourceCode>
    <SourceCode :component="Offset"></SourceCode>
    <SourceCode :component="Flex"></SourceCode>
    <SourceCode :component="Res"></SourceCode>

  </div>
</template>

<script lang="ts">
import Base from './LayoutShowComponents/Base.vue';
import Gaps from './LayoutShowComponents/Gaps.vue';
import Offset from './LayoutShowComponents/Offset.vue';
import Flex from './LayoutShowComponents/Flex.vue';
import Res from './LayoutShowComponents/Res.vue';
export default {
  name: 'LayoutPage',
  setup(){
    return {
      Base,Gaps,Offset,Flex,Res
    }
  }

};
</script>
<style  lang='scss'>
.alive-layout-content{
  color: #fff;
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 20px;
}
.bg-logo-color{
  background-color: $logo-color;
}
.bg-logo-color-light{
  background-color: $light-color;
}
</style>