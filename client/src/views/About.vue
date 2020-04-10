<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <Beginning msg="This is just the beginning..."/>
    <Message/>
  </div>
</template>

<script>
// @ is an alias to /src
import Beginning from '@/components/Beginning.vue'
import Message from '@/components/Message.vue'

export default {
  name: 'home',
  components: {
    Beginning,
    Message
  }
}
</script>

<style scoped lang="scss">
.about{text-align: center}
</style>
