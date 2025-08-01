<!-- 
tambahkan event @input pada input First Name dan Last Name
Sehingga perubahan terjadi secara instant tanpa harus menunggu pengguna meng-klik tombol 
-->

<script setup>
import {reactive, ref} from "vue";

const person = reactive({
  firstName: "",
  lastName: "",
});

const counter = ref(0);
function increment() {
  console.log(`increment called`);
  counter.value++;
}

function sayHello() {
  // prevent dafault
//   event.preventDefault();

  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

// function changeFirstName() {
//     person.firstName = document.getElementById("firstName").value;
// }

// function changeLastName() {
//     person.lastName = document.getElementById("lastName").value;
// }

// event argument
function changeFirstName(event) {
  // person.firstName = document.getElementById("firstName").value;
  person.firstName = event.target.value;
}

function changeLastName(event) {
  // person.lastName = document.getElementById("lastName").value;
  person.lastName = event.target.value;
}
</script>

<template>
  <div>
    <button class="btn-increment" v-on:click="counter++">
      Increment: {{ counter }}
    </button>
    <button class="btn-increment" v-on:click="increment">
      Increment: {{ counter }}
    </button>
    <form>
      <input
        class="input"
        placeholder="First Name"
        type="text"
        id="firstName"
        v-on:input="changeFirstName"
      />
      <input
        class="input"
        placeholder="Last Name"
        type="text"
        id="lastName"
        @input="changeLastName"
      />
      <button class="button" v-on:click="sayHello">Say Hello</button>

      <!-- event modifier -->
      <button class="button" v-on:click.prevent="sayHello">
        Prevent Say Hello
      </button>
    </form>

    <h1><i>Hello </i>{{ person.firstName }} {{ person.lastName }}</h1>
  </div>
</template>

<style scoped>
.button {
  margin: 5px;
  color: white;
  background: seagreen;
}

.btn-increment {
  margin: 10px;
}

.input {
  padding: 5px;
  margin-left: 10px;
}
</style>
