<template>
  <div id="block_lessons" class="container">
    <div v-for="(lesson,index) in response" v-bind:key="index">
      <lesson :title="lesson.Title" :text="lesson.Text" :link="lesson._id" :id="index" :src="lesson.Src" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Lesson from "@/components/module/Lesson";

export default {
  name: "Lessons",
  data: () => {
    return {
      response: null
    };
  },
  mounted() {
    axios.get("http://localhost:3000/lesson").then(response => {
      console.log(response.data);
      this.response = response.data;
    });
  },
  components: {
    Lesson
  },
  props: {
    Choise: Array
  }
};
</script>

<style lang="scss">
#block_lessons {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 20px;
}
.lesson {
  height: 500px;
  width: 500px;
  background: red;
  border: 1px solid black;
}
</style>

