<script setup>
defineProps(['name']);
const rangeStrings = ref(['None', 'Min', 'Half', 'Less', 'Full', 'More']);

let val = defineModel({ default: 4 });

</script>

<template>
    <div class="range-input">
        <label v-bind:for="name">Choose your {{ name }} level:</label>
        <div>
            <input type="range" v-model="val" v-bind:id="name" v-bind:name="name" min="0" max="5" step="1"/>
            <p>{{  rangeStrings[val] }}</p>
        </div>
    </div>
</template>

<style>
input[type=range] {
    appearance: none;
    margin: 10px 0;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 1px 1px #8c3f20;
    background: #E27D2D;
    border-radius: 5px;
    border: 1px solid #8c3f20;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #8c3f20;
    border: 1px solid #3d190d;
    height: 16px;
    width: 12px;
    border-radius: 5px;
    background: #FBEDD9;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #E27D2D;
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 1px 1px #8c3f20;
    background: #E27D2D;
    border-radius: 5px;
    border: 1px solid #3d190d;
}

input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #8c3f20;
    border: 1px solid #3d190d;
    height: 16px;
    width: 12px;
    border-radius: 5px;
    background: #FBEDD9;
    cursor: pointer;
}

input[type=range]::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    transition: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type=range]::-ms-fill-lower {
    background: #E27D2D;
    border: 1px solid #3d190d;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #8c3f20;
}

input[type=range]::-ms-fill-upper {
    background: #E27D2D;
    border: 1px solid #3d190d;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #8c3f20;
}

input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #8c3f20;
    border: 1px solid #3d190d;
    height: 16px;
    width: 12px;
    border-radius: 5px;
    background: #FBEDD9;
    cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
    background: #E27D2D;
}

input[type=range]:focus::-ms-fill-upper {
    background: #E27D2D;
}
</style>