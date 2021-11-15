import{h as e,r as n,o,c as t,a as l,w as s,p as c,f as a}from"./index.34911983.js";var f={setup:()=>({value:e(!1)})};function r(e){e.__sourceCode='<template>\n  <Switch v-model:value="value" />\n</template>\n<script lang=\'ts\'>\nimport { ref } from "vue";\nexport default {\n  setup() {\n    const value = ref(false);\n    return {\n      value,\n    };\n  },\n};\n<\/script>',e.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"基础用法",loc:{start:{column:10,line:2,offset:22},end:{column:14,line:2,offset:26},source:"基础用法"}}],loc:{start:{column:3,line:2,offset:15},end:{column:22,line:2,offset:34},source:"<title>基础用法</title>"}},e.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"绑定",loc:{start:{column:6,line:3,offset:40},end:{column:8,line:3,offset:42},source:"绑定"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"v-model",loc:{start:{column:14,line:3,offset:48},end:{column:21,line:3,offset:55},source:"v-model"}}],loc:{start:{column:8,line:3,offset:42},end:{column:28,line:3,offset:62},source:"<span>v-model</span>"}},{type:2,content:"到一个",loc:{start:{column:28,line:3,offset:62},end:{column:31,line:3,offset:65},source:"到一个"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"Boolean",loc:{start:{column:37,line:3,offset:71},end:{column:44,line:3,offset:78},source:"Boolean"}}],loc:{start:{column:31,line:3,offset:65},end:{column:51,line:3,offset:85},source:"<span>Boolean</span>"}},{type:2,content:"类型的变量",loc:{start:{column:51,line:3,offset:85},end:{column:56,line:3,offset:90},source:"类型的变量"}}],loc:{start:{column:3,line:3,offset:37},end:{column:60,line:3,offset:94},source:"<p>绑定<span>v-model</span>到一个<span>Boolean</span>类型的变量</p>"}}}r(f),f.render=function(e,l,s,c,a,f){const r=n("Switch");return o(),t(r,{value:c.value,"onUpdate:value":l[1]||(l[1]=e=>c.value=e)},null,8,["value"])};var u={setup:()=>({value:e(!1)})};function i(e){e.__sourceCode="<template>\n  <Switch v-model:value=\"value\" trueColor=\"#433\" falseColor=\"#888\" />\n</template>\n<script lang='ts'>\nimport {ref} from 'vue';\nexport default {\n  setup() {\n    const value = ref(false);\n    return {\n      value,\n    };\n  },\n\n};\n<\/script>\n<style lang='scss'>\n\n\n</style>",e.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"自定义颜色",loc:{start:{column:8,line:2,offset:20},end:{column:13,line:2,offset:25},source:"自定义颜色"}}],loc:{start:{column:1,line:2,offset:13},end:{column:21,line:2,offset:33},source:"<title>自定义颜色</title>"}},e.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:" 自定义两个状态的颜色,设置属性",loc:{start:{column:4,line:3,offset:37},end:{column:18,line:4,offset:55},source:"\n  自定义两个状态的颜色,设置属性"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"trueColor",loc:{start:{column:24,line:4,offset:61},end:{column:33,line:4,offset:70},source:"trueColor"}}],loc:{start:{column:18,line:4,offset:55},end:{column:40,line:4,offset:77},source:"<span>trueColor</span>"}},{type:2,content:"和",loc:{start:{column:40,line:4,offset:77},end:{column:41,line:4,offset:78},source:"和"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"falseColor",loc:{start:{column:2,line:5,offset:85},end:{column:12,line:5,offset:95},source:"falseColor"}}],loc:{start:{column:41,line:4,offset:78},end:{column:2,line:6,offset:103},source:"<span\n>falseColor</span\n>"}}],loc:{start:{column:1,line:3,offset:34},end:{column:5,line:7,offset:108},source:"<p>\n  自定义两个状态的颜色,设置属性<span>trueColor</span>和<span\n>falseColor</span\n>\n</p>"}}}i(u),u.render=function(e,l,s,c,a,f){const r=n("Switch");return o(),t(r,{value:c.value,"onUpdate:value":l[1]||(l[1]=e=>c.value=e),trueColor:"#433",falseColor:"#888"},null,8,["value"])};var p={};function m(e){e.__sourceCode="<template>\n  <Switch loading />\n</template>\n<script lang='ts'>\nexport default {};\n<\/script>",e.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"加载中",loc:{start:{column:10,line:2,offset:22},end:{column:13,line:2,offset:25},source:"加载中"}}],loc:{start:{column:3,line:2,offset:15},end:{column:21,line:2,offset:33},source:"<title>加载中</title>"}},e.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"设置",loc:{start:{column:6,line:3,offset:39},end:{column:8,line:3,offset:41},source:"设置"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"loading",loc:{start:{column:14,line:3,offset:47},end:{column:21,line:3,offset:54},source:"loading"}}],loc:{start:{column:8,line:3,offset:41},end:{column:28,line:3,offset:61},source:"<span>loading</span>"}},{type:2,content:"为一个",loc:{start:{column:28,line:3,offset:61},end:{column:31,line:3,offset:64},source:"为一个"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"Boolean",loc:{start:{column:37,line:3,offset:70},end:{column:44,line:3,offset:77},source:"Boolean"}}],loc:{start:{column:31,line:3,offset:64},end:{column:51,line:3,offset:84},source:"<span>Boolean</span>"}},{type:2,content:"类型",loc:{start:{column:51,line:3,offset:84},end:{column:53,line:3,offset:86},source:"类型"}}],loc:{start:{column:3,line:3,offset:36},end:{column:57,line:3,offset:90},source:"<p>设置<span>loading</span>为一个<span>Boolean</span>类型</p>"}}}m(p),p.render=function(e,l,s,c,a,f){const r=n("Switch");return o(),t(r,{loading:""})};var d={name:"SwitchPage",setup(){let n=e(!1);return{SwitchDefault:f,SwitchCustomColor:u,SwitchLoading:p,codeShow:n,hidden:()=>{n.value=!n.value}}}};const g=s("data-v-6ef43a4c");c("data-v-6ef43a4c");const y={class:"content"},v=l("span",null," Switch开关组件 ",-1);a();const C=g((function(e,s,c,a,f,r){const u=n("SourceCode");return o(),t("div",y,[v,l(u,{component:a.SwitchDefault},null,8,["component"]),l(u,{component:a.SwitchCustomColor},null,8,["component"]),l(u,{component:a.SwitchLoading},null,8,["component"])])}));d.render=C,d.__scopeId="data-v-6ef43a4c";export default d;
