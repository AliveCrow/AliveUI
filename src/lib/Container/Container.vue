<template>
  <section class="alive-container" :class="{'vertical':isVertical}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Container from './Container.vue'
import Aside from './Aside.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Main from './Main.vue';
import {computed,ref,getCurrentInstance} from 'vue'
export default {
  name: 'Container',
  props:{
    vertical:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    let isVertical = ref<Boolean>(false)
    const vNodes = context.slots.default()
    vNodes.forEach(vNode=>{
      if([Aside,Footer,Header,Main,Container].indexOf(vNode.type)===-1){
        throw Error('存在不是规定节点的节点')
      }
      if(vNode.type===Header ||vNode.type===Footer || props.vertical===true){
        isVertical = true
      }
    })
    return {
      isVertical
    }

  }

};
</script>
<style  lang='scss'>
$padding : 5px;


.alive-container{
  display: flex;
  flex-direction: row;
  flex: 1; // =>   flex-grow:1;flex-shrink:1;flex-basis:0
  flex-basis: auto;

  color: $color;
}
.vertical{
  flex-direction:column
}
</style>