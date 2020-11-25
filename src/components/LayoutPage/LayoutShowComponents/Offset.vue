<sourceCode>
<title>左右偏移</title>
<p>通过设置<span>offset</span>来对内容进行偏移</p>
</sourceCode>
<template>
  <aliveRow >
    <aliveCol :span="6" :offset="6" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  :offset="6"><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow >
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6" :offset="6" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow >
    <aliveCol :span="6"  :offset="6"><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
</template>


