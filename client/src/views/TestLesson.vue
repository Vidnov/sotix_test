<template>
  <div class="container testblock">
    <form class="container">
      <div v-for="(element,index) in response" :key="index">
        <Test
          :id="element._id"
          :type="element.typeTest"
          :question="element.Question"
          :answer="element.Answer"
          @exportChild="getResult"
        />
      </div>
      <button type="button" class="btn" @click="updateResult">Завершить тестирование</button>
    </form>
  </div>
</template>
<script>
import Test from "@/components/module/Test.vue";
import axios from "axios";
// @ is an alias to /src
export default {
  name: "BlocksLesson",
  components: {
    Test
  },
  data: () => {
    return {
      response: {},
      protocol: window.location.protocol,
      host: window.location.host,
      hash: window.location.hash.slice(1),
      url: "http://localhost:3000",
      result: {},
    };
  },
  methods: {
    updateResult() {
      console.log(this.result);
      this.$http //этот запрос создан для отправки ответов теста на сервер
        .post("http://localhost:3000/checkanswer/", {
          result: this.result
        })
        .then(response => {
          console.log(response);
        });
    },
    getResult(data) {
      this.result[data.q_id] = data.radio;
    },
    getQuestions: function(question) {
      console.log(question);
    }
  },
  mounted() {
    axios
      .get(this.url + this.hash)
      .then(response => {
        console.log(response.data);
        this.response = response.data;
      })
      .catch(console.log(this.url + this.hash));
  }
};
</script>

<style lang="scss">
.testblock {
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 200px;
}
</style>

