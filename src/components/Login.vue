<template>
<div class="login">
    <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
        <el-form-item label="用户名" prop='username'>
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop='password'>
            <el-input  type='password' v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click='reset'>重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
// 引入axios
import axios from 'axios'
 export default {
    data() {
        return {
            form: {
            username: '',
            password: '',
            },
            rules:{
            username: [
                { required: true, message: '请输入用户名', trigger: 'change' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
                ],
            password: [
                { required: true, message: '请输入密码', trigger: 'change' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
                ],
            }
        }  
    },
    methods: {
      login() {
        // console.log('submit!');
        this.$refs.form.validate((valid)=> {
            // console.log(valid);  true
            if(valid){
               axios({
                   method:"post",
                   url:'http://localhost:8888/api/private/v1/login',
                   data:this.form
               }).then(res=>{
                  if(res.data.meta.status === 200){
                    this.$message({
                        message: '恭喜你，登录成功',
                        type: 'success'})
                    this.$router.push('home')
                  }else{
                    this.$message.error('用户名或密码错误');
                  }
               })
            }else{
                return false
            }
        })
      },
      reset(){
          this.$refs.form.resetFields()
      }
    }
  }
</script>

<style lang="less">
.login {
    width:100%;
    height:100%;
    background:#2d434c;
    overflow: hidden;
    .el-form{
        width: 400px;
        background: #fff;
        margin: 200px auto;
        padding: 55px 40px 15px 40px;
        border-radius: 20px;
    }
}
</style>
