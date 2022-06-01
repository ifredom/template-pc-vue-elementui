<template>
  <div>
    <div class="ta-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchForm">
        <el-form-item label="角色">
          <el-select v-model="searchForm.roleValue" placeholder="请选择">
            <el-option
              class="expand-indent"
              v-for="item in Constants.roleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="searchForm.status" clear placeholder="请选择">
            <el-option key="true" label="是" value="true" />
            <el-option key="false" label="否" value="false" />
          </el-select>
        </el-form-item>
        <el-form-item label="级别">
          <el-input v-model="searchForm.level" placeholder="级别" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="searchForm.description" placeholder="描述" />
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="searchForm.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-button
            @click="onSearch"
            size="small"
            type="primary"
            icon="el-icon-search"
          >
            搜索
          </el-button>
          <el-button size="small" icon="el-icon-refresh" @click="onReset">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ta-table-box">
      <div class="ta-btn-list">
        <el-button
          size="small"
          type="primary"
          icon="el-icon-plus"
          @click="onAdd"
        >
          新增
        </el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column align="left" label="头像" min-width="75">
          <template #default="scope">
            <el-avatar :size="36" :src="scope.row.headerImg" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="status" label="状态码" align="left" width="120">
          <template #default="scope">
            <div>
              <el-tag type="success">{{ scope.row.status }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" fixed="right" label="操作" width="200">
          <template #default="scope">
            <el-button
              size="small"
              type="text"
              icon="el-icon-plus"
              @click="onAdd(scope.row)"
            >
              添加
            </el-button>
            <el-button
              size="small"
              type="text"
              icon="el-icon-edit"
              @click="onEdit(scope.row.ID)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="text"
              icon="el-icon-delete"
              @click="onDelete(scope.row.ID)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
          :current-page="tablePage.page"
          :page-size="tablePage.pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :total="tablePage.total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      searchForm: {
        status: "true",
      },
      tablePage: {
        page: 1,
        pageSize: 10,
        total: 0,
      },
      tableData: [
        {
          date: "2022-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 123,
          headerImg:
            "https://img2.woyaogexing.com/2018/11/08/91b4e6c951b8b2dd!480x480.jpg",
        },
        {
          date: "2022-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 123,
          headerImg:
            "https://img2.woyaogexing.com/2018/11/08/91b4e6c951b8b2dd!480x480.jpg",
        },
        {
          date: "2022-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 123,
          headerImg:
            "https://img2.woyaogexing.com/2018/11/08/91b4e6c951b8b2dd!480x480.jpg",
        },
        {
          date: "2022-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 123,
          headerImg:
            "https://img2.woyaogexing.com/2018/11/08/91b4e6c951b8b2dd!480x480.jpg",
        },
      ],
    };
  },
  methods: {
    onSearch() {
      this.tablePage.page = 2;
      this.tablePage.pagePase = 1;
      this.fetchTableData();
    },
    onReset() {
      this.searchForm = {};
    },
    fetchTableData() {
      console.log("发起http请求");
    },

    onAdd(row) {
      console.log("onAdd" + row);
    },
    onEdit(id) {
      console.log("onEdit" + id);
    },
    onDelete(id) {
      console.log("onDelete" + id);
    },
    // 分页
    handleCurrentChange(val) {
      this.tablePage.page = val;
      this.fetchTableData();
    },
    handleSizeChange(val) {
      this.tablePage.pageSize = val;
      this.fetchTableData();
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
