import Dialog from './Dialog/Dialog.vue';
import Button from './Button/Button.vue';
import Switch from './Switch/Switch.vue';
import Tabs from './Tab/Tabs.vue';
import TabBox from './Tab/TabBox.vue';
import {ComponentOptions} from 'vue';
const AliveWorkUI =  {
    install: (app:ComponentOptions) => {
        // Plugin code goes here
        app.component('Switch',Switch)
        app.component('Button',Button)
        app.component('Dialog',Dialog)
        app.component('TabBox',TabBox)
        app.component('Tabs',Tabs)
    }
}

export default AliveWorkUI