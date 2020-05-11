<template>
  <div class="headerwrap">
    <div class="left_logo">
      <a href>
        <img src="https://m.7hua.com/Tpl/default/Public/images/toplogo.png" alt />
      </a>
    </div>
    <div class="center_search">
      <van-search placeholder="红玫瑰" />
    </div>
    <div class="right_zixun">
      <div class="btn_zixun">在线咨询</div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {};
</script>

<style type="text/css" scoped>
.headerwrap {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 46px;
  line-height: 46px;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  /* max-width: 640px; */
  border-bottom: 0.5px #d9d9d9 solid;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1000;
}
.left_logo {
  width: 26%;
}
.left_logo img {
  float: left;
  margin-left: 3px;
  display: block;
  width: 100%;
}
.center_search {
  width: 50%;
  background-color: #f0f0f0;
  border-radius: 3px;
  height: 28px;
  margin: 0px 10px;
  margin-left: 3px;
  line-height: 28px;
  position: relative;
}
.center_search .van-search {
  padding: 0%;
}
.right_zixun {
  width: 24%;
  margin-right: 10px;
}
.btn_zixun {
  background-color: #66cc66;
  text-align: center;
  border-radius: 3px;
  line-height: 28px;
  width: 100%;
  float: left;
  color: #fff;
  font-size: 14px;
}
</style>