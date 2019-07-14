<template>
  <div class="box">
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label>
          <el-input v-model="formInline.student_name" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-select v-model="formInline.classRoom" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-select v-model="formInline.classId" placeholder="请选择教室号">
            <el-option
              :label="item.room_text"
              :value="item.room_id"
              v-for="(item) in roomData"
              :key="item.room_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="resolve" @click="resolve">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="studentData.slice((currentPage4-1)*studentpage,currentPage4*studentpage)"
        style="width: 100%"
      >
        <el-table-column prop="student_name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="student_id" label="学号" width="180"></el-table-column>
        <el-table-column prop="address" label="班级" ></el-table-column>
        <el-table-column prop="address" label="教室"></el-table-column>
        <el-table-column prop="student_pwd" label="密码" width="190"></el-table-column>
        <el-table-column prop="address" label="操作">
          <span>删除</span>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="studentpage"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="studentData.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      currentPage4: 1,
      studentpage: 10,
      formInline: {
        student_name: "",
        classRoom: "",
        classId: ""
      }
    };
  },
  computed: {
    ...mapGetters("student", ["studentData"]),
    ...mapGetters("room", ["roomData"])
  },
  methods: {
    resolve() {
      this.formInline.student_name = "";
      this.resolveData();
    },
    primary() {
      let obj = JSON.parse(JSON.stringify(this.formInline));
      this.PrimaryData(obj);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.studentpage = val;
      this.currentPage4 = 1;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
    },
    ...mapActions("student", ["GetStudentData", "PrimaryData", "resolveData"])
  },
  created() {
    this.GetStudentData();
  },
  mounted() {}
};
</script>
<style scoped lang="">
.box {
  padding: 20px;
}
</style>