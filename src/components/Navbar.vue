<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top:0;
  z-index: 200;
  /* display: flex; */
  background: #f0f2f5;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-size: 20px;

}
.left,
.right,.center{
 float: left;
}
.left,
.right{
 width: 15%;
}
.center {
  width: 70%;
}
</style>