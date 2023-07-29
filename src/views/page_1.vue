<template>
  <div class="container">
    <div class="header">
      <router-link class="arrow__back" to="/"/>
      <h1 class="title">Hr сервисы</h1>
    </div>
    <div class="page">
      <router-link class="button__start" to="/page_2">Предоставление отпуска/отзыв из отпуска</router-link>
      <router-link class="button__start" to="/page_2">Предоставление внеочередного отпуска</router-link>
      <router-link class="button__start" to="/page_2">Оформление преревода</router-link>
      <router-link class="button__start" to="/page_2">Увольнение</router-link>
      <router-link class="button__start" to="/page_2">Оформление продления срока временного перевода, срока трудового договора</router-link>
      <router-link class="button__start" to="/page_2">Выход на работу в выходные и праздничные дни</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #f4f4f4;
  height: 100%;
}
.page {
  //background-color: #f4f4f4;
}
.button__classic {
  margin-bottom: 18px;
}

.header {
  background-color: #ffffff;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  margin: 0;
}
</style>
<script setup>
</script>
