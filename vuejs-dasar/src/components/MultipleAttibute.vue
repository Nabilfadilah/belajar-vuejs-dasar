<template>
  <div>
    <!-- atribute dan nama variabel -->
    <h1 v-bind="data">{{ hello }}</h1>
    <div :class="data.id" v-html="hello"></div>

    <!-- element button yang disable -->
     <button class="button" :disabled="buttonDisable">This is Button Disable</button>
  </div>
</template>

<script setup>
const hello = "INI Multiple Attribute"

// boolean attribute
const buttonDisable = true;

// multipe attribute data object
const data = {
    id: "asas",
    class: "hello"
}
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
