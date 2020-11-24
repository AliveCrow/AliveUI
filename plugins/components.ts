import SourceCode from '../src/components/SourceCode.vue';

import Switch from '../src/lib/Switch/Switch.vue';
import Button from '../src/lib/Button/Button.vue';
import Dialog from '../src/lib/Dialog/Dialog.vue';
import TabBox from '../src/lib/Tab/TabBox.vue';
import Tabs from '../src/lib/Tab/Tabs.vue';
import Table from '../src/lib/Table/Table.vue';
import TableColumn from '../src/lib/Table/TableColumn.vue';
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

  }
}

