<sourceCode>
<title>斑马纹</title>
<p>
  通过设置 <span>stripe</span>为一个 <span>true</span>使间隔显示不同颜色，用于区分不同行数据。
</p>
</sourceCode>
<template>
  <Table :data="tableData"  stripe>
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