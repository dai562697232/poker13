<template>
  <div id="app">
   <Game></Game>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Game from './components/Game'

export default {
  name: 'App',
  components: {
    HelloWorld,Game
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
  height: 100%;
}
</style>
