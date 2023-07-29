<template>
  <div class="home page">
    <div>
      <img alt="logo" class="logo" src="../assets/img/logo-bereke.png">
      <router-link class="button__classic" to="/page_1">Оформить отпуск</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .logo {
    width: 65%;
  }
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    background: linear-gradient(180deg, #ffffff, #66d3e5);
    background-size: 400% 400%;
    animation: gradient 0.2ms ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld,
  // },
};
</script>
