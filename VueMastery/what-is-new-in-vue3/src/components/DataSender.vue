<template>
  <div class="hello">
  <button @click="sendData">Send data</button>
  </div>
</template>

<script>
export default {
  name: 'DataSender',
  emits: [{
    'sending-start': null,
    'sending-completed': (payload) => {
      if (payload.duration & payload.response){
        return true
      } else {
        return false
      }

    }
}],
  // emits: ['sending-start'],
  methods: {
    sendData() {
      this.$emit('sending-start')

 

      
      this.$emit('sending-completed', {
        duration: 2,
        response: "response  :)"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
