<sourceCode>
<title>
  设置标题和内容
</title>
<p>默认不显示标题,可以通过设置 <span>title</span></p>
</sourceCode>

<template>
    <Button @click="openDialog">显示标题与按钮</Button>
    <Dialog v-model:visible="visibleDialog" title="标题"  bottomBtn="关闭">
      显示标题
    </Dialog>
</template>

<script lang='ts'>
import { ref } from "vue";

export default {
  setup() {
    const visibleDialog = ref(false);
    const openDialog = () => {
      visibleDialog.value = !visibleDialog.value;
    }
    return {
      visibleDialog,
      openDialog,
    }
  },
};
</script>