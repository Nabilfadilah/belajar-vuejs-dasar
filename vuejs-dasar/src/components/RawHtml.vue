<script setup>
    console.log("Hello Vue");

    const rawHtml = "<h1>Hello Raw HTML<h1>"
</script>

<template>
    <!-- raw html -->
    <div v-html="rawHtml"></div>
</template>

<style scoped>
.hello {
    color: rebeccapurple;
}
</style>