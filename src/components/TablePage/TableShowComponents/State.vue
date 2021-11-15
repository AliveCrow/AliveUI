<sourceCode>
<title>表格行状态</title>
<p>
  可将表格内容 highlight 显示，方便区分
  「成功 <span>success-row</span>、信息 <span>info-row</span>、
  警告 <span>warning-row</span>、危险 <span>error-row</span>」等内容。
</p>
</sourceCode>
<template>
  <Table :data="tableData" stripe :rowClassName="tableRowClassName">
    <TableColumn prop="date" name="日期" width="200px"/>
    <TableColumn prop="name" name="姓名" width="100px"/>
    <TableColumn prop="address" name="地址"/>
  </Table>
</template>
<script lang='ts'>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2020-01-01',
          name: 'John Brown',
          address: 'New York No. 1 Lake Park'
        },
        {
          date: '2016-05-04',
          name: 'Jim Green',
          address: 'Sydney No. 1 Lake Park'
        },
        {
          date: '2016-05-01',
          name: 'Joe Black',
          address: 'New York No. 1 Lake Park'
        },
        {
          date: '2016-05-03',
          name: 'Joe Black',
          address: 'Sydney No. 1 Lake Park'
        }
      ]
    };
  },
  setup(props: any, context: any) {
    const tableRowClassName = ({row,rowIndex}) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
    const a = tableRowClassName({})
    return {
      tableRowClassName
    }
  }
};
</script>