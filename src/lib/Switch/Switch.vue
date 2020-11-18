<template>
  <div
    id="SwitchContainer"
    @click="toggleSwitch"
    :class="[value ? 'alive-true' : 'alive-false']"
  >
    <span :class="[value ? 'alive-ani_true alive-circle' : 'alive-circle']">
    </span>
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
  transition: all 0.4s cubic-bezier(1, 1.67, 0.21, 0.84);
  .alive-circle {
    position: absolute;
    left: 3px;
    display: inline-block;
    height: $circle;
    width: $circle;
    border-radius: 50%;
    margin: 2px 0;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.53, 1.66, 0, 0.53);
  }

  .alive-ani_true {
    width: 4px;
    border-radius: 5px;
    left: 27px;
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