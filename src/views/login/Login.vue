<template>
  <div class="page">
    <div class="page-login">
      <h3 class="login-title">归属</h3><br>
      <el-form :model="formData" :rules="formRules" ref="form">
        <el-form-item prop="username">
          <el-input placeholder="账号" v-model.trim="formData.username" @keyup.enter.native="handleLogin('form')">
            <i slot="prefix" class="icon iconfont icon-account"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" v-model="formData.password" @keyup.enter.native="handleLogin('form')">
            <i slot="prefix" class="icon iconfont icon-password"></i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button :loading="loading" type="primary" @click.prevent="handleLogin('form')">入</el-button>
        </el-form-item>
      </el-form>
    </div>

    <Bubble></Bubble>
  </div>
</template>

<script>
  import {
    isvalidUsername
  } from "@/utils/validate";
 import Bubble from "@/components/BubbleAnimation/Bubble";

  export default {
    name: "Login",
    components:{
      Bubble
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value == "") {
          callback(new Error("账号不能为空"));
        } else {
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error("密码不少于6位"));
        } else {
          callback();
        }
      };
      return {
        // 绑定在表单上的字段取名，固定为formData
        formData: {
          username: "ifredom",
          password: "123456"
        },
        // 绑定在表单上的规则字段取名，固定为formRules
        formRules: {
          username: [{
            required: true,
            trigger: "blur",
            validator: validateUsername
          }],
          password: [{
            required: true,
            trigger: "blur",
            validator: validatePassword
          }]
        },
        loading: false,
        showDialog: false,
        redirect: undefined
      };
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect;
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === "password") {
          this.passwordType = "";
        } else {
          this.passwordType = "password";
        }
      },
      handleLogin(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store
              .dispatch("LoginByUsername", this.formData)
              .then(res => {
                if(res.code===0){
                  this.loading = false;
                  this.$router.push({
                    path:  this.redirect || "/index"
                  });
                }
              })
              .catch(() => {
                this.loading = false;
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    /* background-color: #f2efb6; */
    background: url('../../assets/custom_imags/bg.jpg');
    z-index: 1;
  }

  .page-login {
    width: 360px;
    background-color: #add2c9;
    padding: 15px;
    border-radius: 10px;
    z-index: 99;
  }
</style>