<sourceCode>
<title>flex布局</title>
<div>
  <ul  style="margin-left: 20px">
    <li style="list-style: disc!important" ><p>设置<span>type='flex'</span>设置为flex布局</p></li>
    <li style="list-style: disc!important"><p>设置<span>justify</span>来设置对齐方式,可选的方式有: <span>center, flex-end, space-between, space-around</span></p></li>
  </ul>
</div>
</sourceCode>
<template>
  <aliveRow :gap="20" type="flex" >
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow :gap="20" type="flex" justify="center">
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow :gap="20" type="flex" justify="flex-end">
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow :gap="20" type="flex" justify="flex-end">
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow  type="flex" justify="space-between">
    <aliveCol :span="5"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="5"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="5"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow  type="flex" justify="space-around">
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
</template>

