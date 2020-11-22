<sourceCode>
<title>
  设置内容居中
</title>
<p>默认居中,可以设置 <span>center</span>为一个 <span>boolean</span>来设置居中</p>
</sourceCode>

<template>
  <Button @click="openDialog">内容居中</Button>
  <Dialog v-model:visible="visibleDialog" >
    内容
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