<script setup>
import { inject } from 'vue';

const profile = inject('profile');

</script>

<template>
   <div>
    <h1>Profile Address : {{ profile.name }}</h1>
    <p>Address...</p>
  </div>
</template>

<style scoped>

</style>