<template>
    <div class="integral">
        <el-table ref="integralTable" :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="员工姓名" sortable width="180" column-key="date">
            </el-table-column>
            <el-table-column prop="department" label="部门" width="180">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="120">
            </el-table-column>
            <el-table-column prop="role" label="角色" width="160">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.role == '1' ? 'primary' : 'success'" disable-transitions>{{scope.row.roleName}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="integral" label="积分" width="160">
            </el-table-column>
            <el-table-column prop="datetime" label="最近更新时间" width="160">
            </el-table-column>
            <el-table-column prop="id" label="操作">
                <template slot-scope="scope">
                    <span class="blue">兑换记录</span>
                    <span class="blue">去兑换</span>
                    <span class="red">删除</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          department: "研发部",
          name: "杨明翔",
          datetime: "2019-08-23 11:45:56",
          integral: 220,
          role: 0,
          roleName: "Owner",
          phone: "18700263628"
        },
        {
          department: "职能部门",
          name: "朱勇",
          datetime: "2019-08-23 11:46:02",
          role: 1,
          integral: 129,
          roleName: "普通员工",
          phone: "13500263628"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.integral {
}
</style>


