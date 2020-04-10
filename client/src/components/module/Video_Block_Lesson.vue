
<template>
    <li  class="collection-item avatar">
      <router-link :to="/lessonvideo/+Link">
      <i class="material-icons circle red">play_arrow</i>
      </router-link>
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
  name: "VideBlockLesson",
  data: () => {
    return {
      response:null
    };
  },
  components: {
    
  },
  props:{
    Link:String
  }
};
</script>
<style lang="scss" scoped>
.collection-item{
  background-color: transparent;
   position: relative;
   justify-self: center;
   top: 10px;
 }
</style>