<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="light" unique-opened="true" router="true">
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>


<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #20a0ff;
  }
</style>
