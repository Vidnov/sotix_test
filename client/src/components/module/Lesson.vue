<template>
  <div class="card">
    <div class="card-image">
      <img alt="lesson logo" :src="attrs.src" />
      <span class="card-title">Lesson {{Id}}</span>
    </div>
    <div class="card-content">
      <p>{{Text}}</p>
    </div>
    <div class="card-action">
      <router-link :to="/blockslesson/+Link">Пройти обучение</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "Lesson",
  data: function() {
    return {
      choise: 1,
      attrs: {
        src: require("@/assets/img/"+this.Src+".jpg"),
        alt: "Riley"
      }
    };
  },
  props: {
    Title: String,
    Text: String,
    Link: String,
    Id: Number,
    Src:String
  }
};
</script>

<style lang="scss">
</style>

