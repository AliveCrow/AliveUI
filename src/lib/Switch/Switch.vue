<template>
  <div
    id="SwitchContainer"
    @click="toggleSwitch"
    :class="
      [value ? 'alive-true ' : 'alive-false '] +
      [trueColor ? trueColor : falseColor]
    "
    :style="'background-color:' + [value ? trueColor : falseColor]"
  >
    <span
      :class="
        [loading ? ' alive-switch-loading ' : ''] +
        [value ? ' alive-ani_true alive-circle' : ' alive-circle']
      "
    >
      <span class="alive-switch-loading-circel"> </span>
    </span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Switch",
  props: {
    value: Boolean,
    loading: Boolean,
    trueColor: String,
    falseColor: String,
  },
  setup(props: { value: any; }, context: { emit: (arg0: string, arg1: boolean) => void; }) {
    const toggleSwitch = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggleSwitch,
    };
  },
};
</script>
<style  lang='scss'>

.alive-false {
  background-color: $error;
}
.alive-true {
  background-color: $success;
}

#SwitchContainer {
  width: 40px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  transition: all 0.6s cubic-bezier(1, 1.67, 0.21, 0.84);
  .alive-circle {
    position: absolute;
    left: 3px;
    display: inline-block;
    height: $circle;
    width: $circle;
    border-radius: 50%;
    margin: 2px 0;
    background-color: #fff;
    transition: all 0.6s cubic-bezier(0.53, 1.66, 0, 0.53);
  }
  .alive-ani_true {
    width: 4px;
    border-radius: 5px;
    left: 27px;
  }
  .alive-switch-loading {
    box-shadow: 0 0 7px rgba(#000, 0.5);
    .alive-switch-loading-circel {
      position: absolute;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      border: 2px solid red;
      border-color: #fff $light-color $light-color #fff;
      background-color: transparent;
      animation: switch-rotate 1s linear infinite;
    }
    @keyframes switch-rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
  @keyframes circle {
    0% {
      transform: translateX(0px);
    }
    50% {
      width: 20px;
    }
    100% {
      transform: translateX(27px);
      width: 4px;
      border-radius: 5px;
    }
  }
}
</style>