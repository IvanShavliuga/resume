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
    this.profile = this.$store.getters.profile;
    this.social = this.$store.getters.links;
    this.work = this.$store.getters.works;
    this.portfolio = this.$store.getters.portfolio;
    this.creative = this.$store.getters.creative;
    this.education = this.$store.getters.edu;
  }
}
</script>
