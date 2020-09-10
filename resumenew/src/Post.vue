<template lang="pug">
  section(v-html="fl")
</template>
<script>
export default {
  name: 'Post',
  data() {
    return {
      fl:"none"
    }
  },
  created() {
    this.fl = this.$store.getters.fl;
  }
}
</script>
