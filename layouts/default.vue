<template>
<div style="position:relative">
  <nuxt/>
  <div class="footer">
    <div class="copyright">
      ©2018 fengqiang powered by vue-ssr and mongodb
    </div>
    <a class="beian" href="http://www.miitbeian.gov.cn">皖ICP备18004590号</a>
  </div>
</div>
</template>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.footer {
  position: absolute;
  bottom: -78px;
  left: 0;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: 13px;
  color: #797979;
}

.copyright {
  text-align: center;
}

.beian {
  color: #797979;
}
</style>
