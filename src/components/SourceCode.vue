<template>
  <div>
    <ShowBox>
      <template v-slot:title>
        <a>{{ component.__title.children[0].content }}</a>
      </template>
      <template v-slot:description>
        <blockquote class="description">
          <p v-html="component.__description.loc.source"></p>
        </blockquote>
      </template>
      <template v-slot:code>
        <pre v-vuehighlightjs="component.__sourceCode">
              <code class='html' >
              </code>
          </pre>
      </template>
      <template v-slot:content>
        <component :is="component"></component>
      </template>
    </ShowBox>
  </div>
</template>
<script lang='ts'>
export default {
  props: {
    component: Object,
  },
};
</script>
<style lang='scss'>
</style>