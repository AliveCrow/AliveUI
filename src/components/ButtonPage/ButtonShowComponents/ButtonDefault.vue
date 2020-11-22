<sourceCode>
<title>基础用法</title>
<p>使用<span>type ,round, icon</span>属性来定义 Button 的样式</p>
</sourceCode>
<template>
  <div class="btn-type">
    <Button>默认按钮</Button>
    <Button type="primary" />
    <Button type="success" />
    <Button type="warning" />
    <Button type="error" />
    <Button type="primary" :round="true" />
    <Button type="primary" round icon="iconcloud-download-outline">
      download
    </Button>
    <Button type="primary" round icon="iconfolder-add-outline"> </Button>
  </div>
</template>
<script lang='ts'>
export default {};
</script>