<sourceCode>
<title>基础布局</title>
<div>
  采用24栅格系统，将区域进行24等分
  <ul  style="margin-left: 20px">
    <li style="list-style: disc!important" ><p>使用<span>aliveRow</span>在水平方向创建一行</p></li>
    <li style="list-style: disc!important"><p>使用<span>aliveCol</span>在<span>aliveRow</span>中插入,然后在其中放入自己的内容</p></li>
    <li style="list-style: disc!important">通过设置<span>span</span>参数,指定范围,范围是<span>1~24</span></li>
  </ul>
</div>
</sourceCode>
<template>
  <aliveRow >
    <aliveCol :span="24" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
  </aliveRow>
  <aliveRow >
    <aliveCol :span="12" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="12" ><div class="alive-layout-content bg-logo-color-light"></div></aliveCol>
  </aliveRow>
  <aliveRow >
    <aliveCol :span="8" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="8" ><div class="alive-layout-content bg-logo-color-light"></div></aliveCol>
    <aliveCol :span="8" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>

  </aliveRow>
  <aliveRow >
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color-light"></div></aliveCol>
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color-light"></div></aliveCol>
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color"></div></aliveCol>
    <aliveCol :span="4" ><div class="alive-layout-content bg-logo-color-light"></div></aliveCol>
  </aliveRow>
</template>


