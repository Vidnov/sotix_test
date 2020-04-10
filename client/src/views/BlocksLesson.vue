<template>
    <div class="BloksLesson">
      <div v-for="(element, indexi) in response" v-bind:key='indexi+1'>
        <ul class="collection" v-for="(element, indexii) in element.Blocks" v-bind:key='indexii+2' >
          <VideoBlockLesson v-if="element.typeBlock" :Link="element._id"/>
          <TestBlockLesson v-if="!element.typeBlock" :Link="element._id"/>
        </ul>
      </div>
      <ul class="collection"  v-for="(element, index) in response" v-bind:key='index'>
        <ExamBlockLesson  :Link="element._id"/>
      </ul>
    </div>
</template>

<script>
import TestBlockLesson from "@/components/module/Test_Block_Lesson.vue";
import VideoBlockLesson from "@/components/module/Video_Block_Lesson.vue";
import ExamBlockLesson from "@/components/module/Exam_Block_Lesson.vue";
import axios from "axios";
// @ is an alias to /src
export default {
  name: "BlocksLesson",
  components: {
    VideoBlockLesson,
    TestBlockLesson,
    ExamBlockLesson
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
      }
};
</script>
<style lang="scss">

.collection{
  display: grid;
}
</style>