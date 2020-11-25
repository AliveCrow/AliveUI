<sourceCode>
<title>基础布局</title>
<div>
  <p>当容器中存在<span>aliveHeader, aliveFooter</span>时布局方向是垂直方向,可以通过设置<span>vertical</span>来改为垂直方向</p>
  <p><span>header, footer</span>可以通过设置<span>height</span>来设置高度,默认为60px</p>
  <p><span>aside</span>可以通过设置<span>width</span>来设置宽度,默认为200px</p>
</div>
</sourceCode>
<template>
  <aliveContainer >
    <aliveContainer>
      <aliveAside width="100px">aside</aliveAside>
      <aliveMain>main</aliveMain>
    </aliveContainer>
  </aliveContainer>

  <aliveContainer >
    <aliveHeader height="60px">header</aliveHeader>
    <aliveContainer>
      <aliveAside width="100px">aside</aliveAside>
      <aliveMain>main</aliveMain>
    </aliveContainer>
    <aliveFooter width="60px">footer</aliveFooter>
  </aliveContainer>

  <aliveContainer >
    <aliveHeader height="60px">header</aliveHeader>
    <aliveContainer >
      <aliveAside width="100px">aside</aliveAside>
      <aliveMain>
        <aliveContainer>
            <aliveMain>main</aliveMain>
            <aliveFooter>footer</aliveFooter>
        </aliveContainer>
      </aliveMain>
    </aliveContainer>
  </aliveContainer>
</template>

<script lang="ts">
export default {
  name: 'Base'

};
</script>
