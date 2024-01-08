<template>
  <div id="viewport">
    <div id="aside">
      <AsideBar />
    </div>
    <main id="welcome">
      <router-view />
    </main>
  </div>
</template>


<script>
import AsideBar from './components/AsideBar.vue';


export default {
  components: { AsideBar },
};
</script>


<style scoped>

#viewport {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: Georgia;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "aside router router";
}

#aside {
  grid-area: aside;
}

#welcome {
  padding-left: 10px;
  grid-area: router;
}


</style>
