<!-- Tugas 17 -->
<!-- membuat halaman profile dan component ProfileApp
Di ProfileApp, kita akan provide() data profile, dan di Child component nya, kita akan inject() data profile nya -->

<script setup>
import { provide, reactive } from 'vue';
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';

// make reactive state
const profileValue = reactive({
    name: "Nabil",
    email: "fadilah@gmail.com"
})

// untuk menyediakan data
// key = "profile"
// value = profileValue
provide("profile", profileValue);

</script>

<template>
  <div>
    <h2>Ini Form Input</h2>
    <input v-model="profileValue.name" type="text" placeholder="Nama">
    <!-- jadi profile ini tidak perlu kirim via props atau attribute, karena sudah kirim via provide dan inject -->
    <Profile />
    <ProfileAddress />
  </div>
</template>

<style scoped>

</style>