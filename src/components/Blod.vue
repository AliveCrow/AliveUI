<template>
  <div class="blod" :style="{ color: color }">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "Blod",
  props: {
    color: {
      type: String,
      default: "rgb(255, 79, 87)",
    },
  },
};
</script>

<style lang="scss"  >
.blod {
  font-weight: 600;
  display: inline;
  & > a {
    cursor: pointer !important;
    display: inline-block;
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
}
</style>