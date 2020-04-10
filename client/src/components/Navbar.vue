 <template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <router-link to="/">Программа обучения и тестирования Sotiks</router-link>
        </li>
        <li v-if="users">Добро пожаловать {{users}} Ваш Результат {{result}}</li>
        <!-- <li v-else-if="users">Добро пожаловать {{users}}</li> -->
      </ul>
      <router-link to="/" class="brand-logo center">
        <i class="material-icons">school</i>
      </router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Главная Страница</router-link>
        </li>
        <li v-on:click="exit" v-show="users">
          <router-link to="/">Выход</router-link>
        </li>
        <li v-if="!users">
          <router-link to="/login">Вход</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    users() {
      return this.$store.getters.getUser;
    },
    result() {
      return this.$store.getters.getResults;
    }
  },
  data: function() {
    return {
      Name: this.$store.getters.getUser,
      Token: localStorage.Token
    };
  },
  methods: {
    exit: function() {
      localStorage.clear();
      this.$store.dispatch("exit", this.guest);
      this.$store.dispatch("localstore", this.Name);
    },
    login: function(user) {
      console.log("emit", user);
    }
  },
  mounted() {
    if (localStorage.First_Name) {
      this.Name = localStorage.First_Name;
      this.Token = localStorage.Token;
    }
  }
};
</script>

<style>
nav {
  background: #013220;
}
</style>