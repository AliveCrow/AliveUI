<template>
    <label class="alive-radio ">
      <input class="alive-radio__radio" :disabled="disabled"  type="radio" :name="modelValue" :value="value">
      <span class="alive-radio__label"></span>
      <span class="alive-radio__content">
        <slot >选项</slot>
      </span>
    </label>
</template>

<script lang="ts">
export default {
  name: 'Radio',
  props:{
    modelValue:String,
    value:String||Number||Boolean,
    disabled:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    return {
    }
  }
};
</script>
<style  lang='scss'>
.alive-radio{
  display: inline-flex;
  align-items: center;
  margin: 5px;
  &__radio{
    position: absolute;
    opacity: 0;
  }
  &__label::before{
    content: '';
    background-color: #f4f4f4;
    border-radius: 100%;
    border: 1px solid $border-color;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    margin-right: 8px;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
  }
  &__radio:checked~&__content {
    color: red;
  }
  &__radio:checked+&__label::before{
    background-color: $light-color;
    box-shadow: inset 0 0 0 4px #f4f4f4;
  }
  &__radio:focus+&__label:before{
    outline: none;
    border-color: $light-color;
  }
  &__radio:checked:disabled+&__label::before{
    outline: none;
    cursor: not-allowed;
    border-color: rgba($light-color,.5);
    background-color: rgba($light-color,.5);
    box-shadow: inset 0 0 0 4px #f4f4f4;
  }
  &__radio:disabled + &__label:before{
    outline: none;
    cursor: not-allowed;
    box-shadow: inset 0 0 0 4px #f4f4f4;
  }
  &__radio:disabled~&__content{
    outline: none;
    cursor: not-allowed;
    color: rgba($light-color,.5);
  }
}

</style>