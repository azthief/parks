<template>
  <div id="app">
    <router-view/>
    <MapPage/>
    <ParkPage/>
  </div>
</template>

<script>
import MapPage from './components/MapPage'
import ParkPage from './components/ParkPage'
export default {
  name: 'App',
  components: {
    MapPage,
    ParkPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
