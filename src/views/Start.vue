<template>
  <div class="start_app">
    <div class="title">
      <h1>开始</h1>
      <span>欢迎使用AliveUI</span>
    </div>
    <div class="content">
      <span>介绍</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.start_app {
  width: 100%;
  padding: 20px;
  text-align: center;
  .title {
    box-shadow: 0 1px 1px rgba(#000, 0.1);
    padding-bottom: 20px;
    h2 {
      margin-bottom: 15px;
    }
    span {
      font-weight: 300;
    }
  }

  .content {
    & span {
      font-size: 24px;
      display: inline-block;
      text-align: left;
      width: 100%;
      margin: 20px;
    }
  }
}
</style>