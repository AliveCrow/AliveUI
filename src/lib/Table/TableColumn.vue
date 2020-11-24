<template>
  <col :width="width" :label="name"  />
</template>

<script lang="ts">
export default {
  name: 'TableColumn',
  // prop="date" label="日期" width="180"
  props:{
    prop:String,
    name:String,
    width: String|null
  },
  setup(props){
    return {

    }
  }



};
</script>
<style scoped lang='scss'>

</style>