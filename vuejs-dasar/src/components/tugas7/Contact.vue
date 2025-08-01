<!-- membuat halaman Contact Us dengan menggunakan v-model, kita bisa menggunakan beberapa modifier, yang digunakan untuk merubah input value -->

<script setup>
import {reactive} from "vue";

// reactive fungsi bawaan dari Composition API yang digunakan untuk membuat objek reaktif, yaitu objek yang otomatis terdeteksi perubahannya oleh Vue.
// dan karena object, sebaiknya pakai reactive
const contact = reactive({
  name: "",
  email: "",
  age: 0,
  type: "Regular",
  complain: false,
  message: "",
});
</script>

<template>
  <div class="form-container">
    <h1>Contact Us</h1>
    <form class="contact-form">

      <!-- mudah menggunakan v-model, untuk memanggil data  -->
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="contact.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="contact.email" required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" v-model.number="contact.age" required />
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" v-model="contact.type" required>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select>
      </div>

      <div class="form-group checkbox-group">
        <label>
          <input type="checkbox" v-model="contact.complain" required />
          Complain
        </label>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="contact.message" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

    <h1>Preview</h1>
    <div>
      <p>
        Name: <b>{{ contact.name }}</b>
      </p>
      <p>
        Email: <b>{{ contact.email }}</b>
      </p>
      <p>
        Age: <b>{{ contact.age }}</b>
      </p>
      <p>
        Type: <b>{{ contact.type }}</b>
      </p>
      <p>
        Complain: <b>{{ contact.complain }}</b>
      </p>
      <p>
        Message: <b>{{ contact.message }}</b>
      </p>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input,
select,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

button {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  align-self: flex-end;
}

button:hover {
  background-color: #0056b3;
}
</style>
