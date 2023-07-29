<template>
  <div class="page page_container">
    <div>
      <div class="page_popup">
        <div v-if="!loading && !loadingComplete">
          <div>
            <router-link v-if="sendPost" class="arrow__back" to="/"/>

            <h2 class="title">Заявление на внеочередной отпуск</h2>
          </div>

          <div class="alarm_bl alarm_3" v-if="status === 4">
            <img class="ico" src="../assets/img/alert3.svg"/>
            <span class="text">Отказано</span>
          </div>
          <div class="alarm_bl alarm_3" v-if="status === 1">
            <img class="ico" src="../assets/img/alert3.svg"/>
            <span class="text">На согласовании у руководителя</span>
          </div>
          <div class="alarm_bl alarm_2" v-if="status === 2">
            <img class="ico" src="../assets/img/alert2.svg"/>
            <span class="text">Подготовка документов в HR</span>
          </div>
          <div class="alarm_bl alarm_1" v-if="status === 3">
            <img class="ico" src="../assets/img/alert1.svg"/>
            <span class="text">Согласовано</span>
          </div>
          <div class="input disabled">
            <input
              id="iniciator"
              name="iniciator"
              placeholder="Введите инициатора"
              :value="`${form.lastName} ${form.firstName} ${form.middleName}`"
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
              v-model="form.dateFrom"
            />
            <label for="dateStart">Дата начала </label>
          </div>
          <div class="input">
            <input
              id="dateEnd"
              name="dateEnd"
              type="date"
              v-model="form.dateTo"
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
            v-if="!sendPost"
            @click="send"
            class="button__classic">
          Подписать и отправить
          </span>
          <span
            v-if="sendPost"
            @click="updateStatus"
            class="button__classic">
          Обновить статус
          </span>
        </div>
        <loading-window v-if="loading"/>
        <completed-window v-if="loadingComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingWindow from '@/components/loading-window.vue';
import CompletedWindow from '@/components/completed-window.vue';
import axios from 'axios';
import axiosVue from 'axios-vue';

export default {
  name: 'HelloWorld',
  components: { CompletedWindow, LoadingWindow },
  data() {
    return {
      form: {
        firstName: 'Роман',
        middleName: 'Александрович',
        lastName: 'Скобцов',
        dateFrom: '2023-07-06',
        dateTo: '2023-07-06',
        number: '1',
        comment: '',
        login: 'Скобцов Р.А.',
      },
      idRequest: '',
      loading: false,
      loadingComplete: false,
      sendPost: false,
      status: null,
    };
  },
  mounted() {
  },
  methods: {
    updateStatus() {
      this.loading = true;
      axios.get(`https://hackathon.dbf.pkz.icdc.io/api/Applications/${this.idRequest}`).then((response) => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        this.status = response.data.status;
        console.log('res', response.data);
      });
    },
    send() {
      this.loading = true;
      axios.post('https://hackathon.dbf.pkz.icdc.io/api/Applications', this.form).then((response) => {
          this.sendPost = true;
          this.idRequest = response.data;
          console.log('res', response.data);
        });
      setTimeout(() => {
        this.loading = false;
        this.loadingComplete = true;
      }, 2000);
      setTimeout(() => {
        this.loadingComplete = false;
      }, 3500);
      setTimeout(() => {
        this.updateStatus();
      }, 4000);
    },
  },
};
</script>
<style lang="scss">
.button__classic {
  margin-bottom: 18px;
}
</style>
