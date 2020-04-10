<template>
  <div class="container reg_block">
    <div>
       <h3 class="center">Регистрация</h3>
       <form class="col s12">
      <div class="row center">
        <h1 v-if="res">{{res}}</h1>
        <div class="input-field col s12">
          <input v-model="login" id="login" type="text" class="validate" />
          <label for="login">Login</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input v-model="first_name" id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input v-model="last_name" id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="password" id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <button type="submit" v-on:click="registration" class="btn">Регистрация</button>
    </form>
    </div>
   
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
      res: null,
      login: null,
      first_name: null,
      last_name: null,
      password: null,
      response: {},
      protocol: window.location.protocol,
      host: window.location.host,
      hash: window.location.hash.slice(1),
      url: "http://localhost:3000"
    };
  },
  methods: {
    registration: function(e) {
      let User = {
        login: this.login,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password
      };

      this.$http
        .post(this.url + this.hash, {
          User
        })
        .then(res => {
            (this.login = ""),
            (this.first_name = ""),
            (this.last_name = ""),
            (this.password = ""),
            console.log(res.data);
            this.$router.push('/')
        })
        .catch(e => console.error(e));
    }
  }
};
</script>
<style lang="scss" scoped>
.reg_block{
  margin-top: 50px;
  
  padding-bottom: 60px;
  padding-left: 60px;
  padding-right: 60px;
  border: 1px solid black;
  border-radius: 45px;
  background-color: #fff;
}
</style>