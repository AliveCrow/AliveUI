<sourceCode>
<title>基础用法</title>
<p>设置<span>v-model</span>为<span>name</span>属性,<span>value</span>为Radio的值,可以是<span>String,Boolean.Number</span></p>
</sourceCode>
<template>
  <div class="btn-type">
    <Radio v-model="name"  value="value1" >value1</Radio>
    <Radio v-model="name" value="value2" >value2</Radio>
  </div>
</template>
<script lang='ts'>
export default {
  data () {
    return {
      name: '1'
    };
  },

};
</script>