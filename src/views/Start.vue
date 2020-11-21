<template>
  <div class="start_app" id="write">
    <div class="title">
      <h1>开始</h1>
      <span>欢迎使用AliveUI</span>
    </div>
    <div class="content">
      <span>介绍</span>
      <p>
        AliveUI是一个简洁的前端UI框架,使用
        <Blod color="rgb(255, 79, 87)"> vite+vue3.0+typescript </Blod>
        搭建,由
        <Blod color="rgb(255, 79, 87)">
          <a
            target="_blank"
            href="https://dreamsakula.top/"
            style="color: rgb(255, 79, 87)"
            >Grit</a
          >
        </Blod>
        开发
      </p>
      <ul>
        <li>最新版本:1.0.0</li>
        <li>上次更新:暂无</li>
        <li>上次修正:暂无</li>
      </ul>
    </div>
    <div class="footer">
      <a class="prev">上一篇</a>
      <a class="next">下一篇</a>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup(props, context) {},
};
</script>


<style lang="scss" scoped>
.start_app {
  width: 100%;
  padding: 20px;
  text-align: center;
  .title {
    box-shadow: 0 1px 1px rgba(#efefef, 0.8);
    padding-bottom: 20px;
    h2 {
      margin-bottom: 15px;
    }
    span {
      font-weight: 300;
    }
  }

  .content {
    margin-top: 40px;
    text-align: left;
    & span {
      font-size: 24px;
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }
    ul {
      margin: 20px;
      li {
        list-style: disc;
        margin: 5px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    a {
      line-height: 40px;
      height: 40px;
      width: 80px;
      border: none;
      color: $color;
      background-color: #fff;
      transition: all 0.1s ease-in-out;
      font-size: 1.1rem;
      outline: none;
      &:hover {
        color: $light-color;
      }
    }
  }
}
</style>