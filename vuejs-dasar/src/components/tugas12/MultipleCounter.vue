<!-- menggunakan komponent lain dan penggunaan props pada component  -->

<script setup>
import {ref} from "vue";

import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";

// on way data flow
const counter = ref(0);

// bisa tambah parameter
function increment(value) {
  counter.value += value;
}
</script>

<template>
  <div>
    <!-- Pastikan initial-count memang butuh number; kalau iya, pakai :initial-count -->
    <Counter name="Nabil" :initial-count="100" />
    <Counter name="Halim" :initial-count="100" />
    <!-- <Counter name="Nabil" initial-count="100" />
    <Counter name="Halim" initial-count="100" /> -->

    <!-- @click untuk event handler -->
    <!-- Tidak perlu arrow function; tulis langsung increment-nya -->
    
    <!-- menggunakan event parameter -->
    <CounterStateless
      name="Ahmad"
      :counter="counter"
      :increment="1"
      @click="increment"
    />

    <!-- <CounterStateless name="Ahmad" :counter="counter" @click="counter++" /> -->
    <CounterStateless name="Morro" :counter="counter" @click="counter += 2" />

    <!-- <CounterStateless name="Ahmad" :counter="counter" @click="() => counter += 1" /> -->
    <!-- <CounterStateless name="Morro" :counter="counter" @click="() => counter += 2" /> -->
  </div>
</template>

<style scoped></style>
