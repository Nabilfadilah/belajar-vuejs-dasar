<!-- membuat halaman yang bisa diatur class nya secara interakfit -->

<script setup>
import {ref} from "vue";

const red = ref(false);
const bold = ref(false);

function toggleRed() {
  red.value = !red.value;
}

function toggleBold() {
  bold.value = !bold.value;
}

// membuat style css di javascript
// dengan camel case
const style1 = {
    color: "blue"
}

const style2 = {
    textTransform: "uppercase",
    fontWight: "inner"
}
</script>

<template>
  <div>
    <h1 :class="{red: red, bold: bold}">Style</h1>
    <h1 :class="['red', 'bold']">Style</h1>

    <h3 :style="style1">ini Style 1</h3>
    <h4 :style="[style2]">ini Style 2</h4>

    <button v-on:click="toggleRed">Red</button>
    <button v-on:click="toggleBold">Bold</button>
  </div>
</template>

<style scoped>
.red {
  color: red;
}

.bold {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
