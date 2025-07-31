<!-- membuat halaman web untuk memberi ucapan selamat berdasarkan score, mengunakan kondisi  -->

<script setup>
    import { ref } from 'vue';

    const score = ref(80);
</script>

<template>
    <div>
        <h1>Score App</h1>

        <!-- v-show, element akan ditambahkan ke DOM -->
         <div v-show="score > 50">
            <p>Ini tampilan dengan v-show Score:<b>{{ score }}</b></p>
         </div>

        <div v-if="score > 90">
            <p>Yeyy cool score <b>{{ score }}</b></p>
        </div>

        <div v-else-if="score > 70">
            <p>Good score <b>{{ score }}</b></p>
        </div>

        <div v-else>
            <p>Ups, bad score HAHAHA :D <b>{{ score }}</b></p>
        </div>
    </div>
</template>

<style scoped>

</style>