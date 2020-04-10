<template>
  <div class="container row login">
    <div class="icon">
      <i class="medium material-icons">school</i>
    </div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="guest.login" id="login" type="text" class="validate" />
          <label for="login">Login</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="guest.password" id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="button-block">
        <button @click="logon()" class="btn">Вход</button>
        <router-link to="/registrator">
          <button class="btn">Регистрация</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
export default {
  name: "Registration",
  components: {},
  data: () => {
    return {
      guest: {
        login: null,
        password: null
      },
      User: {
        First_Name: null,
        Last_Name: null,
        Login: null,
        Id: null,
        Role: null,
        Result: null,
        Actual: null,
        Token: null
      },
      login: null,
      password: null,
      response: {},
      protocol: window.location.protocol,
      host: window.location.host,
      hash: window.location.hash.slice(1),
      url: "http://localhost:3000"
    };
  },
  methods: {
    logon() {
      this.$store.dispatch("logon", this.guest);

      this.$http //этот запрос создан для записи в localStorage и пуша на  главную страницу (возможно не нужен)
        .post("http://localhost:3000/login/", {
          guest: this.guest
        })
        .then(r => {
          console.log("Сервер отправил ответ " + JSON.stringify(this.User));
          console.log("Статус запроса " + r.status);
          if (r.status == "200") this.$router.push("/");
          this.login = "";
          this.password = "";
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.icon {
  text-align: center;
}
.login {
  background-color: #fff;
  padding: 50px;
  margin-top: 50px;
  border: 1px solid #013220;
  border-radius: 25px;
}
.btn {
  padding: 0;
  width: 200px;
  display: block;
  margin: 0 auto;
}
.button-block {
  display: grid;
  grid-template-columns: auto auto;
}
</style>