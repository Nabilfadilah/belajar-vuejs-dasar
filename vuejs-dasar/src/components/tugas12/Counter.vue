<!-- Counter.vue (diperbaiki) -->
<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: { type: String, default: 'Nabil' },
  initialCount: { type: [Number, String], default: 0 }
})

// buat count reaktif (pastikan tipe number)
const count = ref(Number(props.initialCount) || 0)

function increment() {
  // cukup ini — Vue akan rerender template otomatis
  count.value++
  // kalau mau debugging:
  console.info(`increment counter : ${count.value}`)
}
</script>

<template>
  <div>
    <h1>Counter {{ props.name }} : {{ count }}</h1>
    <button @click="increment">Increment Button</button>
  </div>
</template>

<style scoped>
/* styling optional */
</style>
