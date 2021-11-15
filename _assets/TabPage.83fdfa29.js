import{r as e,o as t,c as n,f as o,a as l,d as s}from"./index.04682d5e.js";var c={};const a=s("内容1"),i=s("内容2"),f=s("内容3");function p(e){e.__sourceCode='<template>\n  <Tabs :index="0">\n    <TabBox title="项目1">内容1</TabBox>\n    <TabBox title="项目2" >内容2</TabBox>\n    <TabBox title="项目3">内容3</TabBox>\n  </Tabs>\n</template>\n\n<script lang="ts">\nexport default {\n\n}\n<\/script>',e.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"基础用法",loc:{start:{column:8,line:2,offset:20},end:{column:12,line:2,offset:24},source:"基础用法"}}],loc:{start:{column:1,line:2,offset:13},end:{column:20,line:2,offset:32},source:"<title>基础用法</title>"}},e.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"index",loc:{start:{column:10,line:3,offset:42},end:{column:15,line:3,offset:47},source:"index"}}],loc:{start:{column:4,line:3,offset:36},end:{column:22,line:3,offset:54},source:"<span>index</span>"}},{type:2,content:"可以指定当前激活的是哪一项,默认从零开始, ",loc:{start:{column:22,line:3,offset:54},end:{column:44,line:3,offset:76},source:"可以指定当前激活的是哪一项,默认从零开始, "}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"title",loc:{start:{column:50,line:3,offset:82},end:{column:55,line:3,offset:87},source:"title"}}],loc:{start:{column:44,line:3,offset:76},end:{column:62,line:3,offset:94},source:"<span>title</span>"}},{type:2,content:"可以设置项目名称",loc:{start:{column:62,line:3,offset:94},end:{column:70,line:3,offset:102},source:"可以设置项目名称"}}],loc:{start:{column:1,line:3,offset:33},end:{column:74,line:3,offset:106},source:"<p><span>index</span>可以指定当前激活的是哪一项,默认从零开始, <span>title</span>可以设置项目名称</p>"}}}p(c),c.render=function(s,c,p,u,r,d){const m=e("TabBox"),b=e("Tabs");return t(),n(b,{index:0},{default:o((()=>[l(m,{title:"项目1"},{default:o((()=>[a])),_:1}),l(m,{title:"项目2"},{default:o((()=>[i])),_:1}),l(m,{title:"项目3"},{default:o((()=>[f])),_:1})])),_:1})};var u={};const r=s("内容1"),d=s("内容2"),m=s("内容3");function b(e){e.__sourceCode='<template>\n  <Tabs :index="0">\n    <TabBox title="项目1">内容1</TabBox>\n    <TabBox title="项目2" >内容2</TabBox>\n    <TabBox title="项目3" disabled>内容3</TabBox>\n  </Tabs>\n</template>\n\n<script lang="ts">\nexport default {\n\n}\n<\/script>',e.__title={type:1,ns:0,tag:"title",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"禁用",loc:{start:{column:8,line:2,offset:20},end:{column:10,line:2,offset:22},source:"禁用"}}],loc:{start:{column:1,line:2,offset:13},end:{column:18,line:2,offset:30},source:"<title>禁用</title>"}},e.__description={type:1,ns:0,tag:"p",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"设置",loc:{start:{column:4,line:3,offset:34},end:{column:6,line:3,offset:36},source:"设置"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"disabled",loc:{start:{column:12,line:3,offset:42},end:{column:20,line:3,offset:50},source:"disabled"}}],loc:{start:{column:6,line:3,offset:36},end:{column:27,line:3,offset:57},source:"<span>disabled</span>"}},{type:2,content:"为",loc:{start:{column:27,line:3,offset:57},end:{column:28,line:3,offset:58},source:"为"}},{type:1,ns:0,tag:"span",tagType:0,props:[],isSelfClosing:!1,children:[{type:2,content:"true",loc:{start:{column:34,line:3,offset:64},end:{column:38,line:3,offset:68},source:"true"}}],loc:{start:{column:28,line:3,offset:58},end:{column:45,line:3,offset:75},source:"<span>true</span>"}},{type:2,content:"来禁用",loc:{start:{column:45,line:3,offset:75},end:{column:48,line:3,offset:78},source:"来禁用"}}],loc:{start:{column:1,line:3,offset:31},end:{column:52,line:3,offset:82},source:"<p>设置<span>disabled</span>为<span>true</span>来禁用</p>"}}}b(u),u.render=function(s,c,a,i,f,p){const u=e("TabBox"),b=e("Tabs");return t(),n(b,{index:0},{default:o((()=>[l(u,{title:"项目1"},{default:o((()=>[r])),_:1}),l(u,{title:"项目2"},{default:o((()=>[d])),_:1}),l(u,{title:"项目3",disabled:""},{default:o((()=>[m])),_:1})])),_:1})};var T={setup:()=>({TabDefault:c,TabDisabled:u})};const y={class:"content"},g=l("span",null,"Tab组件",-1);T.render=function(o,s,c,a,i,f){const p=e("SourceCode");return t(),n("div",y,[g,l(p,{component:a.TabDefault},null,8,["component"]),l(p,{component:a.TabDisabled},null,8,["component"])])};export default T;