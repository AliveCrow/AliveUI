<template>
  <div>
    <h1   >
      Icon 图标
    </h1>
    <div id='Font_app'>
      <div v-for="i in iconArr" class="icon-container">
        <svg class="icon" >
          <use :xlink:href="`#icon${i}`"></use>
        </svg>
        <span class="icon-name">{{i}}</span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {IconFount} from '../Doc/AsideData'
export default {
  name: 'Font',

  setup(){
    const iconArr = IconFount()
    return {
      iconArr
    }
  }

};
</script>
<style scoped lang='scss'>
h1{
  margin: 1.2em 0;
  font-size: 2rem;
  padding: 0;
  font-weight: bold;
  color: black;
  text-align: left;
}
#Font_app{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
      min-height: 30px;
      min-width: 30px;
    }
    .icon-name{
      margin-top: 5px;
      height: 1rem;
    }
  }
}


</style>