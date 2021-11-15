<template>
  <div :class="[ type ==='flex'?'alive-row-flex ':'alive-row ']+[` alive-row-is-justify-${justify}`]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {provide, ref, getCurrentInstance} from 'vue';

export default {
  name: 'Row',
  props: {
    gap: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'float'
    },
    justify: {
      type: String,
      default: 'start'
    }

  },
  setup(props, context) {
    const parentComponent = getCurrentInstance();
    provide('parentComponent', parentComponent);

  }
};
</script>
<style lang='scss'>
.alive-row {
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

.alive-row-flex {
  display: flex !important;
}

@mixin when($type) {
  $name: 'alive-row-is-justify-'+$type;
  .#{$name} {
    justify-content: $type;
    @content
  }
}

@include when(flex-end) {
}

@include when(center) {
}

@include when(space-between) {
}

@include when(space-around) {
}
</style>