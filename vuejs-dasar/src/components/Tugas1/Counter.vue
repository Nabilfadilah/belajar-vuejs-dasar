<!-- halaman yang menampilkan data Counter -->
<script setup>

let count = 0;

function increment() {
    count ++;
    
    // gunakan manipulasi DOM
    document.getElementById('count').innerText = `Counter : ${count}`;
}

</script>

<template>
    <div>
        <h1 id="count">Counter : {{ count }}</h1>
        <button v-on:click="increment">Increment Button</button>
    </div>
</template>

<style scoped>

</style>
