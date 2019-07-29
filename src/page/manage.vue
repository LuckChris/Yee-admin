<template>
  <div class="manage-page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" class="menu-list" >
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            text-color="#fff"
            theme="dark"
            router
            active-text-color="#20a0ff">
          <el-menu-item index="manage">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="userlist">用户列表</el-menu-item>
              <el-menu-item index="1-2">商家列表</el-menu-item>
              <el-menu-item index="1-3">食品列表</el-menu-item>
              <el-menu-item index="1-4">订单列表</el-menu-item>
              <el-menu-item index="1-5">订管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">添加商铺</el-menu-item>
              <el-menu-item index="1-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show:false
      }
    },
    methods:{
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/mixin.less";
  .menu-list{
    min-height:100%;
    background-color: rgb(50, 64, 87);
  }
  .el-submenu,.el-menu-item{
    min-width: 0;
  }

</style>
