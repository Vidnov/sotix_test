<template>
  <div class="row">
    <form >
      <div class="row"  v-for="(element, index) in response" v-bind:key='index'>
        <div class="input-field container" v-for="(elem, index) in element" v-bind:key='index'>
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">{{elem}}</label>
        </div>
        <div  class="input-field container" >
            <button class="btn ">Завершить Экзамен</button>
        </div>
       
      </div>
      
    </form>
  </div>
</template>


<script>
import Test from '@/components/module/Test.vue'
import axios from "axios";
// @ is an alias to /src
export default {
  name: "BlocksLesson",
  components: {
    Test
  },
  data: () => {
    return {
      response:{},
        protocol:window.location.protocol,
        host:window.location.host,
        hash:window.location.hash.slice(1),
        url:"http://localhost:3000"
    };
  },
  mounted() {
     axios
      .get(this.url+this.hash)
      .then(response=>{
        console.log(response.data)
        this.response=response.data
        })
        .catch( console.log(this.url+this.hash))
      }
};
</script>

<style lang="scss">
</style>

