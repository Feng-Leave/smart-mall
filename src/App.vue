<template>
  <div id="app">
    <router-view/>
    <van-button type="primary">主要按钮</van-button>
    <van-switch v-model="checked" />
    <van-rate v-model="value" />
  </div>

</template>

<script>
export default {
  data () {
    return {
      checked: true,
      value: 5
    }
  }
}
</script>

<style lang="less">

</style>
