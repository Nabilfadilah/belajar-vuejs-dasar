<script setup>

// bisa menambahkan argument pada model ketika menggunakan defineModel(argument, option)

// "name" = argument 
const [name, nameModifiers] = defineModel("name", {
    type: String,

    // Model Modifier
    get: (value) => {
        // jika modifiernya jadi uppercase 
        if(nameModifiers.uppercase) {
            // maka jadikan semua uppercase
            return value.toUpperCase();
        } else {
            // tapi kalau tidak ada huruf uppercase, maka jangan
            return value;
        }
    }
}); 
const email = defineModel("email", {
    type: String
}); 
const age = defineModel("age", {
    type: Number
}); 
const type = defineModel("type", {
    type: String
}); 
const complain = defineModel("complain", {
    type: Boolean
}); 
const message = defineModel("message", {
    type: String
}); 


</script>

<template>
  <div class="contact-list">
    <h2>Preview List dengan Model Argument</h2>
    <div>
      <p>
        Name: <b>{{ name }}</b>
      </p>
      <p>
        Email: <b>{{ email }}</b>
      </p>
      <p>
        Age: <b>{{ age }}</b>
      </p>
      <p>
        Type: <b>{{ type }}</b>
      </p>
      <p>
        Complain: <b>{{ complain }}</b>
      </p>
      <p>
        Message: <b>{{ message }}</b>
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-list {
    padding-bottom: 10px;
}

</style>
