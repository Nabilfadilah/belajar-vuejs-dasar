

<script setup>
import MyButton from './MyButton.vue';
    
function clickHandler() {
    alert('You click me');
}

</script>

<template>
    <!-- nah untuk mengakses Fallthrough Atributes di javascript tambah juga property nya (name="property") -->
  <MyButton class="button" @click="clickHandler" name="Gordon" />
</template>

<style scoped>
.button {
    background-color: skyblue;
    color: black;
    border: none;
}
</style>