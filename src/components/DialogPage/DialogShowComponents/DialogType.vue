<sourceCode>
<title>
  设置图标样式
</title>
<p></p>
</sourceCode>

<template>
  <Button @click="openDialog('success')" type="success">success</Button>
  <Button @click="openDialog('warning')" type="warning">warning</Button>
  <Button @click="openDialog('error')" type="error">error</Button>
  <Dialog v-model:visible="visibleDialog" :icon="type" >
  </Dialog>
</template>

<script lang='ts'>
import { ref } from "vue";

export default {
  setup() {
    const visibleDialog = ref(false);
    const type = ref('default')
    const openDialog = (t:string) => {
      type.value = t
      visibleDialog.value = !visibleDialog.value;
    }
    return {
      visibleDialog,
      openDialog,
      type
    }
  },
};
</script>