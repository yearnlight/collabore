<template>
    <div class="employe">
        <el-table ref="employeTable" :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="员工姓名" sortable width="120" column-key="date">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="60">
            </el-table-column>
            <el-table-column prop="department" label="部门" width="120">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="120">
            </el-table-column>
            <el-table-column prop="role" label="角色" width="120">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.role == '1' ? 'primary' : 'success'" disable-transitions>{{scope.row.roleName}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="birthday" label="生日" width="120">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="60">
            </el-table-column>
            <el-table-column prop="datetime" label="入职时间" width="120">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="80">
                <template slot-scope="scope">
                    <span :class="{'green':scope.row.status=='在职','red':scope.row.status=='离职'}">{{scope.row.status}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="操作">
                <template slot-scope="scope">
                    <span class="blue">参与项目</span>
                    <span class="blue">调整部门</span>
                    <span class="blue">评价</span>
                    <span class="orange">事件流</span>
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
          birthday: "1992-08-23",
          datetime: "2019-01-23",
          integral: 220,
          role: 0,
          roleName: "Owner",
          phone: "18700263628",
          status: "在职",
          sex:"男",
          age:"27"
        },
        {
          department: "职能部门",
          name: "朱勇",
          birthday: "1992-08-23",
          datetime: "2019-04-23",
          role: 1,
          integral: 129,
          roleName: "普通员工",
          phone: "13500263628",
          status: "离职",
          sex:"男",
          age:"28"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.employe {
}
</style>


