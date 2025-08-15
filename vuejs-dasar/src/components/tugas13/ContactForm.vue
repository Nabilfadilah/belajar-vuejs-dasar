<script setup>
// data model
// const model = defineModel();

// Model Options
const model = defineModel({
    // bisa ditambah model option
    type: Object,
    required: true,
    // default: {
    //     name: "",
    //     email: "",
    //     age: 0,
    //     type: "Regular",
    //     complain: false,
    //     message: ""
    // }

    // Model Getter dan Setter
    get: (value) => {
        // kita rubah input email jadi uppercase
        value.email = value.email.toUpperCase();
        return value;
    }
});



</script>

<template>
  <div>
    <h1>Contact Us</h1>
    <form>
      <div class="input-form">
        <label for="name"
          >Name:
          <input type="text" id="name" v-model="model.name" />
        </label>
      </div>
      <div class="input-form">
        <label for="email"
          >Email:
          <input type="email" id="email" v-model="model.email" />
        </label>
      </div>
      <div class="input-form">
        <label for="age"
          >Age:
          <input type="number" id="age" v-model="model.age" />
        </label>
      </div>
      <div class="input-form">
        <label for="type"
          >Type:
          <select id="type" v-model="model.type">
            <option value="Regular">Regular</option>
            <option value="VIP">VIP</option>
          </select>
        </label>
      </div>
      <div class="input-form">
        <label for="complain"
          >Complain:
          <input type="checkbox" id="complain" v-model="model.complain" />
        </label>
      </div>
      <div class="input-form">
        <label for="message"
          >Message:
          <textarea type="checkbox" id="message" v-model="model.message"></textarea>
        </label>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.input-form {
  display: flex;
  flex-direction: column;
}

.input-form label {
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
