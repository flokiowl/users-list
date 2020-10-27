<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">

html,
body {
    margin: 0;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    height: 90vh;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid #eee;
    border-radius: 20px;
    overflow: hidden;
}
</style>
