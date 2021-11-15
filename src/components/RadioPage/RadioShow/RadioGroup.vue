<sourceCode>
<title>单选框组</title>
<p> <span>RadioGroup</span>和 <span>Radio</span>组合实现单选框组,还提供了<span>change事件</span>来响应变化</p>
</sourceCode>
<template>
  <div class="btn-type">
    <RadioGroup v-model="name" >
      <Radio  value="value1" >value1</Radio>
      <Radio  value="value2" >value2</Radio>
    </RadioGroup>
  </div>
</template>
<script lang='ts'>
export default {
  data () {
    return {
      name: '1',
    };
  }
};
</script>