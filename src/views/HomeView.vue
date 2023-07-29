<template>
  <div class="home page">
    <div>
      <img alt="Vue logo" src="../assets/img/logo.png">
      <router-link class="button__classic" to="/page_1">Оформить отпуск</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    background: linear-gradient(65deg, #d260da, white, #e1a8e6);
    background-size: 400% 400%;
    //animation: gradient 15s ease infinite;
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
