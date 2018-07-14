<template>
  <div id="app">
     <Headers></Headers>
     <router-view/>
  </div>
</template>

<script>
import Headers from './components/Headers'
export default {
  name: 'App',
  components: {
    Headers
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.margin_top{
  margin-top: 1rem;
}
.price{
    margin: .1rem 0 0 0;
}
.bgcolor{
    background: #efeff4;
    span{
        color: #969696;
    }
}
</style>
