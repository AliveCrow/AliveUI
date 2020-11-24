<sourceCode>
<title>
  打开 Dialog
</title>
<p></p>
</sourceCode>

<template>
  <Button @click="openDialog" type="success">success</Button>
</template>

<script lang='ts'>
import {$Dialog} from '../../../lib/openDialog';

export default {

  setup() {
    const openDialog = () => {
      $Dialog({
        bottomBtn:'关闭按钮',
        content:'内容123',
      })
    }
    return {
      openDialog,
    }
  },
};
</script>