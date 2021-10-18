<template xmlns:router-link="http://www.w3.org/1999/html">
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "~@/assets/styles/reset.scss";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size:16px;
  line-height: 1.5;
  font-family:$font-hei;
  background: #f5f5f5;
}
</style>
