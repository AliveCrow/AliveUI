<template>
  <div class="alive-button__container">
    <button
      :class="
        'alive-button ' +
        type +
        [round ? ' round ' : ''] +
        [long ? ' long ' : ''] +
        [loading ? ' loading ' : ''] +
        [disable ? ' disable ' : ''] +
        [size ? ` ${size}` : '']
      "
      :type="type"
      :icon="icon"
      :round="round"
      :disable="disable"
      :loading="loading"
      :size="size"
      :long="long"
    >
      <slot v-if="!icon">CLICK ME</slot>
      <div v-else style="display: flex">
        <div>
          <svg
            :class="'icon alive-icon' + [loading ? ' icon-loading' : '']"
            aria-hidden="true"
          >
            <use :xlink:href="'#' + icon"></use>
          </svg>
        </div>
        <span>
          <slot></slot>
        </span>
      </div>
    </button>
  </div>
</template>
<script lang='ts'>
export default {
  name: "Button",
  props: {
    content: String, //内容
    type: String, //主题
    icon: String, //图标
    round: {
      type: Boolean,
      default: false,
    }, //是否圆
    disable: Boolean, //是否禁用
    loading: Boolean, //加载
    size: String, //不同尺寸
    long: Boolean, //长按钮
  },

  setup(props, context) {
    //未加外层div不需要此操作
    // inheritAttrs: false; //取消默认绑定事件
    // const { ...rest } = context.attrs;
    // return { rest };
  },
};
</script>
<style lang='scss'>
.alive-button__container {
  display: inline-block;
  .alive-button {
    padding: 0 15px;
    height: 32px;
    background-color: #fff;
    outline: none;
    border: 1px solid $secondary;
    border-radius: 4px;
    transition: all 0.2s linear;
    &:hover {
      box-shadow: 0 1px 6px rgba($logo-color, 0.6);
      transform: translateY(-1px);
    }
  }
  .primary {
    background-color: $primary;
    color: #fff;
    border-color: $primary;
    &:hover {
      box-shadow: 0 1px 6px rgba($primary, 0.6);
    }
  }
  .info {
    background-color: $info;
    color: #fff;
    border-color: $info;
    &:hover {
      box-shadow: 0 1px 6px rgba($info, 0.6);
    }
  }
  .success {
    background-color: $success;
    color: #fff;
    border-color: $success;
    &:hover {
      box-shadow: 0 1px 6px rgba($success, 0.6);
    }
  }
  .warning {
    background-color: $warning;
    color: #fff;
    border-color: $warning;
    &:hover {
      box-shadow: 0 1px 6px rgba($warning, 0.6);
    }
  }
  .error {
    background-color: $error;
    color: #fff;
    border-color: $error;
    &:hover {
      box-shadow: 0 1px 6px rgba($error, 0.6);
    }
  }
  .round {
    border-radius: 16px;
  }
  .long {
    width: 100%;
  }
  .disable {
    cursor: not-allowed;
    background-color: $border-color;
    border: transparent;
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
  .loading {
    background-color: rgba($primary, 0.4);
    border: none;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  .icon-loading {
    animation: loading 2s linear infinite;
  }
  .large {
    height: 38px;
  }
  .small {
    height: 22px;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>