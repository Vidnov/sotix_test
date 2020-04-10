<template>
  <div class="Message container">
    <h1>{{info}}</h1>
    <form>
      <h2>{{title}}</h2>
      <input v-model="message" type="text" name="message" />
      <button v-on:click="onload" class="btn onload">Отправить</button>
      <button v-on:click="getQuestion" class="btn load">Загрузить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Message",
  data: () => {
    return {
      errors: [],
      title: "Напишите сообщение для отправки",
      message: null,
      url: "http://localhost:3000/users",
      info:null
    };
  },
  mounted(){ axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));},
  methods: {
    onload: function(e) {
        e.preventDefault();
      let message ={
          'name': 'Nikita',
          'text':this.message
      } 

      console.log('Тип отправленных данных '+ typeof message)
        fetch(this.url,{
          method:'POST',
          headers:{
            'access-control-allow-origin':'*'
          },
          mode:"no-cors",
          body: JSON.stringify(message)
      })
      .then(res=>console.log(res))
      .catch(e=>console.log(e))
    
  
    },
    load: function(e) {
      let result = fetch(this.url);
      result
        .then(r => r.json())
        .then(t => {
          console.log("Данные загружены!");
          console.log(t);
        })
        .catch(err => console.log(err));
      e.preventDefault();
    }
    
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
