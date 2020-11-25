<template>
  <div>
    <div id="write">
      <h1 >
        Icon 图标 <sub>使用阿里云的iconfont</sub>
      </h1>
    </div>
    <div class="content">
      <SourceCode :component="IconShowPage" ></SourceCode>
    </div>
    <div id='Font_app'>
      <div v-for="i in iconArr" class="icon-container">
        <Icon :name="i"></Icon>
        <span class="icon-name">{{i}}</span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {IconFount} from '../Doc/AsideData'
import IconShowPage from '../components/IconShowPage.vue';
export default {
  name: 'Font',
  setup(){
    const iconArr = IconFount()
    return {
      iconArr,IconShowPage
    }
  }

};
</script>
<style scoped lang='scss'>
#Font_app{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  &:after {
    content: "";
    width: 119px;
  }
  .icon-container{
    height: 120px;
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid $border-color;
    border-top: 1px solid $border-color;
    border-right: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    margin-right: -1px;
    margin-bottom: -1px;
    padding: 5px;
    cursor: default;
    transition: all .2s .05s;
    &:hover{
      color: $light-color;
      .icon{
        fill: $light-color;
      }
    }
    .icon{
      fill: $color;
      height: 30px;
      width: 30px;
    }
    .icon-name{
      margin-top: 5px;
      height: 1rem;
    }
  }
}


</style>