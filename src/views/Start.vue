<template>
  <div id="write" v-html="Start"></div>
</template>

<script lang='ts'>
import { onMounted, ref } from "vue";
import Start from "../Doc/Start.md";
export default {
  setup(props, context) {
    return {
      Start,
    };
  },
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