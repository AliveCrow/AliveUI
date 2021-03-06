## 下载与使用
### 安装

```npm 
    npm install alive-work-ui -S
```

## 引入 `alive-work-ui`
#### 完整引入
```javascript
    import 'alive-work-ui/package/lib/alive-work-ui.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { AliveWorkUI } from 'alive-work-ui'
    
    createApp(App)
      .use(AliveWorkUI)
      .mount('#app') 
```
>以上代码便完成了 alive-work-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入
>如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：
```javascript
    import 'alive-work-ui/package/lib/alive-work-ui.css'
    import { createApp } from 'vue'
    import { Button } from 'alive-work-ui'
    import App from './App.vue'
    
    createApp(App).use(Button).mount('#app')
```
>完整组件列表和引入方式

```javascript
    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        TabBox,
        Tabs,
        Table
    } from 'alive-work-ui'
    
    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('TabBox',TabBox)
        .component('Tabs',Tabs)    
        .component('Table',Table)         
```


   

    
