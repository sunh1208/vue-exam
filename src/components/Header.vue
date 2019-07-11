<template>
  <header>
    <div>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
        alt
      />
    </div>
    <div @mouseover="topUser" @mouseout="unTopUser">
      <p>
        <i>user_name</i>
        <span>
          <img
            src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png"
            alt
          />
        </span>
      </p>
      <transition name="el-fade-in-linear">
        <ol v-show="topFlag">
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ol>
      </transition>
    </div>
  </header>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return { topFlag: false };
  },
  computed: {},
  methods: {
    topUser() {
      this.topFlag = true;
    },
    unTopUser() {
      this.topFlag = false;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
header {
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  border-bottom: 1px solid #000;
  box-shadow: 1px 0px 3px 5px #ccc;
  & > div:nth-of-type(1) {
    float: left;
    height: 70%;
    line-height: 60px;
    padding-top: 15px;
    overflow: hidden;
    img {
      width: 150px;
    }
  }
  & > div:nth-of-type(2) {
    position: relative;
    height: 60px;
    float: right;
    ol {
      position: absolute;
      top: 60px;
      right: -10px;
      width: 130px;
      background: #f00;
      list-style-type: none;
    }
    p {
      width: 200px;
      height: 100%;
      padding-top: 15px;
      & > * {
        float: right;
      }
      i {
        line-height: 30px;
      }
      span {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
  & > * {
    box-sizing: content-box;
  }
}
</style>