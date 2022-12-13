<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  background: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: #fff;
}
* {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none !important;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.maxWidth {
  max-width: 1920px;
  margin: 0 auto;
}
li {
  list-style: none;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;

  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  // background-color: rgba(0, 0, 0, 1);
  background: #f7a403;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
.centerWidth {
  /* width: 1596px; */
  width: 1200px;
  margin: 0 auto;
}
</style>
