<script>
import dataJson from "../data/data.json"
export default ({
    data() {

    return{
        destiantionRouter: dataJson.destiantions
      }
}
})
</script>

<template>

    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div id="nav" class="wrapper">




        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/myview">MyView</router-link>
        <router-link
        v-for="destination in destiantionRouter"
        :key="destination.id"
        :to="destination.slug"
        >
        <h1>{{ destination.name}}</h1>
        <!-- <img :src="`/images/${destination.image}`" alt="destination.name"> -->
        </router-link>

    </div>
  </header>
  <div class="container" >
        <router-view/>
    </div>
</template>


<style scoped>

</style>
