<template>
  <div class="style_container__2hI6A">
    <div class="style_buttons__z2xtt">
      <p @click="addRoom">
        <span>+</span> 添加教室
      </p>
    </div>
    <div>
      <table class="room-table">
        <thead>
          <tr>
            <th>教室号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in roomData" :key="item.room_id">
            <td>{{item.room_text}}</td>
            <td>
              <span @click="del(item.room_id)">删除</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("room", ["roomData"])
  },
  methods: {
    ...mapActions("room", ["GetRoomData", "addRoomAsync", "delRoomAsync"]),
    addRoom() {
      this.open();
    },
    del(room_id) {
      this.delopen(room_id);
    },
    delopen(room_id) {
      this.$confirm("您将删除此班级, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.delRoomAsync(room_id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    open() {
      this.$prompt("请输入教师号", "添加教室", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]{5}$/,
        inputErrorMessage: "请输入正确的教室号"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "添加成功"
          });
          this.addRoomAsync(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
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
.room-table {
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