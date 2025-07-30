<template>

    <!-- Di beberapa kasus, ada attribute yang value nya adalah boolean (true / false)
Contoh misal nya attribute disabled dan checked pada element Input
Pada kasus ini, Directive v-bind juga mendukung value boolean -->

  <div>
    <!-- atribute dan nama variabel -->
    <h1 :id="id" v-bind:class="classHello">{{ hello }}</h1>
    <div :class="classHello" v-html="classHello"></div>

    <!-- element button yang disable -->
     <button class="button" :disabled="buttonDisable">This is Button Disable</button>
  </div>
</template>

<script setup>
// nama variabel dengan
const hello = "Perkenalkan saya Nabil";
const classHello = "Hello ini Fadilah";

// atribute dan nama variabel sama
const id = "Mohammad";

// boolean attribute
const buttonDisable = true;
</script>

<style scoped>
.hello {
    color: aqua;
}

.button {
    margin-top: 10px;
    padding: 7px;
    cursor: pointer;
    color: white;
}
</style>
