<script setup>
import {onWatcherCleanup, ref, watch, watchEffect} from "vue";
import ProductDetail from "./ProductDetail.vue";

// const productId = ref("")
const productId = ref("product1"); // watcher options
const product = ref(null);

// watch effect -> jadi sortcut tidak perly immediate: true
watchEffect(async () => {
  console.log("Fetching:", productId.value);
  try {
    const response = await fetch(`/${productId.value}.json`);
    if (!response.ok) throw new Error("Gagal fetch produk");
    console.log("Fetched data:", data);
    product.value = await response.json();
  } catch (err) {
    console.error(err);
    product.value = null;
  }
});
</script>

<template>
  <div>
    <label for="productId">
      Product Id :
      <select v-model="productId">
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>

      <!-- tambahkan ini untuk cek -->
      <p>ProductId sekarang: {{ productId }}</p>
    </label>

    <div v-if="product">
      <ProductDetail
        :id="product.id"
        :price="product.price"
        :name="product.name"
      />
    </div>
  </div>
</template>

<style></style>
