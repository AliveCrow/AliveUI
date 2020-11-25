<template>
  <div class="alive-col"
       :class="`alive-col-${span}`"
       :class="`alive-col-offset-${offset}`"
       ref="aliveCol"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {getCurrentInstance, ref, inject, computed, onMounted} from 'vue';

export default {
  name: 'Column',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    l: Number,
    m: Number,
    s: Number,
  },
  setup(props) {
    const aliveCol = ref<HTMLElement>();
    const parentComponent = inject('parentComponent');
    const gaps = computed(() => {
      return parentComponent ? parentComponent.props.gap : 0;
    });
    onMounted(() => {
      ['l', 'm', 's'].forEach(type => {
        if(props[type]!==undefined){
          aliveCol.value.classList.add(`alive-col-${type}-${props[type]}`);
        }
      });
      if (gaps.value) {
        //取消开头和结尾的gap
        parentComponent.ctx.$el.style.marginLeft = `-${gaps.value / 2}px`;
        parentComponent.ctx.$el.style.marginRight = parentComponent.ctx.$el.style.marginLeft;
        aliveCol.value.style.paddingLeft = `${gaps.value / 2}px`;
        aliveCol.value.style.paddingRight = aliveCol.value.style.paddingLeft;
      }
    });

    return {
      aliveCol
    };
  }

};
</script>
<style lang='scss'>
.alive-col {
  float: left;
}

.alive-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  .alive-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }
}

@for $i from 0 through 24 {
  .alive-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}

$screen:(
  'l' : (max-width:1024px),
  'm' :(max-width:900px),  //
  's' : (max-width:600px) //<=
);

@mixin res($key,$map:$screen){
  @if map-has-key($map,$key){
    @media only screen and #{inspect(map-get($map,$key))}{
      @content;
    }
  }@else {
    @warn '未定义的ScreenWidth'
  }
}
@include res(l){
  .alive-col-l-0{
    display: none;
  }
  @for $i from 0 through 24 {
      .alive-col-l-#{$i}{
        width: (1/24*$i*100)*1%;
      }
  }
}
@include res(m){
  .alive-col-m-0{
    display: none;
  }
  @for $i from 0 through 24 {
    .alive-col-m-#{$i}{
      width: (1/24*$i*100)*1%;
    }
  }
}
@include res(s){
  .alive-col-s-0{
    display: none;
  }
  @for $i from 0 through 24 {
    .alive-col-s-#{$i}{
      width: (1/24*$i*100)*1%;
    }
  }
}

</style>