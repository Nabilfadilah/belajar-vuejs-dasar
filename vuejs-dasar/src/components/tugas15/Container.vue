<script setup>
import { ref, useSlots } from 'vue';

// const {title} = defineProps({
//   title: String,
// });

// Conditional Slot
const slots = useSlots();

// Scoped slot 
const counter = ref(8);

</script>

<template>
  <div>
    <!-- Scoped Slot -->
    <div v-if="slots.header">
        <slot name="header" :counter="counter"></slot>
    </div>
    <div v-if="slots.default">
        <slot name="default" :counter="counter"></slot>
    </div>
    <div v-if="slots.footer">
        <!-- ada atribute counter -->
        <slot name="footer" :counter="counter"></slot>
    </div>

    <!-- Conditional Slot -->
    <!-- <div v-if="slots.header">
        <slot name="header"></slot>
    </div>
    <div v-if="slots.default">
        <slot name="default"></slot>
    </div>
    <div v-if="slots.footer">
        <slot name="footer"></slot>
    </div> -->

    <!-- Named slot -->
    <!-- <div>
      <slot name="header">
        <h1>Default Header</h1>
      </slot>
    </div>
    <div>
      <slot name="default">
        <h1>Anda belum mengisi content nya</h1>
      </slot>
    </div>
    <div>
      <slot name="footer">
        <h1>Default Footer</h1>
      </slot>
    </div> -->
    
    <!-- Component slot -->
    <!-- <div>
        <h1>{{ title }}</h1>
        <div>
            content nya bisa diisi, ketika panggil containernya -->
            <!-- slot, bisa diubah2 isinya -->
            <!-- <slot> -->
                <!-- fallback content, bisa di isi apapun peringatan -->
                <!-- <p>Anda Belum Mengisi Kontennya</p> -->
            <!-- </slot> -->
        <!-- </div> -->
    <!-- </div> -->
</div>
</template>

<style scoped>
h1 {
  color: firebrick;
}
</style>
