<template>
  <div class="content">
    <span> 代码示例 </span>
    <ShowBox>
      <template v-slot:title>
        <a>基础用法</a>
      </template>
      <template v-slot:description>
        <p>绑定<Blod>v-model</Blod>到一个<Blod>Boolean</Blod>类型的变量。</p>
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code">
              <code class='html' >
              {{ code }}
              </code>
          </pre>
      </template>
      <template v-slot:content>
        <Switch v-model:value="value" />
      </template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title>
        <a>自定义颜色</a>
      </template>
      <template v-slot:description>
        <p>
          自定义两个状态的颜色,设置属性<Blod>trueColor</Blod>和<Blod
            >falseColor</Blod
          >
        </p></template
      >
      <template v-slot:code>
        <pre v-vuehighlightjs="code1">
              <code class='html' >
  
              </code>
          </pre>
      </template>
      <template v-slot:content>
        <Switch v-model:value="value1" trueColor="#433" falseColor="#888" />
      </template>
    </ShowBox>
    <ShowBox>
      <template v-slot:title>
        <a>加载中</a>
      </template>
      <template v-slot:description>
        <p>设置<Blod>loading</Blod>为一个<Blod>Boolean</Blod>类型</p>
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="code2">
              <code class='html' >
  
              </code>
          </pre>
      </template>
      <template v-slot:content>
        <Switch loading />
      </template>
    </ShowBox>
</template>

<script lang="ts">
import Switch from "../../lib/Switch/Switch.vue";
import ExampleBox from "../ExampleBox.vue";
import { ref } from "vue";

export default {
  name: "SwitchPage",
  components: { Switch, ExampleBox },
  data() {
    return {
      code: `
    <Switch v-model:value="value" />

    export default {
      setup() {
        const value = ref(true)

        return {
          value
        }
      }
    }
      `,
      code1: `
      <Switch v-model:value="value" trueColor="#433" falseColor="#888" />

      export default {
        setup() {
          const value = ref(true)

          return {
            value
          }
        }
      }
      `,
      code2: `
      <Switch loading />

      export default {
      }
      `,
    };
  },
  setup() {
    const value = ref(false);
    const value1 = ref(false);
    let codeShow = ref(false);
    const hidden = () => {
      codeShow.value = !codeShow.value;
    };
    return {
      value,
      value1,
      codeShow,
      hidden,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
