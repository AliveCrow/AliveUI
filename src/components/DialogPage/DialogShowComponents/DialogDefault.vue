  <sourceCode>
      <title>基本用法</title>
      <p>Dialog 弹出一个对话框</p>
  </sourceCode>

  <template>
  <blockquote>
    <Button @click="openDialog" type="success">Success</Button>
    <Dialog v-model:visible="visibleDialog"> </Dialog>
  </blockquote>
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
