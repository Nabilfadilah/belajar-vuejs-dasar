<!-- Tugas 11 -->
<!-- Sebelumnya kita sudah membuat halaman Product, sekarang kita akan coba pecah halaman Product menjadi komponen yang lebih kecil, yaitu ProductDetail
Component ProductDetail akan melakukan validasi Props yang diperbolehkan -->

<script setup>

// harus pake defineProps untuk props validation 
const product = defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,

        // validasi untuk mendefinisikan requirement,tipe data 
        validator(value, props) {
            return value.trim().length !== 0
        }
    },
    price: {
        type: Number,
        required: true,
        validator(value, props) {
            return value > 0
        }
    }
})
</script>

<template>
    <div>
        <h3 id="title">Product</h3>
        <p>Id: {{ product.id }}</p>
        <p>Name: {{ product.name }}</p>
        <p>Price: {{ product.price }}</p>
    </div>
</template>

<style scoped></style>
