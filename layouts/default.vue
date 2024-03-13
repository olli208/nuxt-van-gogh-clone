<template>
  <div>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    </link>
    <TheMainNav />
    <div id="app">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheMainNav from "@/components/TheMainNav";

export default {
  components: TheMainNav,
};
</script>

<style>
* {
  box-sizing: border-box;
  color: #fff;
}

h1 {
  font-size: 2.23rem;
}

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  height: 100vh;
  width: 100vw;
  scrollbar-color: #fff transparent;
  scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
}
</style>
