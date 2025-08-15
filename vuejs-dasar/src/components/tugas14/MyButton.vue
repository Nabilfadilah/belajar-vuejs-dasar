<script setup>
// menonaktifkan Fallthrough Atributes
defineOptions({
  // tidak akan diteruskan, tidak ada actionnya
  inheritAttrs: false,
});

// mengakses Fallthrough Atributes di javascript
import { useAttrs } from 'vue';


// Fallthrough
// kalau didefinisikan di props (defineProps) maka akan masuk ke props
const props = defineProps(["contoh"])
console.info(props);

// kalau tidak didefinisikan kama masuknya ke atributtes 
const attributes = useAttrs();
console.info(attributes);

</script>

<template>
  <!-- bisa diturunkan, tapi harus single element (hanya 1) -->
  <!-- <button>My Button</button> -->

  <button>My Button di javascript : {{ attributes.name }}</button>
</template>

<style scoped></style>
