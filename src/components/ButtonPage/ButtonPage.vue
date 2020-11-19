<template>
  <div class="content">
    <span> Button按钮组件 </span>
    <ShowBox>
      <template v-slot:title>
        <a> 基础用法 </a>
      </template>
      <template v-slot:description>
        <p>使用<Blod>type ,round, icon</Blod>属性来定义 Button 的样式</p>
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code.base">
        <code class='html'>
        </code>
        </pre>
      </template>
      <template v-slot:content>
        <div class="btn-type">
          <Button />
          <Button type="primary" />
          <Button type="success" />
          <Button type="warning" />
          <Button type="error" />
          <Button type="primary" :round="true" />
          <Button type="primary" round icon="iconcloud-download-outline">
            download
          </Button>
          <Button type="primary" round icon="iconfolder-add-outline">
          </Button></div
      ></template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title> 按钮尺寸 </template>
      <template v-slot:description>
        通过设置 <Blod>size</Blod> 属性来配置
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code.size">
        <code class='html'>
        {{code.size}}
        </code>
        </pre>
      </template>
      <template v-slot:content>
        <Button type="primary" size="large">large</Button>
        <Button type="primary">default</Button>
        <Button type="primary" size="small" @click="click">small</Button>
      </template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title>
        <a> 按钮禁用 </a>
      </template>
      <template v-slot:description>
        通过设置<Blod>disable</Blod>来将按钮禁用
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code.disable">
        <code class='html'>
        {{code.disable}}
        </code>
        </pre>
      </template>
      <template v-slot:content>
        <Button type="primary" disable />
      </template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title> 长按钮 </template>
      <template v-slot:description>
        通过设置属性 <Blod>long</Blod> 可将按钮宽度设置为 100%
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code.long">
        <code class='html'>
        {{code.long}}
        </code>
        </pre>
      </template>
      <template v-slot:content>
        <Button type="primary" long />
        <Button type="error" long />
      </template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title> 按钮加载 </template>
      <template v-slot:description>
        通过设置 <Blod>loading</Blod> 来进入加载状态
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code.loading">
      <code class='html'>
      {{code.loading}}
      </code>
      </pre>
      </template>
      <template v-slot:content>
        <Button type="primary" icon="iconloader-outline" round loading />
        <Button type="primary" icon="iconloader-outline" round loading
          >loading...</Button
        >
      </template>
    </ShowBox>
  </div>
</template>
<script>
import Button from "/@/lib/Button/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const code = {
      base: `
  <Button />
  <Button type="primary" />
  <Button type="success" />
  <Button type="warning" />
  <Button type="error" />
  <Button type="primary" :round="true" />
  <Button type="primary" round icon="iconcloud-download-outline">
  download
  </Button>
  <Button type="primary" round icon="iconfolder-add-outline">
  </Button>
`,
      disable: `
  <Button type="primary" disable />
`,
      long: `
  <Button type="primary" long />
  <Button type="error" long />
`,
      loading: `
  <Button type="primary" icon="iconloader-outline" round loading />
  <Button type="primary" icon="iconloader-outline" round loading>loading...</Button>
`,
      size: `
  <Button type="primary" size="large">large</Button>
  <Button type="primary">default</Button>
  <Button type="primary" size="small" @click="click">small</Button>
`,
    };
    const click = () => {
      console.log("click");
    };

    return {
      code,
      click,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>