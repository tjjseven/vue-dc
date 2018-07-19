<template>
    <div id="app">
        <Headers @sendLocation="getLocation"/>
        <transition name="trans-router" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" :propLocation='stateLocation'/>
            </keep-alive>
        </transition>

        <transition name="trans-router" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive" :propLocation='stateLocation'/>
        </transition>
    </div>
</template>

<script>
import Headers from './components/Headers'
export default {
    name: 'App',
    components: {
        Headers
    },
    data(){
      return {
          stateLocation: {}
      }
    },
    props:{
        propLocation: {
            type: Object
        }
    },
    mounted(){

    },
    methods: {
        // 接收子组件header的emit：sendLocation
        getLocation(data){
            // console.log(data)
            this.stateLocation = data // 传递地址给data：stateLocation，并通过props：propLocaton 传递给子组件location
        }
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
