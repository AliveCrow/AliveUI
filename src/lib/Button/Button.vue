<template>
  <button
    :class="
      'alive-button ' +
      type +
      [round ? ' round ' : ''] +
      [long ? ' long ' : ''] +
      [disable ? ' disable ' : ''] +
      [loading ? ' loading ' : ''] +
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
    <div v-else style="display:inline">
      <svg
        :class="'icon' + [loading ? ' icon-loading' : '']"
        aria-hidden="true"
      >
        <use :xlink:href="'#' + icon"></use>
      </svg>
      <slot></slot>
    </blockquote>
  </button>
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

  setup(props) {},
};
</script>
<style lang='scss'>
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

.icon {
  margin: 0 3px;
  transform-origin: center center;
  transform: scale(1.5);
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
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.large {
  height: 38px;
}
.small {
  height: 22px;
}
</style>