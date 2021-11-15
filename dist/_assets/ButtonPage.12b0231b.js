import{r as n,o as t,c as e,a as o,b as l,d as s,F as c,w as i,p as r,f as p}from"./index.34911983.js";var u={};const a={class:"btn-type"},f=s("默认按钮"),d=s(" download ");function m(n){n.__sourceCode='<template>\n  <div class="btn-type">\n    <Button>默认按钮</Button>\n    <Button type="primary" />\n    <Button type="success" />\n    <Button type="warning" />\n    <Button type="error" />\n    <Button type="primary" :round="true" />\n    <Button type="primary" round icon="iconcloud-download-outline">\n      download\n    </Button>\n    <Button type="primary" round icon="iconfolder-add-outline"> </Button>\n  </div>\n</template>\n<script lang=\'ts\'>\nexport default {};\n<\/script>',n.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"基础用法",loc:{start:{column:8,line:2,offset:20},end:{column:12,line:2,offset:24},source:"基础用法"}}],loc:{start:{column:1,line:2,offset:13},end:{column:20,line:2,offset:32},source:"<title>基础用法</title>"}},n.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"使用",loc:{start:{column:4,line:3,offset:36},end:{column:6,line:3,offset:38},source:"使用"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"type ,round, icon",loc:{start:{column:12,line:3,offset:44},end:{column:29,line:3,offset:61},source:"type ,round, icon"}}],loc:{start:{column:6,line:3,offset:38},end:{column:36,line:3,offset:68},source:"<span>type ,round, icon</span>"}},{type:2,content:"属性来定义 Button 的样式",loc:{start:{column:36,line:3,offset:68},end:{column:52,line:3,offset:84},source:"属性来定义 Button 的样式"}}],loc:{start:{column:1,line:3,offset:33},end:{column:56,line:3,offset:88},source:"<p>使用<span>type ,round, icon</span>属性来定义 Button 的样式</p>"}}}m(u),u.render=function(s,c,i,r,p,u){const m=n("Button");return t(),e("div",a,[o(m,null,{default:l((()=>[f])),_:1}),o(m,{type:"primary"}),o(m,{type:"success"}),o(m,{type:"warning"}),o(m,{type:"error"}),o(m,{type:"primary",round:!0}),o(m,{type:"primary",round:"",icon:"iconcloud-download-outline"},{default:l((()=>[d])),_:1}),o(m,{type:"primary",round:"",icon:"iconfolder-add-outline"})])};var y={};function g(n){n.__sourceCode="<template>\n  <Button type=\"primary\" disabled />\n</template>\n<script lang='ts'>\nexport default {};\n<\/script>",n.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"按钮禁用",loc:{start:{column:8,line:2,offset:20},end:{column:12,line:2,offset:24},source:"按钮禁用"}}],loc:{start:{column:1,line:2,offset:13},end:{column:20,line:2,offset:32},source:"<title>按钮禁用</title>"}},n.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"通过设置",loc:{start:{column:4,line:3,offset:36},end:{column:8,line:3,offset:40},source:"通过设置"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"disabled",loc:{start:{column:14,line:3,offset:46},end:{column:22,line:3,offset:54},source:"disabled"}}],loc:{start:{column:8,line:3,offset:40},end:{column:29,line:3,offset:61},source:"<span>disabled</span>"}},{type:2,content:"来将按钮禁用",loc:{start:{column:29,line:3,offset:61},end:{column:35,line:3,offset:67},source:"来将按钮禁用"}}],loc:{start:{column:1,line:3,offset:33},end:{column:39,line:3,offset:71},source:"<p>通过设置<span>disabled</span>来将按钮禁用</p>"}}}g(y),y.render=function(o,l,s,c,i,r){const p=n("Button");return t(),e(p,{type:"primary",disabled:""})};var B={};const _=s(" loading... ");function C(n){n.__sourceCode='<template>\n  <Button type="primary" icon="iconloader-outline" round loading />\n  <Button type="primary" icon="iconloader-outline" round loading>\n    loading...\n  </Button>\n</template>\n<script lang=\'ts\'>\nexport default {};\n<\/script>',n.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"按钮加载",loc:{start:{column:8,line:2,offset:20},end:{column:12,line:2,offset:24},source:"按钮加载"}}],loc:{start:{column:1,line:2,offset:13},end:{column:20,line:2,offset:32},source:"<title>按钮加载</title>"}},n.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:" 通过设置 ",loc:{start:{column:4,line:3,offset:36},end:{column:10,line:3,offset:42},source:" 通过设置 "}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"loading",loc:{start:{column:16,line:3,offset:48},end:{column:23,line:3,offset:55},source:"loading"}}],loc:{start:{column:10,line:3,offset:42},end:{column:30,line:3,offset:62},source:"<span>loading</span>"}},{type:2,content:" 来进入加载状态",loc:{start:{column:30,line:3,offset:62},end:{column:38,line:3,offset:70},source:" 来进入加载状态"}}],loc:{start:{column:1,line:3,offset:33},end:{column:42,line:3,offset:74},source:"<p> 通过设置 <span>loading</span> 来进入加载状态</p>"}}}C(B),B.render=function(s,i,r,p,u,a){const f=n("Button");return t(),e(c,null,[o(f,{type:"primary",icon:"iconloader-outline",round:"",loading:""}),o(f,{type:"primary",icon:"iconloader-outline",round:"",loading:""},{default:l((()=>[_])),_:1})],64)};var S={};function h(n){n.__sourceCode='<template>\n  <Button type="primary" long />\n  <Button type="error" long />\n</template>\n<script lang=\'ts\'>\nexport default {};\n<\/script>',n.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"长按钮",loc:{start:{column:8,line:2,offset:20},end:{column:11,line:2,offset:23},source:"长按钮"}}],loc:{start:{column:1,line:2,offset:13},end:{column:19,line:2,offset:31},source:"<title>长按钮</title>"}},n.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"通过设置属性 ",loc:{start:{column:4,line:3,offset:35},end:{column:11,line:3,offset:42},source:"通过设置属性 "}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"long",loc:{start:{column:17,line:3,offset:48},end:{column:21,line:3,offset:52},source:"long"}}],loc:{start:{column:11,line:3,offset:42},end:{column:28,line:3,offset:59},source:"<span>long</span>"}},{type:2,content:" 可将按钮宽度设置为 100%",loc:{start:{column:28,line:3,offset:59},end:{column:43,line:3,offset:74},source:" 可将按钮宽度设置为 100%"}}],loc:{start:{column:1,line:3,offset:32},end:{column:47,line:3,offset:78},source:"<p>通过设置属性 <span>long</span> 可将按钮宽度设置为 100%</p>"}}}h(S),S.render=function(l,s,i,r,p,u){const a=n("Button");return t(),e(c,null,[o(a,{type:"primary",long:""}),o(a,{type:"error",long:""})],64)};var T={};const v=s("large"),b=s("default"),z=s("small");function w(n){n.__sourceCode='<template>\n  <Button type="primary" size="large">large</Button>\n  <Button type="primary">default</Button>\n  <Button type="primary" size="small">small</Button>\n</template>\n<script lang=\'ts\'>\nexport default {};\n<\/script>',n.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"按钮尺寸",loc:{start:{column:8,line:2,offset:20},end:{column:12,line:2,offset:24},source:"按钮尺寸"}}],loc:{start:{column:1,line:2,offset:13},end:{column:20,line:2,offset:32},source:"<title>按钮尺寸</title>"}},n.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"通过设置 ",loc:{start:{column:4,line:3,offset:36},end:{column:9,line:3,offset:41},source:"通过设置 "}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"size",loc:{start:{column:15,line:3,offset:47},end:{column:19,line:3,offset:51},source:"size"}}],loc:{start:{column:9,line:3,offset:41},end:{column:26,line:3,offset:58},source:"<span>size</span>"}},{type:2,content:" 属性来配置",loc:{start:{column:26,line:3,offset:58},end:{column:32,line:3,offset:64},source:" 属性来配置"}}],loc:{start:{column:1,line:3,offset:33},end:{column:36,line:3,offset:68},source:"<p>通过设置 <span>size</span> 属性来配置</p>"}}}w(T),T.render=function(s,i,r,p,u,a){const f=n("Button");return t(),e(c,null,[o(f,{type:"primary",size:"large"},{default:l((()=>[v])),_:1}),o(f,{type:"primary"},{default:l((()=>[b])),_:1}),o(f,{type:"primary",size:"small"},{default:l((()=>[z])),_:1})],64)};var x={setup:()=>({ButtonDefault:u,ButtonDisabled:y,ButtonLoading:B,ButtonLong:S,ButtonSize:T})};const D=i("data-v-24a88d9d");r("data-v-24a88d9d");const L={class:"content"},j=o("span",null," Button按钮组件 ",-1);p();const F=D((function(l,s,c,i,r,p){const u=n("SourceCode");return t(),e("div",L,[j,o(u,{component:i.ButtonDefault},null,8,["component"]),o(u,{component:i.ButtonSize},null,8,["component"]),o(u,{component:i.ButtonLong},null,8,["component"]),o(u,{component:i.ButtonDisabled},null,8,["component"]),o(u,{component:i.ButtonLoading},null,8,["component"])])}));x.render=F,x.__scopeId="data-v-24a88d9d";export default x;
