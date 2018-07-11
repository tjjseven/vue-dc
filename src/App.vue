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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.yd-slider, .address, .login, .register, .user, .order, .list, .opinion{
  margin-top: 1rem;
}
</style>
