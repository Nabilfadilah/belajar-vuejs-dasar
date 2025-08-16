<!-- Tugas 16 -->
<!-- membuat halaman home.html yang berisikan menu dan isi Content akan berganti-ganti sesuai dengan menu yang dipilih -->


<script setup>
import { ref } from 'vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';
import About from './About.vue';

const currentPage = ref('About'); // set page nya about
const pages = {
    About,
    Blog,
    Contact
}
</script>

<template>
  <div>
    <button @click="currentPage = 'About'">About</button>
    <button @click="currentPage = 'Blog'">Blog</button>
    <button @click="currentPage = 'Contact'">Contact</button>
  
    <!-- :is, adalah tag component dan attribute, untuk muncul/tidak page -->
    <component :is="pages[currentPage]"></component>
  </div>
</template>

<style scoped>

button {
    background: saddlebrown;
    color: aquamarine;
    border: none;
    margin: 5px;
    padding: 5px;
    cursor: pointer;
}

</style>