<template>
  <div class="content">
    <span> Container布局 </span>
    <div>
      <p><span>aliveContainer</span> 布局容器,里面只能够放置规定的子元素: <span style="color: #6a737d">aliveContainer, aliveHeader, aliveMain, aliveAside, aliveFooter</span></p>
      <p><span>aliveHeader</span>顶部布局</p>
      <p><span>aliveAside</span>侧边栏布局</p>
      <p><span>aliveMain</span>内容部分</p>
      <p><span>aliveFooter</span>底部布局</p>
    </div>
    <SourceCode :component='Base'></SourceCode>
  </div>
</template>

<script lang="ts">
import Base from './ContainerShowPage/Base.vue';

export default {
  name: 'ContainerPage',
  setup(){
    return {
      Base
    }
  }
};
</script>
<style scoped lang='scss'>
.content{
  >div{
    margin-bottom: 20px;
    span{
      color: $light-color;

    }
  }
}
</style>
<style lang="scss">
.btn-type>.alive-container{
  margin-bottom: 20px;
}
.container{
  margin-bottom: 20px;
}
.alive-header{
  background-color: $color;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.alive-aside{
  background-color: $logo-color;
  line-height: 200px;
  color: #fff;
}
.alive-main{
  background-color: $light-color;
  line-height: 200px;
  color: #fff;
}
.alive-footer{
  background-color: $color;
  line-height: 60px;
  text-align: center;
  color: #fff;
}
</style>