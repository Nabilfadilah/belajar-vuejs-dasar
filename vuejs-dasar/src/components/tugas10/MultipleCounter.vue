<!-- menggunakan komponent lain dan penggunaan props pada component  -->

<script setup>
import { ref } from "vue";

import Counter from "../Tugas1/Counter2.vue";
import CounterStateless from "./CounterStateless.vue";

const counter1 = "Eko"
const counter2 = "Gardan"

// on way data flow
const counter = ref(0)

</script>

<template>
  <div>
    <Counter name="Nabil" />
    <Counter :name="counter1" initial-count="20" />

    <!-- bisa pakai directive binding juga -->
    <Counter v-bind:name="counter2" /> 

    <!-- on way data flow -->
     <CounterStateless name="Herogen" :counter="counter" />
     <CounterStateless name="Jikai" :counter="counter" />

     <button @click="counter++">Increment Counter</button>
  </div>
</template>

<style scoped></style>
