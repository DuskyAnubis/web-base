<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-icon-setting">
              {{userName}}
          </span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'admin'
    }
  },
  computed: {
    userName () {
      let userName = this.$store.getters.name
      if (userName.lenth === null) {
        userName = this.name
      }
      return userName
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      }
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 24px;
    line-height: 70px;
    background: #20a0ff;
    color: #fff
  }

  .header .logo{
    float: left;
    width: 240px;
    text-align: center;
  }

  .user-info{
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff
  }
</style>

