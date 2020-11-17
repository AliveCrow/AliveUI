<template>
  <nav>
    <div @click="toggleAside" class="fold_box">
      <span :class="[asideVisible ? 'fold fold_click' : 'fold ']"> </span>
    </div>
    <img src="../assets/logo.png" alt="" class="nav_logo" width="121" />
  </nav>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };

    return {
      toggleAside,
      asideVisible,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/var";

nav {
  display: none;
}

@media (max-width: 650px) {
  nav {
    min-height: 60px;
    display: block;
    box-shadow: 0 0 5px rgba(#000, 0.2);
    padding: 10px;
    position: fixed;
    background-color: #fff;
    z-index: 90;
    width: 100%;

    .nav_logo {
      display: block;
      width: 50px;
      margin-left: 20px;
    }

    .fold {
      display: block;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      height: 3px;
      border-radius: 5px;
      background-color: $light-color;
      transition: all 0.25s ease;
      &:before {
        transition: all 0.25s ease;
        position: absolute;
        top: -9px;
        content: "";
        display: block;
        width: 30px;
        height: 3px;
        background-color: $light-color;
      }

      &:after {
        transition: all 0.25s ease;
        content: "";
        top: 9px;
        position: absolute;
        display: block;
        width: 30px;
        height: 3px;
        background-color: $light-color;
      }
    }

    .fold_click {
      height: 0;

      &:before {
        transform: rotate(45deg);
        top: 0;
      }

      &:after {
        top: 0;
        transform: rotate(-45deg);
      }
    }
    .fold_box {
      position: absolute;
      width: 30px;
      height: 40px;
      display: none;
    }
  }
  .nav_logo {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .fold_box {
    display: block !important;
  }

  .fold_click {
    height: 0;
    &:before {
      transform: rotate(45deg);
      top: 0;
    }
    &:after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
}
</style>
