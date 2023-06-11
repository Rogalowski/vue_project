<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export function useTitle(options) {
  const { ob = false,  title="dd"} = options
  const options2 = { ob: true,  title: "ff"} 
  console.log("ob",ob)
  console.log("title", title)
  console.log("options2",options2)
  console.log("options",options)
}
useTitle({ob: null, title: "HAHA"})
useTitle( "sdkfh")

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    sendData() {
      this.$emit('sending-start')



      
      this.$emit('sending-complete')
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
