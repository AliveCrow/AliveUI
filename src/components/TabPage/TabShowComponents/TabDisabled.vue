<sourceCode>
<title>禁用</title>
<p>设置<span>disabled</span>为<span>true</span>来禁用</p>
</sourceCode>

<template>
  <Tabs :index="0">
    <TabBox title="项目1">内容1</TabBox>
    <TabBox title="项目2" >内容2</TabBox>
    <TabBox title="项目3" disabled>内容3</TabBox>
  </Tabs>
</template>

<script lang="ts">
export default {

}
</script>