<template>
  <section id="right-panel">
    <div id="welcome">
      Welcome To My Site!
    </div>
  </section>
</template>
  
<script>
export default {

};
</script>
  
<style scoped>
#right-panel {
  background: url(../assets/DSC_5411.JPG)right / cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
}

#welcome {
  font-size: 2rem;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(179, 227, 241);
  width: 35%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
