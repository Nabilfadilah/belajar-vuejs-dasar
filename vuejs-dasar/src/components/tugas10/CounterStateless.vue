
<script setup>
const {counter, name} = defineProps(["counter", "name"])

</script>

<template>
  <div>
    <h1>Counter {{ name }} : {{ counter }}</h1>
  </div>
</template>

<style scoped>

</style>