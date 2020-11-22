<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :style="center ? 'text-align: center' : ''"
      class="is-visible"
    >
      <div class="alive-dialog-overlay" @click="onClickOverlay"></div>
      <div :class="'alive-dialog-warpper '">
        <div class="alive-dialog-close" @click="closeDialog">
          <div class="hover">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconclose-outline"></use>
            </svg>
          </div>
        </div>
        <header class="alive-dialog-header"  v-if="title">
          <h2 class="alive-dialog-title">
            {{title}}
          </h2>
        </header>
        <main class="alive-dialog-main">
          <!--success-->
          <div
            class="alive-dialog-icon alive-dialog-sucess"
            v-if="icon === 'success'"
          >
            <span class="alive-dialog-line one"></span>
            <span class="alive-dialog-line two"></span>
            <span class="alive-dialog-placeholder"></span>
          </div>
          <!--warning-->
          <div
            class="alive-dialog-icon alive-dialog-warning"
            v-else-if="icon === 'warning'"
          >
            <span class="alive-dialog-body warningAni"></span>
            <span class="alive-dialog-dot warningAni"></span>
          </div>
          <!--error-->
          <div
            class="alive-dialog-icon alive-dialog-error"
            v-else-if="icon === 'error'"
          >
            <span class="errorAni" >
              <span class="alive-dialog-line left"></span>
              <span class="alive-dialog-line right"></span>
            </span>
          </div>
          <slot  >这是内容</slot>
        </main>
        <footer class="alive-dialog-footer" v-if="bottomBtn">
          <div
            class="alive-dialog-button"
            @click="closeDialog"
            :style="['background-color:' + btnColor]"
          >
            {{bottomBtn}}
          </div>
        </footer>
      </div>
    </div>
  </Teleport>
</template>
<script lang='ts'>
import { ref } from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    clickOverlay: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: "default",
    },
    center: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String || null,
      default: null,
    },
    noContent: {
      type: Boolean,
      default: false,
    },
    bottomBtn: {
      type: String || null,
      default: null,
    },
    handleClose: {
      type: Function,
    },
    btnColor: {
      type: String,
      default: "rgb(255, 79, 87)",
    },
  },
  emits: ["handleClose", "update:visible"],
  setup(props, context) {
    const toggleDialog = () => {};
    const closeDialog = () => {
      if (props.handleClose !== undefined) {
        props.handleClose();
      }
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.clickOverlay) {
        closeDialog();
      }
    };
    return {
      closeDialog,
      onClickOverlay,
    };
  },
};
</script>
<style lang='scss'>
.alive-dialog-overlay {
  position: fixed;
  z-index: 91;
  top: 0;
  left: 0;
  background-color: rgba(#fff, 0.9);
  width: 100%;
  height: 100%;
}
@media (max-width: 650px) {
  .alive-dialog-warpper {
    max-width: 300px;
  }
}
.alive-dialog-warpper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 92;
  width: 640px;
  background-color: #fff;
  transition: all 0.5s;
  box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.03);
  .alive-dialog-close {
    position: absolute;
    height: 42px;
    width: 42px;
    right: 12px;
    top: 12px;
    .hover {
      display: inline-block;
      text-align: center;
      width: 42px;
      height: 42px;
      line-height: 42px;
      border-radius: 50%;
      &:hover {
        background-color: $light-color;
        & > .icon {
          fill: #fff;
        }
      }
      cursor: pointer;
      & > .icon {
        height: 24px;
        width: 24px;
        vertical-align: middle;
        fill: #000;
      }
    }
  }
  .alive-dialog-header {
    border-bottom: 1px solid #eaeaea;
    padding: 0 64px 0 32px;
    .alive-dialog-title {
      font-size: 22px;
      height: 64px;
      line-height: 64px;
    }
  }
  .alive-dialog-main {
    padding: 64px 32px;
    .alive-dialog-icon {
      position: relative;
      width: 80px;
      height: 80px;
      border: 4px solid gray;
      border-radius: 50%;
      margin: auto;
      padding: 0;
      box-sizing: content-box;
    }
    .alive-dialog-sucess {
      margin-bottom: 36px;
      border-color: $success;
      .alive-dialog-line {
        display: block;
        position: absolute;
        z-index: 2;
        height: 4px;
        background-color: $success;
        border-radius: 2px;
      }
      .alive-dialog-line.one {
        width: 25px;
        left: 13px;
        top: 46px;
        transform: rotate(45deg);
        animation: animateSuccessOne 0.75s;
      }
      .alive-dialog-line.two {
        width: 47px;
        right: 7px;
        top: 38px;
        transform: rotate(-45deg);
        animation: animateSuccessTwo 0.75s;
      }
      .alive-dialog-placeholder {
        box-sizing: content-box;
        position: absolute;
        left: -4px;
        top: -4px;
        z-index: 2;
        width: 80px;
        height: 80px;
        border: 4px solid rgba(76, 175, 80, 0.2);
        border-radius: 50%;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        border-radius: 40px;
        width: 60px;
        height: 120px;
        background: white;
        transform: rotate(45deg);
      }
      &:before {
        border-radius: 120px 0 0 120px;
        top: -15px;
        left: -33px;
        transform: rotate(-45deg);
        -webkit-transform-origin: 60px 60px;
        transform-origin: 60px 60px;
      }
      &:after {
        border-radius: 0 120px 120px 0;
        top: -11px;
        left: 30px;
        transform: rotate(-45deg);
        -webkit-transform-origin: 0px 60px;
        transform-origin: 0px 60px;
        animation: rotatePlaceholder 4.25s ease-in;
      }
    }
    .alive-dialog-warning {
      margin-bottom: 36px;
      border-color: $warning;
      .alive-dialog-body {
        position: absolute;
        width: 5px;
        height: 47px;
        left: 50%;
        top: 10px;
        margin-left: -2px;
        border-radius: 2px;
        background-color: $warning;
      }
      .alive-dialog-dot {
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 7px;
        height: 7px;
        margin-left: -3px;
        border-radius: 50%;
        background-color: $warning;
      }
      .warningAni {
        animation: warning 0.75s infinite alternate;
      }
    }
    .alive-dialog-error {
      margin-bottom: 36px;
      border-color: $error;
      .alive-dialog-line {
        display: block;
        position: absolute;
        top: 37px;
        height: 5px;
        width: 47px;
        background-color: $error;
        border-radius: 2px;
      }
      .alive-dialog-line.left {
        transform: rotate(45deg);
        left: 17px;
      }
      .alive-dialog-line.right {
        transform: rotate(-45deg);
        right: 16px;
      }
      .errorAni {
        position: relative;
        display: block;
        animation: errorAni 0.8s forwards;
      }
    }
  }
  .alive-dialog-footer {
    border-top: 1px solid #eaeaea;
    text-align: right;
    padding: 12px 20px;
    height: 60px;
    .alive-dialog-button {
      outline: none;
      display: inline-block;
      padding: 8px 16px;
      border: none;
      border-radius: 2px;
      background-color: rgba($light-color, 1);
      transition: all 0.1s linear;
      cursor: pointer;
      color: #fff;
      text-align: center;
      &:hover {
        background-color: rgba($light-color, 0.8);
      }
    }
  }
}
</style>