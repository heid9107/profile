<template>
  <section id="aside">
    <header>
    <h1>Hi, I'm Heidi</h1>
    </header>
    <h2>and I'm a software developer</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque quo cumque minus accusamus maiores
      consectetur! Expedita quis cumque, voluptatibus voluptatem laboriosam nobis unde! Porro consequuntur ad
      repudiandae doloribus odio?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur earum eligendi dicta magni vel illo
      architecto maiores, explicabo consequatur, hic omnis ex, vero quod porro beatae! Nobis, beatae accusantium.</p>
    <nav id="links">
      <!-- <ul> -->
        <router-link v-bind:to="{name:'home'}">Home</router-link>
        <router-link v-bind:to="{name:'About'}">About</router-link>
        <!-- <li><a href="./components/EducationView.vue">Education</a></li>
        <li><a href="./components/WorkHistory.vue">Experience</a></li>
        <li><a href="./components/HobbiesView.vue">Hobbies</a></li>
        <li><a href="./components/PortfolioView.vue">Portfolio</a></li> -->
      <!-- </ul> -->
    </nav>
  </section>
</template>
  
<script>

export default {
    
};
</script>
  
<style scoped>
#aside {
  flex-grow: 1;
  background-color: #faebeb;
  display: flex;
  flex-direction: column;
  width: 30%;
  min-height: 100vh;
}

#links {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
}

nav ul {
  list-style-type: none;
  margin: 0 20px 0 20px;
  padding: 0;

}

nav ul li {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid #707070;
  padding-top: 30px
}

nav a, nav a:visited {
  text-decoration: none;
  color: black;
}

nav a:hover {
  color: #53a19b;
  padding-left: 5px;
}
</style>