<template>
  <div class="index">
    <Carousel></Carousel>
    <List></List>
    <Footers></Footers>
  </div>
</template>

<script>
import Carousel from './Carousel'
import List from './List'
import Footers from './Footers'
export default {
  name: 'index',
  components: {
    Carousel,
    List,
    Footers
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
