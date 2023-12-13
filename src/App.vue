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
  
  display: flex;
  font-family: Georgia;
}



</style>
