<script setup>
    defineProps(['name', 'option']);
    const size = defineModel();
</script>

<template>
    <div class="radio-item">
        <input type="radio" v-model="size" v-bind:id='option' v-bind:name="name" v-bind:value="option">
        <label v-bind:for="option">{{ option }}</label>
    </div>
</template>

<style>
.radio-item [type="radio"] {
	display: none;
}

.radio-item label {
	display: block;
	padding: 10px 10px 7px 30px;
	background: #e99e58;
	border: 2px solid #efbe82;
	border-radius: 8px;
	cursor: pointer;
    min-width: 40px;
	white-space: nowrap;
	position: relative;
	transition: 0.4s ease-in-out 0s;
}

.radio-item label:hover {
	background: #efbe82;
}

.radio-item label:after,
.radio-item label:before {
	content: "";
	position: absolute;
	border-radius: 50%;
}

.radio-item label:after {
	height: 10px;
	width: 10px;
	border: 2px solid #d46522;
	left: 10px;
    top: 12px;
}

.radio-item label:before {
	background: #d46522;
	height: 12px;
	width: 12px;
	left: 11px;
    top: 13px;
	transform: scale(3);
	opacity: 0;
	visibility: hidden;
	transition: 0.4s ease-in-out 0s;
}

.radio-item [type="radio"]:checked ~ label {
	border-color: #d46522;
	background: #e27d2d;
}

.radio-item [type="radio"]:checked ~ label::before {
	opacity: 1;
	visibility: visible;
	transform: scale(1);
}
</style>