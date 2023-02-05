<script>
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

<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
<div class="home">
    <div id="nav" class="wrapper">




        <router-link to="/">Home</router-link>
        <router-link to="/about">About Dest</router-link>
        <router-link to="/myview">MyView</router-link>| &nbsp;
        <router-link
        v-for="destination in destiantionRouter"
        :key="destination.id"
        :to="destination.slug"
        >
        {{ destination.name}}
        <!-- <img class="img" :src="`src/assets/images/${destination.image}`" alt="destination.name"> -->
        </router-link>

    </div>
    </div>

  </header>
  <div class="container" >
        <router-view/>
    </div>
</template>


<style scoped>

</style>
