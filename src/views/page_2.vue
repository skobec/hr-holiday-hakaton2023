<template>
  <div class="page page_container">
    <div>
      <div class="page_popup">
        <div v-if="!loading">
          <h2 class="title">Заявление на внеочередной отпуск</h2>
          <div class="input disabled">
            <input
              id="iniciator"
              name="iniciator"
              placeholder="Введите инициатора"
              :value="`${lastName} ${firstName} ${middleName}`"
            />
            <label for="iniciator">Инициатор</label>
          </div>
          <div class="input disabled">
            <input
              id="podrazdel"
              name="podrazdel"
              placeholder="Введите подразделение"
              value="CRM"
            />
            <label for="podrazdel">Подразделение</label>
          </div>
          <div class="input">
            <input
              id="dateStart"
              name="dateStart"
              type="date"
              value="2023-12-21"
              v-model="dateFrom"
            />
            <label for="dateStart">Дата начала </label>
          </div>
          <div class="input">
            <input
              id="dateEnd"
              name="dateEnd"
              type="date"
              v-model="dateTo"
            />
            <label for="dateEnd">Дата завершения </label>
          </div>
          <div class="input">
      <textarea
        id="iniciator"
        name="iniciator"
        placeholder="Прокоментируйте причину отпуска"
      />
            <label for="iniciator">Причина отпуска</label>
          </div>
          <span
            @click="send"
            class="button__classic">
          Подписать и отправить
          </span>
          <span
            @click="send"
            class="button__classic">
          Обновить статус
          </span>
        </div>
        <loading-window v-if="!loading"/>
        <completed-window v-if="loading"/>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingWindow from '@/components/loading-window.vue';
import CompletedWindow from '@/components/completed-window.vue';

export default {
  name: 'HelloWorld',
  components: { CompletedWindow, LoadingWindow },
  data() {
    return {
      firstName: 'Роман',
      middleName: 'Александрович',
      lastName: 'Скобцов',
      dateFrom: '2023-07-06',
      dateTo: '2023-07-06',
      number: '',
      comment: '',
      login: 'Скобцов Р.А.',
      loading: true,
    };
  },
  mounted() {
  },
  methods: {
    send() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>
<style lang="scss">
.button__classic {
  margin-bottom: 18px;
}
</style>
