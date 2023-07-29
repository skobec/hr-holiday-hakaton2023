<script setup>

</script>

<template>
  <div class="page">
    <div class="spinner"></div>
    <span class="text">Пожалуйста, подождите ...</span>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.text {
  margin-top: 24px;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 141.176% */
  letter-spacing: -0.391px;
}
.spinner {
  width: 64px;
  height: 64px;
  border: 0.4em solid #43B741;
  border-right-color: rgba(208, 194, 194, 0.1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
