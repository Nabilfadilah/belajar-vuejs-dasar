<!-- buat halaman yang memiliki input firstName dan lastName, 
 selanjutnya ketika di klik tombol Say Hello, nanti akan menampilkan 
 tulisan Hello firstName lastName -->

<script setup>
import {reactive} from "vue";

const person = reactive({
  firstName: "",
  lastName: "",
});

function sayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}
</script>

<template>
  <div>
    <div>
      <input class="input" placeholder="First Name" type="text" id="firstName" />
      <input class="input" placeholder="Last Name" type="text" id="lastName" />
      <button class="button" v-on:click="sayHello">Say Hello</button>
    </div>

    <h1><i>Hello </i>{{ person.firstName }} {{ person.lastName }}</h1>
  </div>
</template>

<style scoped>
.button {
    margin: 5px;
    color: white;
    background: seagreen;
}

.input {
    padding: 5px;
    margin-left: 10px;
}
</style>
