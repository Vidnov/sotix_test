<template>
  <div class="content_video">
    <h1>{{response.NameVideo}}</h1>
    <video class="responsive-video center" controls>
      <source :src="attrs.src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import TestBlockLesson from "@/components/module/Test_Block_Lesson.vue";
import VideoBlockLesson from "@/components/module/Video_Block_Lesson.vue";
import axios from "axios";
// @ is an alias to /src
export default {
  name: "BlocksLesson",
  components: {
    VideoBlockLesson,
    TestBlockLesson
  },
  data: () => {
    return {
      response: [],
      attrs: {
        src: require("@/assets/Video/l1v1.mp4"),
        alt: "Riley"
      },
      protocol: window.location.protocol,
      host: window.location.host,
      hash: window.location.hash.slice(1),
      url: "http://localhost:3000"
    };
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
<style lang="scss" scoped>
.content_video {
  margin: 0 auto;

}
</style>