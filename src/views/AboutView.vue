<script  >

import dataJson from "../data/data.json"
export default ({
    data() {

    return{
        destiantionRouter: dataJson.destinations
      }
}
})
</script>


<template>
   <div class="about">



    <h1> About
    <router-link
        v-for="destination in destiantionRouter"
        :key="destination.id"
        :to="destination.slug"
        >
        <h2>{{ destination.name}}</h2>
        <img class="img" :src="`src/assets/images/${destination.image}`" alt="destination.name">
   </router-link>
  </h1>
  </div>

</template>

<style scoped>
@media  (min-width: 1024px) {
  .about {
    min-height: 100vh;

    align-items: center;
  }
}
img {
  display: inline-block;
  max-block-size: 200px;
}
</style>
