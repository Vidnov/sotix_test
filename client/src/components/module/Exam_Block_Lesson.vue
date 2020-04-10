<template>
  <li class="collection-item avatar">
    <router-link :to="/lessonexam/+Link">
      <i class="material-icons circle green">import_contacts</i>
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