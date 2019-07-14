<template>
  <div class="box">
    <Header></Header>
    <main>
      <div class="cont-left">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#232A41"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>试卷管理</span>
              </template>
              <el-menu-item index="1-1">添加试题</el-menu-item>
              <el-menu-item index="1-2">查看试题</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级管理</span>
              </template>
              <router-link
                index="2-1"
                :to="{path:'/home/grade',query:{tit:'班级管理'}}"
                tag="el-menu-item"
              >班级管理</router-link>
              <router-link
                index="2-2"
                :to="{path:'/home/room',query:{tit:'教室管理'}}"
                tag="el-menu-item"
              >教室管理</router-link>
              <router-link
                index="2-3"
                :to="{path:'/home/student',query:{tit:'学生管理'}}"
                tag="el-menu-item"
              >学生管理</router-link>
            </el-submenu>
            <template>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航四</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </el-col>
      </div>
      <div class="cont-right">
        <div class="ant-layout" style="padding: 0px 24px 24px;">
          <h2 style="padding: 20px 0px; margin-top: 0px;">{{$route.query.tit}}</h2>
        </div>
        <div class="ant-layout-content">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Header from "../components/Header";
export default {
  props: {},
  components: { Header },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions(["GetSubjectData"]),
    ...mapActions("room", ["GetRoomData"]),
    ...mapActions("grade", ["GetGradeData"])
  },
  created() {
    this.GetSubjectData();
    this.GetRoomData();
    this.GetGradeData();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  display: flex;
  width: 100%;

  .cont-left {
    width: 200px;
    height: 100%;
    background: #232a41;
    overflow: hidden;
    & > * {
      box-sizing: content-box;
    }
    & > div {
      width: 100%;
    }
  }
  .cont-right {
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    padding: 0 20px;
    background: #ccc;
    .ant-layout {
      height: 90px;
    }
    .ant-layout-content {
      flex: 1;
      padding: 0px;
      background: #fff;
      border-radius: 10px;
    }
  }
}
</style>