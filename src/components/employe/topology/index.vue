<template>
    <div>
        <div class="topo">
            <el-tree :expand-on-click-node="false" class="topo-tree" @node-expand="handExpand" @node-collapse="handCollapse" :data="data" :props="defaultProps" @node-click="handleNoteClick" highlight-current="true" node-key="id" :default-expanded-keys="expandIds">
                <span class="custom-tree-node" :class="{'node-active':activeIds.includes(data.id)}" slot-scope="{node, data}">
                    <span>
                        <span :class="[{'el-icon-school':data.type == 0,'el-icon-s-custom':data.type == 1,'el-icon-user':data.type == 2},'mark']"></span>
                        <span>{{data.name}}</span>
                    </span>
                    <span class="topo-tree-operate" v-if="data.type != 0">
                        <span class="blue el-icon-plus" @click="addNode(data)"></span>
                        <span class="blue el-icon-edit" @click="editNode(data)"></span>
                        <span class="red el-icon-delete" @click="delNode(data)"></span>
                    </span>
                </span>
            </el-tree>
            <div class="topo-content">
                <el-form mode="peopleForm" rules="rules" ref="peopleForm" label-width="100px" class="peopleForm">
                    <el-form-item prop="avatar">
                        <el-avatar :size="60" :fit="fit" :src="peopleForm.url"></el-avatar>
                    </el-form-item>
                    <el-form-item label="名称" prop="name">
                        <el-input :readonly="true" v-model="peopleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="peopleForm.sex">
                            <el-radio :disabled="true" :label="0">男</el-radio>
                            <el-radio :disabled="true" :label="1">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="电话" prop="phone">
                        <el-input :readonly="true" v-model="peopleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input :readonly="true" v-model="peopleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="入职时间" prop="datetime">
                        <el-progress :percentage="peopleForm.datetime"></el-progress>
                    </el-form-item>
                    <el-form-item label="角色" prop="role">
                        <el-radio-group v-model="peopleForm.role">
                            <el-radio :disabled="true" :label="0">经理</el-radio>
                            <el-radio :disabled="true" :label="1">员工</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                        <el-input size="small" v-model="peopleForm.remark">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" type="primary" @click="save(peopleForm)">保存</el-button>
                        <el-button size="small" @click="reset(peopleForm)">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="topo-desc">
                <div class="topo-desc-header">西安旋涡数据科技有限公司</div>
                <div class="topo-desc-context">
                 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name"
      },
      peopleForm: {
        url:require("@/assets/image/company_logo.jpg")
      },
      activeIds: [],
      expandIds: ["0"],
      data: [
        {
          name: "旋涡数据",
          id: "0",
          type: 0,
          children: [
            {
              name: "研发部",
              id: "01",
              type: 1,
              children: [{ name: "杨明翔", type: 2, id: "011" }]
            },
            {
              name: "人事部",
              id: "02",
              type: 1,
              children: [{ name: "朱勇", type: 2, id: "021" }]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handExpand(item) {
      item.isExpand = true;
    },
    handCollapse(item) {
      item.isExpand = false;
    },
    handleNoteClick(item) {},
    save() {},
    reset() {},
    editNode() {},
    delNode() {},
    addNode(){}
  }
};
</script>


<style lang="scss">
.topo {
  display: flex;
  border: 1px dotted #eee;
  height: calc(100% - 2px);
  &-tree {
    flex: 2;
    border-right: 1px dotted #eee;
    .mark {
      margin-right: 5px;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
    &-operate {
      font-size: 12px;
      margin-left: auto;
      span {
        padding: 0 5px;
      }
    }
  }
  &-content {
    border-right: 1px dotted #eee;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-form {
      width: 80%;
      .el-progress {
        top: 8px;
      }
    }
  }
  &-desc {
    flex: 3;
    padding: 20px;
    &-context{
        color: #666;
        text-align: left;
    }
    &-header{
        color: #999;
    }
  }
}
</style>

