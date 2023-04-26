<template>
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
  <el-button type="danger">123</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less"></style>
