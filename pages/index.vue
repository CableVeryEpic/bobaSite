<script setup>
    import { ref } from "@vue/reactivity";
    //import { createDrink } from "~/composables/drinkCreation"; 

    const { data: bases } = await useFetch('/api/base');
    const { data: milks } = await useFetch('/api/milk');
    const { data: flavours } = await useFetch('/api/flavour');
    const { data: toppings } = await useFetch('/api/topping');

    let baseVarietyArray = ref(null);
    let baseArray = toRaw(bases.value);
    let milkArray = ref(toRaw(milks.value));
    let flavourArray = ref(toRaw(flavours.value));
    let toppingArray = ref(toRaw(toppings.value));

    const size = ref(null);
    const variety = ref(null);
    const base = ref(null);
    const milk = ref(null);
    const flavouring = ref(null);
    const toppingOne = ref(null);
    const toppingTwo = ref(null);
    const toppingThree = ref(null);
    const ice = ref(4);
    const sugar = ref(4);
    const name = ref(null);
    const price = ref(null);

    // const postDrinkForm = async function () {
    //     await createDrink(variety.value, milk.value, flavouring.value, toppingOne.value, toppingTwo.value, toppingThree.value, ice.value, sugar.value, name.value, price)
    // }

    function baseVariety(variety) {
        baseVarietyArray.value = baseArray.filter(base => base.variety == variety);
    }
</script>

<template>
    <div class="content">
        <div class="bobaPreview">
        </div>
        <div class="bobaCustomiser">
            <h2>Customise your drink</h2>
            <form>
                <div class="radio-input">
                    <p>Choose a size:</p>
                    <div>
                        <Radio v-model="size" name="size" option="small" />
                        <Radio v-model="size" name="size" option="medium" />
                        <Radio v-model="size" name="size" option="large" />
                    </div>
                </div>
                <div>
                    <div class="select-input">
                        <label for="variety">Choose a variety of drink:</label>
                        <select v-model="variety" name="variety" id="variety" @change="baseVariety(variety)">
                            <option value="" hidden>Select a variety...</option>
                            <option value="black">Black Tea</option>
                            <option value="green">Green Tea</option>
                            <option value="oolong">Oolong Tea</option>
                            <option value="fruit">Fruit</option>
                            <option value="shake">Shake</option>
                        </select>
                    </div>
                    <div v-if="variety" class="select-input">
                        <VSelect v-model="base" name="base" :options="baseVarietyArray" />
                    </div>
                    <div v-if="base" class="select-input">
                        <VSelect v-model="milk" name="milk" :options="milkArray" />
                    </div>
                    <div v-if="milk" class="select-input">
                        <VSelect v-model="flavouring" name="flavour" :options="flavourArray" />
                    </div>
                </div>
                <div>
                    <p>Want toppings?</p>
                    <div class="select-input">
                        <VSelect v-model="toppingOne" name="topping" :options="toppingArray" />
                    </div>
                    <div v-if="toppingOne" class="select-input">
                        <VSelect v-model="toppingTwo" name="topping" :options="toppingArray" />
                    </div>
                    <div v-if="toppingTwo" class="select-input">
                        <VSelect v-model="toppingThree" name="topping" :options="toppingArray" />
                    </div>
                </div>

                <div>
                    <Range v-model="ice" name="ice"/>
                    <Range v-model="sugar" name="sugar"/>
                </div>
                <div>
                    <p>Give it a name!</p>
                    <input type="text" v-model="name" name="name" id="name">
                </div>
                <div class="form-result">
                    <button type="submit">Make Tea</button>
                    <p>$00.00</p>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import url('~/assets/style.css');
</style>