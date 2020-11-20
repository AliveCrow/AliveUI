<template>
  <div class="content">
    <span> Dialog对话框组件 </span>
    <ShowBox>
      <template v-slot:title>基本用法</template>
      <template v-slot:description> Dialog 弹出一个对话框 </template>
      <template v-slot:code> </template>
      <template v-slot:content>
        <Button @click="toggleDialog" type="primary">默认用法</Button>
        <Button @click="toggleDialog" type="success">Success</Button>
        <Button type="warning" @click="openDialog">dakai</Button>
      </template>
    </ShowBox>
    <Dialog v-model:visible="visibleDialog" icon="success" :handleClose="close">
    </Dialog>
  </div>
</template>
<script lang='ts'>
import Dialog from "../../lib/Dialog/Dialog.vue";
import Button from "../../lib/Button/Button.vue";
import { ref } from "vue";
import { $Dialog } from "../../utils/openDialog";

export default {
  components: { Dialog, Button },

  setup() {
    const visibleDialog = ref(false);
    const toggleDialog = () => {
      visibleDialog.value = !visibleDialog.value;
    };
    const close = () => {
      console.log("close");
    };
    const openDialog = () => {
      $Dialog({
        title: "title",
        content: "title",
        icon: "success",
        noFooter: true,
        noContent: true,
        noTitle: true,
        handleClose: () => {
          console.log("handleClose");
        },
      });
    };

    return {
      visibleDialog,
      toggleDialog,
      close,
      openDialog,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>