<template>
  <table class=" alive-table-wrapper" style="width: 100%">
    <caption v-if="caption!==''" v-html="caption"></caption>
    <colgroup>
      <col v-for="vNode in vNodes" :width="vNode.props.width">
    </colgroup>
    <thead>
    <tr class="alive-table tr-border alive-table-head" >
      <th v-for="vNode in vNodes" :class="{'th-td-border':border}">{{ vNode.props.name }}</th>
    </tr>
    </thead>
    <tbody class=" ">
    <tr v-for="(item,index) in data"
        class="tr-border alive-table alive-table-body"
        :class="{'alive-table-stripe':stripe}"
        :class="rowClassname(item,index)"
    >
      <td  v-for="vNode in vNodes" :class="{'th-td-border':border}">{{ item[vNode.props.prop] }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {ref,onMounted}from 'vue';
import TableColumn from './TableColumn.vue';

export default {
  name: 'Table',
  components: {TableColumn},
  props: {
    data: Array,
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    caption:{
      type:String,
      default:''
    },
    rowClassName:{
      type:Function,
    }
  },
  setup(props:any, context) {
    const vNodes = context.slots.default();
    const rowClassname = (row,rowIndex)=>{
      if(props.rowClassName){
        console.log(props.rowClassName({row,rowIndex}));
        return props.rowClassName({row,rowIndex})
      }
    }
    return {
      vNodes,
      TableColumn,
      rowClassname
    };
  }
};
</script>
<style lang="scss" scoped>
.info-row{
  background-color: $info!important;
  color: #fff;
}
.warning-row{
  background-color:rgba($warning,1)!important;
  color: #fff;
}
.success-row{
  background-color: $success!important;
  color: #fff;
}
.error-row{
  background-color: $error!important;
  color: #fff;
}
</style>
<style lang='scss'>

.alive-table-wrapper {
  caption{
    font-size: 1.4rem;
    font-weight: 500;
    text-align: left;
  }
  width: 100%;
  vertical-align: baseline;
  border-collapse: collapse;
  color: $color;

  th, td {
    padding: 0 10px;
    font-size: 1rem;
  }
  .th-td-border{
    border: 1px solid rgba($color, .2);
  }

  .alive-table {
    height: 50px;
  }

  .tr-border {
    border-bottom: 1px solid rgba($color, .2);
  }

  .alive-table-stripe {
    &:nth-of-type(2n) {
      background-color: rgba($color,.1);
    }
  }

  .alive-table-head {
  }

  .alive-table-body {
    transition: all .25s;

    &:hover {
      background-color: rgba($color, .1);
    }
  }
}

</style>
