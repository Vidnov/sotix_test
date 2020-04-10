<template>
  <div class="TestBlock">
    
    <h6>ID Блока</h6>{{id}}
    <div v-if="type">
      <h3>{{question}}</h3>
      <div v-for="(element ,index) in answer" v-bind:key="index">
        <p>
          <label>
            <input :name="question" v-model="checkbox" type="checkbox" />
            <span>{{element}}</span>
            <h3>{{checkbox}}</h3>
          </label>
        </p>
      </div>
    </div>
    <div v-else>
      <h6>{{question}}</h6>
      <div v-for="(element ,index) in answer" v-bind:key="index">
        <p>
          <label>
            <input
              :name="question"
              v-model="radio"
              type="radio"
              :value="element"
              @change="exportChild"
            />
            <span>{{element}}</span>
          </label>
        </p>
      </div>
    </div>
    <hr />
    <p>Ответ:{{radio}}</p>
    <hr />
  </div>
</template>

<script>
import TestLesson from "@/views/TestLesson";
// @ is an alias to /src
export default {
  name: "Lesson",
  data: function() {
    return {
      radio:null,
      q_id:this.id
    };
  },
  methods: {
    exportChild() {
      this.$emit("exportChild", {
        radio: this.radio,
        q_id:this.q_id
      });
    }
  },
  computed: {
    result() {
      return this.$store.getters.getResult;
    }
  },
  props: {
    question: String,
    answer: Array,
    type: Boolean,
    id:String
  },
  components: {
    TestLesson
  }
};
</script>

<style>
h6 {
  font-weight: bold;
}
</style>