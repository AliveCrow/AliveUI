
<sourceCode>
<title>响应式</title>
<div>
  提供了三个响应尺寸<span>l, m, s</span>
  <ul  style="margin-left: 20px">
    <li style="list-style: disc!important" ><p><span>l</span>小于1024px的时候的<span>span</span>大小</p></li>
    <li style="list-style: disc!important"><p><span>m</span>小于900px的时候的<span>span</span>大小</p></li>
    <li style="list-style: disc!important"><span>s</span>小于600px的时候的<span>span</span>大小</li>
  </ul>
</div>
</sourceCode>
<template>
  <aliveRow :gap="20">
    <aliveCol :span="6" :l="1"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6" :m="2" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6" :s="3" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="6"  ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
</template>