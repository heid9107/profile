<template>
  <section id="aside">
    <header id="blurb">
      <h1>Hi, I'm Heidi</h1>
      <h2>and I'm a software developer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque quo cumque minus accusamus maiores
        consectetur! Expedita quis cumque, voluptatibus voluptatem laboriosam nobis unde! Porro consequuntur ad
        repudiandae doloribus odio?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur earum eligendi dicta magni vel illo
        architecto maiores, explicabo consequatur, hic omnis ex, vero quod porro beatae! Nobis, beatae accusantium.</p>
    </header>
    <nav id="links">
      <ul>
        <li><router-link v-bind:to="{name:'home'}">Home</router-link></li>
        <li><router-link v-bind:to="{name:'about'}">About</router-link></li>
        <li><router-link v-bind:to="{name:'education'}">Education</router-link></li>
        <li><router-link v-bind:to="{name:'hobbies'}">Hobbies</router-link></li>
        <li><router-link v-bind:to="{name:'work'}">Work</router-link></li>
        <li><router-link v-bind:to="{name:'portfolio'}">Portfolio</router-link></li>
      </ul>
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
  background-color: #f8eeee;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#blurb {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1, h2, p {
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 10px;
}

h1 {
  font-size: 2.5rem; 
}

h2 {
  margin-bottom: 40px;
}

#links {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  color: black;
}

nav ul {
  list-style-type: none;
  margin: 0 20px 0 20px;
  padding: 0;
} 

nav ul li {
  border-bottom: 1px solid #707070;
  padding-top: 30px;
  
} 

nav li a:hover {
  color: rgb(57, 137, 168);
  padding-left: 5px;
}

nav li a {
  text-decoration: none;
  color: black;
}
</style>