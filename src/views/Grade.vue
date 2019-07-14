<template>
  <div class="style_container__2hI6A">
    <div class="style_buttons__z2xtt">
      <p @click="dialogFormVisible = true">
        <span>+</span> 添加班级
      </p>
    </div>
    <div>
      <table class="grade-table">
        <thead>
          <tr>
            <th>班级号</th>
            <th>课程名</th>
            <th>教师号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in gradeData" :key="item.grade_id">
            <td>{{item.grade_name}}</td>
            <td>{{item.subject_text}}</td>
            <td>{{item.room_text}}</td>
            <td>
              <span @click="revision(item)">修改</span>
              <b>|</b>
              <span @click="delGrade({grade_id:item.grade_id,room:item.room_id})">删除</span>
            </td>
          </tr>
        </tbody>
      </table>
      <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="班级名称" :label-width="formLabelWidth">
            <template>
              <el-input v-model="form.name" autocomplete="off" :disabled="flag"></el-input>
            </template>
          </el-form-item>
          <el-form-item label="教室号" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择教室号">
              <el-option label="请选择教室号" value></el-option>
              <el-option
                v-for="(item) in roomData"
                :key="item.room_id"
                :label="item.room_text"
                :value="JSON.stringify({room_text:item.room_text,room_id:item.room_id})"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程" :label-width="formLabelWidth">
            <el-select v-model="form.kc" placeholder="请选择课程">
              <el-option label="请选择课程" value></el-option>
              <el-option
                v-for="(item,index) in subject"
                :key="index"
                :label="item.subject_text"
                :value="JSON.stringify({subject_text:item.subject_text,subject_id:item.subject_id})"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addGrade">确 定</el-button>
        </div>
      </el-dialog>
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
      flag: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        kc: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        grade_id: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters("grade", ["gradeData"]),
    ...mapGetters("room", ["roomData"]),
    ...mapState(["subject"])
  },
  methods: {
    revision(item) {
      this.flag = true;
      this.dialogFormVisible = true;
      this.form.name = item.grade_name;
      this.form.kc = JSON.stringify({
        subject_text: item.subject_text,
        subject_id: item.subject_id
      });
      this.form.region = JSON.stringify({
        room_text: item.room_text,
        room_id: item.room_id
      });
      this.form.grade_id = item.grade_id;
    },
    addGrade() {
      let obj = {};
      if (this.form.name == "") {
        return this.$message.error("班级名称必选");
      }
      if (this.form.region == "") {
        return this.$message.error("教室号必选");
      }
      if (this.form.kc == "") {
        return this.$message.error("科目必选");
      }
      this.dialogFormVisible = false;
      if (this.form.region == "") {
        obj = {
          grade_name: this.form.name,
          ...JSON.parse(this.form.kc)
        };
      } else {
        obj = {
          grade_name: this.form.name,
          ...JSON.parse(this.form.region),
          ...JSON.parse(this.form.kc)
        };
      }
      if (!this.flag) {
        let sd = this.AddGradeData(obj);
      } else {
        obj.grade_id = this.form.grade_id;
        this.UpData(obj);
      }

      async function sleep(interval) {
        return new Promise(resolve => {
          setTimeout(resolve, interval);
        });
      }
      sleep(1000).then(() => {
        console.log(1234);
      });
    },
    delGrade(obj) {
      this.DelGradeData(obj);
    },
    ...mapActions("grade", ["AddGradeData", "DelGradeData", "UpData"])
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.style_container__2hI6A {
  float: left;
  box-sizing: border-box;
  width: 100%;
  height: 1000px;
  padding: 20px;
  border: 1px solid #ccc;
}
.style_buttons__z2xtt {
  width: 158px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  margin-bottom: 25px;
  border-radius: 5px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  color: #fff;
  span {
    font-size: 16px;
    font-weight: 900;
  }
}
.grade-table {
  width: 100%;
  td {
    height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    span {
      color: #00f;
    }
    b {
      font-weight: 100;
    }
  }
}
</style>