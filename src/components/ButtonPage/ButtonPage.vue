<template>
  <div class="content">
    <span> 代码示例 </span>
    <div class="show-box">
      <a> 按钮类型 </a>
      <div class="btn-type">
        <Button />
        <Button type="primary" />
        <Button type="success" />
        <Button type="warning" />
        <Button type="error" />
        <Button type="primary" :round="true" />
        <Button type="primary" disable />
        <Button type="primary" round icon="iconcloud-download-outline">
          download
        </Button>
        <Button type="primary" round icon="iconfolder-add-outline"> </Button>
      </div>
    </div>
    <div class="show-box">
      <a> 长按钮 </a>
      <div class="btn-type">
        <Button type="primary" long />
        <Button type="error" long />
      </div>
    </div>
    <div class="show-box">
      <a> 按钮加载 </a>
      <div class="btn-type">
        <Button type="primary" icon="iconloader-outline" round loading />
        <Button type="primary" icon="iconloader-outline" round loading
          >loading...</Button
        >
      </div>
    </div>
    <div class="show-box">
      <a> 按钮尺寸 </a>
      <div class="btn-type">
        <Button type="primary" size="large">large</Button>
        <Button type="primary">default</Button>
        <Button type="primary" size="small" @click="click">small</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "/@/lib/Button/Button.vue";
export default {
  components: {
    Button,
  },

  setup() {
    const click = () => {
      console.log("click");
    };

    return {
      click,
    };
  },
};
</script>
<style lang='scss' scoped>
.btn-type {
  .alive-button__container {
    margin: 5px;
  }
}
</style>