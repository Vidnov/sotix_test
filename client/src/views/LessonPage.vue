<template>
<div>
    <div class="Lesson" v-for="(element, index) in response" v-bind:key='index'>
            <VideoLesson :url_video='element.url_video'/>
            <TestLesson :Test='element.test'/>
    </div>
</div>
</template>

<script>
import VideoLesson from '@/components/VideoLesson.vue'
import TestLesson from '@/components/TestLesson.vue'
import axios from 'axios'
// @ is an alias to /src
export default {
  name: 'Lesson',
  components: {
    VideoLesson,
    TestLesson
  },
  data:()=>{
      return{
        response:[],
        protocol:window.location.protocol,
        host:window.location.host,
        hash:window.location.hash.slice(1),
        url:"http://localhost:3000"
      }
  },
  mounted(){ 
      axios
      .get(this.url+this.hash)
      .then(response=>{
        console.log(response.data)
        this.response=response.data
        })
        .catch( console.log(this.url+this.hash))
      }
}
</script>
