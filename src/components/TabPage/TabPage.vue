<template>
  <div class="content">
    <span>Tab组件</span>
    <ShowBox>
      <template v-slot:title>基础用法</template>
      <template v-slot:description> </template>
      <template v-slot:code> </template>
      <template v-slot:content>
        <Tabs :index="0">
          <TabBox title="项目1">内容1</TabBox>
          <TabBox title="项目2" disabled>内容2</TabBox>
          <TabBox title="项目3">内容3</TabBox>
        </Tabs>
      </template>
    </ShowBox>
  </div>
</template>
<script lang='ts'>
import Tabs from "../../lib/Tab/Tabs.vue";
import TabBox from "../../lib/Tab/TabBox.vue";

export default {
  components: {
    Tabs,
    TabBox,
  },
};
</script>
<style lang='scss'>
</style>