<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content` ">
<!--slot插槽，用户传入什么就是什么-->
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name: 'Layout'
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
.layout-wrapper{
  display:flex;
  flex-direction:column;
  height:100vh;
}
.content{
  flex-grow: 1;
  overflow:auto;
}
</style>