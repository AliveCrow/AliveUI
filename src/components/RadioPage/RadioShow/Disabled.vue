<sourceCode>
<title>禁用状态</title>
<p>设置<span>disabled</span>为<span>true</span>来禁用</p>
</sourceCode>
<template>
  <div class="btn-type">
    <Radio v-model="name" value="value1" disabled>value1</Radio>
    <Radio v-model="name" value="选中禁用" disabled>选中禁用</Radio>
  </div>
</template>
<script lang='ts'>
export default {
  data () {
    return {
      name: '1'
    };
  }
};
</script>