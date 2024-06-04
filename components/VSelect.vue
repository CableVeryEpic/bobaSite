<script setup>
defineProps(['name', 'options']);
let value = defineModel();
</script>

<template>
    <label :for="name">Choose a {{ name }}:</label>
    <select v-model="value" :name="name" :id="name">
        <option value="" hidden>Select a {{ name }}...</option>
        <option v-for="option in options" :value="option.tag" >{{ option.Name }}</option>
    </select>
</template>