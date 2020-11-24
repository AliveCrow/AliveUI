<sourceCode>
<title>基础用法</title>
<p>data接受一个数组,<span>TableColumn</span>中使用<span>prop</span>属性来对应对象中的键名用<span>label</span>属性来定义表格的列名,使用 <span>width</span>来定义列宽</p>
</sourceCode>
<template>
  <Table :data="tableData" >
    <TableColumn prop="date" name="日期" width="200px"  />
    <TableColumn prop="name" name="姓名" width="100px" />
    <TableColumn prop="address" name="地址" />
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
    }
  },
};
</script>