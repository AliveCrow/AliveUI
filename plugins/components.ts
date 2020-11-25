import SourceCode from '../src/components/SourceCode.vue';

import Switch from '../src/lib/Switch/Switch.vue';
import Button from '../src/lib/Button/Button.vue';
import Dialog from '../src/lib/Dialog/Dialog.vue';
import TabBox from '../src/lib/Tab/TabBox.vue';
import Tabs from '../src/lib/Tab/Tabs.vue';
import Table from '../src/lib/Table/Table.vue';
import TableColumn from '../src/lib/Table/TableColumn.vue';
import Row from '../src/lib/Layout/Row.vue';
import Column from '../src/lib/Layout/Column.vue';
import Container from '../src/lib/Container/Container.vue';
import Header from '../src/lib/Container/Header.vue';
import Aside from '../src/lib/Container/Aside.vue';
import Main from '../src/lib/Container/Main.vue';
import Footer from '../src/lib/Container/Footer.vue';
import {ComponentOptions} from 'vue';
export default   {
  install: (app:ComponentOptions) => {
    // Plugin code goes here
    app.component('SourceCode',SourceCode)
    app.component('Switch',Switch)
    app.component('Button',Button)
    app.component('Dialog',Dialog)
    app.component('TabBox',TabBox)
    app.component('Tabs',Tabs)
    app.component('Table',Table)
    app.component('TableColumn',TableColumn)
    app.component('aliveRow',Row)
    app.component('aliveCol',Column)
    app.component('aliveContainer',Container)
    app.component('aliveHeader',Header)
    app.component('aliveAside',Aside)
    app.component('aliveMain',Main)
    app.component('aliveFooter',Footer)
  }
}

