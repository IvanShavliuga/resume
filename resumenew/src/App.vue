<template lang="pug">
router-view
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push('/')
  }
}
</script>
