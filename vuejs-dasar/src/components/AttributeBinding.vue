<template>
  <!-- 
    - Mustache tidak bisa digunakan pada attribute di Element
    - Jika kita ingin menggunakan variable pada attribute di Element, kita perlu menggunakan Directive v-bind:nama-attribute
    - Dan karena penggunaan v-bind itu sering sekali dilakukan, maka Vue juga menyediakan shortcut untuk menggunakan v-bind, cukup gunakan : (titik dua) diikuti dengan nama attribute nya, misal :id, :class, dan lain-lain
    - Bahkan jika kita ingin menggunakan variable yang sama dengan nama attribute, kita tidak perlu menggunakan :id=”id”, kita bisa langsung menggunakan :id saja, begitu juga dengan nama attribute yang lain 
    -->
  <div>
    <!-- atribute dan nama variabel -->
    <h1 :id="id" v-bind:class="classHello">{{ hello }}</h1>
    <div :class="classHello" v-html="classHello"></div>
  </div>
</template>

<script setup>
// nama variabel dengan
const hello = "Perkenalkan saya Nabil";
const classHello = "Hello ini Fadilah";

// atribute dan nama variabel sama
const id = "Mohammad";
</script>

<style scoped>
.hello {
    color: aqua;
}
</style>
