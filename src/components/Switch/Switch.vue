<template>
  <div
    id="SwitchContainer_app"
    @click="toggleSwitch"
    :class="[value ? 'true' : '']"
  >
    <span :class="[value ? 'ani_true circle' : 'circle']"> </span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggleSwitch,
    };
  },
};
</script>
<style scoped lang='scss'>
$circle: 16px;
.true {
  background-color: rgb(19, 206, 102) !important;
}
#SwitchContainer_app {
  width: 40px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  background-color: red;
  transition: all 0.4s cubic-bezier(1, 1.67, 0.21, 0.84);
  .circle {
    position: absolute;
    left: 2px;
    display: inline-block;
    height: $circle;
    width: $circle;
    border-radius: 50%;
    margin: 2px 0;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.53, 1.66, 0, 0.53);
  }

  .move_right {
    transform: translateX(20px);
  }

  .ani_true {
    width: 4px;
    border-radius: 5px;
    left: 27px;
  }
  .ani_false {
    position: absolute;
    left: 2px;
    display: inline-block;
    height: $circle;
    width: $circle;
    border-radius: 50%;
    margin: 2px 0;
    background-color: #fff;
    animation: circle 0.3s ease-in-out forwards 0.1s reverse !important;
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