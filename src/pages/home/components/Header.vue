<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .header
    display:flex
    line-height: .86rem
    background:$bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex:1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      border-radius .1rem
      background :#fff
      color :#ccc
      text-align :left
    .header-right
      width: 1.24rem
      float: right
      text-align:center
</style>
