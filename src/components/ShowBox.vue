<sourceCode> sourceCode </sourceCode>
<template>
  <div class="show-box">
    <a>
      <slot name="title"> </slot>
    </a>
    <p>
      <slot name="description"> </slot>
    </p>
    <div class="switch-type">
      <section class="title">
        <svg class="icon openCode" @click="hidden">
          <use xlink:href="#iconcode-outline"></use>
        </svg>
      </section>
      <section :class="'code ' + [codeShow ? ' code-show ' : ' code-hidden ']">
        <slot name="code"></slot>
      </section>
      <section class="content">
        <div class="btn-type">
          <slot name="content"></slot>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  name: "ShowBox",
  setup() {
    let codeShow = ref(false);
    const hidden = () => {
      codeShow.value = !codeShow.value;
    };
    return {
      codeShow,
      hidden,
    };
  },
};
</script>
<style lang='scss'>
.show-box {
  margin-bottom: 50px;
  & > a {
    font-size: 1.2rem;
    margin-bottom: 7px;
  }
  & > p {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
  .switch-type {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid $color;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba($color, 0.2);
    .code-hidden {
      transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
      max-height: 0;
      border: none;
    }

    .code-show {
      border: none;
      max-height: 800px;
      width: 100%;
      transition: all 0.8s cubic-bezier(0.39, 0.7, 0.18, 0.9);
    }

    .title {
      height: 50px;
      position: relative;
      .icon {
        height: 30px;
        width: 30px;
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -15px;
        padding: 0 5px;
        border-radius: 50%;
        fill: $light-color;
        &:hover {
          background-color: rgba($light-color, 0.2);
        }
      }
    }
    .code {
      width: 100%;
      overflow-y: auto;
      border-top: 1px solid $color;
    }
    .content {
      padding: 20px;
      // border-top: none;
      .btn-type {
        .alive-button__container {
          margin: 5px;
        }
      }
    }
  }
}
</style>