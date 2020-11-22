<sourceCode>
<title>基础用法</title>
<p><span>index</span>可以指定当前激活的是哪一项,默认从零开始, <span>title</span>可以设置项目名称</p>
</sourceCode>

<template>
  <Tabs :index="0">
    <TabBox title="项目1">内容1</TabBox>
    <TabBox title="项目2" >内容2</TabBox>
    <TabBox title="项目3">内容3</TabBox>
  </Tabs>
</template>

<script lang="ts">
export default {

}
</script>