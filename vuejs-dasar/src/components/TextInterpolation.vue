<script setup>
    console.log("Hello Vue");

    const hello = "<b>Hello Text Interpolation<b>"
</script>

<template>
    <!-- mengambil variabel hello -->
  <H1 class="hello">{{ hello }}</H1> 
</template>

<style scoped>
.hello {
    color: rebeccapurple;
}
</style>