<template>
  <div class="container">
    <h1>Для тестов</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="logint" id="login" type="text" class="validate" />
          <label for="login">Login</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="passwordt" id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="button-block">
        <button v-on:click="send" class="btn">Вход</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios, * as other from "axios";
export default {
  name: "Registration",
  components: {},
  data: () => {
    return {
      logint: null,
      passwordt: null,
      response: {},
      protocol: window.location.protocol,
      host: window.location.host,
      hasht: window.location.hash.slice(1),
      urlt: "http://localhost:3000"
    };
  },
  methods: {
    send: async function(e) {
      e.preventDefault();
      let Usert = {
        logint: this.logint,
        passwordt: this.passwordt
      };

      console.log(
        "Логин + пароль: " +
          Usert.logint +
          " " +
          Usert.passwordt +
          " " +
          this.urlt +
          this.hasht
      );

      // fetch(this.url+this.hash, {
      //   method: "Post",
      //   headers:{
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   mode: "no-cors",
      //   body: JSON.stringify(Usert)
      // })
      // .then(response=> {return console.log(response.headers)})
      // .then(r=>console.log(r))
      const str = JSON.stringify(this.Usert);
     let url = this.urlt +this.hasht;
     axios.post(url,{
       body:this.logint,
          headers: {
          Accept: "application/json",
          "access-Control-Allow-Origin": "http://localhost:3000/"
        },
       mode:'no-cors'
     })
  .then((response) => {
  })
  .catch((error) => {
    console.log(error);
  });
    }
  }
};
</script>