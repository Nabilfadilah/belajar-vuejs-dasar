<!-- membuat halaman dinamis diambil via AJAX, data AJAX akan diambil tergantung input yang dipilih oleh pengguna melalui input select option -->

<script setup>
import {onWatcherCleanup, ref, watch, watchEffect} from "vue";

// const productId = ref("")
const productId = ref("product1"); // watcher options
const product = ref(null);

// untuk mengecek perubahan dengan watch function
// watch untuk mendeteksi apakah sebuahh state berubah atau tidak
// watch(productId, async (newVal, oldVal) => {
//   // watch itu lazy, jadi nunggu perubahaan dulu
//   console.log(`call watch callback`);
//   if (newVal) {
//     const response = await fetch(`/${newVal}.json`);
//     product.value = await response.json();
//   } else {
//     product.value = null;
//   }
// });

// watcher options
// watch(productId, async (newVal, oldVal) => {
//   const response = await fetch(`/${newVal}.json`);
//   product.value = await response.json();
// }, {
//     immediate: true // untuk menampilkan data product
// });

// watch effect -> jadi sortcut tidak perly immediate: true
// watchEffect(async () => {
//     const response = await fetch(`/${productId.value}.json`);
//     product.value = await response.json();
// })

// cleanup -> tapi onWatcherCleanup() tidak mendukung async
watchEffect(async () => {
    onWatcherCleanup(() => {
        console.log("cleanup");
    })

    const response = await fetch(`/${productId.value}.json`)
    product.value = await response.json()
})

</script>

<template>
  <div>
    <label for="productId">
      Product Id :
      <select v-model="productId">
        <option value=""></option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>
    </label>

    <div v-if="product">
      <h1>Product</h1>
      <p>
        Id: <b>{{ product.id }}</b>
      </p>
      <p>
        Name: <b>{{ product.name }}</b>
      </p>
      <p>
        Price: <b>{{ product.price }}</b>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
