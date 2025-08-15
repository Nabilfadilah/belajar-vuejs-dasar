<!-- tugas 12
Sekarang, kita akan coba tambahkan event di CounterStateless
Di dalam CounterStateless, kita akan tambahkan event, dan gunakan event tersebut untuk button -->

<script setup>
// const { counter, name } = defineProps(['counter', 'name'])

// bisa pakai event parameter
// tambah parameter
const {counter, name, increment} = defineProps({
  counter: Number,
  name: String,
  increment: Number,
});

// nama function emits, nama eventnya "click"
const emit = defineEmits(["click"]); // pakai "emit" (singular) biar konsisten

function buttonClick() {
    // parameter ke-1 click, ke-2 increment
  emit("click", increment);
}
</script>

<template>
  <div>
    <h1>Counter {{ name }} : {{ counter }}</h1>

    <button @click="buttonClick">Increment {{ name }}</button>
    <!-- <button @click="emit('click', increment)">Increment {{ name }}</button> -->
  </div>
</template>

<style scoped></style>
