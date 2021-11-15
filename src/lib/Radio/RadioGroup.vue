<template>
  <div id='RadioGroup_app'>
    <component v-for="vNode in vNodes" :is="vNode" @click="change(vNode.props.value)" v-model="modelValue"></component>
  </div>
</template>

<script lang="ts">
import Radio from './Radio.vue';
import {ref, onMounted} from 'vue';

export default {
  name: 'RadioGroup',
  props: {
    modelValue: String
  },
  setup(props, context) {
    let vNodes = context.slots.default();
    const change = (e) => {
      context.emit('change', e);
    };
    return {
      Radio, vNodes, change
    };
  }

};
</script>
<style scoped lang='scss'>

</style>