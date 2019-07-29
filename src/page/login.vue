<template>
  <div class="login-page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="login-container"  v-show="showLogin">
        <div class="manage-top">
          <p>Yee后台管理系统</p>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
          <el-form-item  prop="user">
            <el-input type="" v-model="ruleForm.user"  placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input type="password" v-model="ruleForm.password"  placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过得新用户，自动注册</p>
        <p class="tip">注册过的用户可凭账号密码登录</p>
      </section>
    </transition>
  </div>
</template>

<script>
  import {login} from '@/api/getData'
  import {mapActions, mapState} from 'vuex'

  export default {
    data(){
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      return {
        ruleForm: {
          user: '',
          password: '',

        },
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
        showLogin: false
      }
    },
    mounted(){
      this.showLogin = true
    },
    computed: {
      ...mapState(['adminInfo'])
    },
    methods: {
      ...mapActions(['getAdminData']),
     async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const res = await login({user_name: this.ruleForm.user, password: this.ruleForm.password})
            if(res.status == 1) {
             this.$message({
               type: 'success',
               message: '登录成功'
             })
              setTimeout(() => {
                this.$router.push({
                  path: '/manage'
                })
              }, 800)
            } else {
              this.$message({
                type: 'warning',
                message: res.message
              })
            }
          } else {
            this.$notify.error({
              title: '错误',
              message: '请输入正确的用户名密码',
              offset: 100
            })
            return false;
          }
        });
      },
    },
    watch: {
      adminInfo: function (newValue) {
        if(newValue.id) {
          this.$message({
            type: 'success',
            message: '检测到您之前登录过，将自动登录'
          })
          this.$router.push({
            path:'/manage'
          })
        }

      }

    }
  }
</script>

<style lang="less" scoped>
  @import '../style/mixin';
  .login-page{
    background: #324057;
    .login-container{
      .wh(320px, 210px);
      .ctp(320px, 210px);
      background-color: #fff;
      padding: 25px;
      border-radius: 5px;
      text-align: center;
    }
    .manage-top{
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      font-size: 36px;
      color: #fff;
    }
    .login-btn{
      width: 320px;
      height: 38px;
    }
    .tip{
      color: red;
      font-size: 12px;
    }
    .form-fade-enter-active, .form-fade-leave-active {
      transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active{
      transform: translate3d(0, -50px, 0);
      opacity: 0;
    }
  }

</style>
