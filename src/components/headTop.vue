<template>
  <div class="head-top-page">
    <el-breadcrumb separator-class="el-icon-arrow-right"  class="bread-menu">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown  @command="handleCommand" class="down-menu">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleCommand(command) {
        console.log(command)

      }
    }
  }
</script>
<style lang="less" scoped>
  .head-top-page{
    width: 100%;
    background-color: #eff2f7;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bread-menu{
    font-size: 13px;
    padding-left: 20px;

  }
  .down-menu{
    margin-right: 20px;

  }

</style>
