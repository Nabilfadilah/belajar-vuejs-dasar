<!-- masih ada yang bug dan error -->
<script setup>
import { nextTick, ref } from 'vue';

// component props
const props = defineProps(["name", "initialCount"])

console.info("load Component");
let counter = ref({
    // count: 0,
    count: Number(props.initialCount),
    name: "Nabil"
})

async function increment() {
    console.info(`increment counter : ${counter.value.count}`);
    counter.value = {
        name: counter.value.name,
        count: counter.value.count + 1
    }

    await nextTick()
    counter.value.count++
    
    await nextTick()
    counter.value.count++

    await nextTick()
    // gunakan manipulasi DOM
    document.getElementById('count').innerText = `Counter : ${count}`;
}

</script>

<template>
    <div>
        <!-- menambah props nama -->
        <h1 id="count">Counter {{ props.name }} : {{ count }}</h1>
        <button v-on:click="increment">Increment Button</button>
    </div>
</template>

<style scoped>

</style>
