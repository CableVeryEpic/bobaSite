<template>
    <div class="content">
        <div class="bobaPreview">
        </div>
        <div class="bobaCustomiser">
            <h2>Customise your drink</h2>
            <form action="POST">
                <div class="radio-input">
                    <p>Choose a size:</p>
                    <div>
                        <Radio name="size" option="small" />
                        <Radio name="size" option="medium" />
                        <Radio name="size" option="large" />
                    </div>
                </div>
                <div>
                    <div class="select-input">
                        <label for="base">Choose a base for your drink:</label>
                        <select name="base" id="base">
                            <option value="" hidden>Select a base...</option>
                            <option value="black">Black Tea</option>
                            <option value="green">Green Tea</option>
                            <option value="oolong">Oolong Tea</option>
                            <option value="smoothie">Smoothie</option>
                            <option value="juice">Juice</option>
                        </select>
                    </div>
                    <!-- TODO: change variety select options depending on the selected base-->
                    <div class="select-input">
                        <label for="variety">Choose a variety:</label>
                        <select name="variety" id="variety" disabled>
                            <option value="" hidden>Select a variety...</option>
                            <option value="earl">Earl Gray</option>
                            <option value="english">English Breakfast</option>
                            <option value="pekoe">Pekoe</option>
                        </select>
                    </div>
                    <div class="select-input">
                        <label for="milk">Choose a milk type:</label>
                        <select name="milk" id="milk" disabled>
                            <option value="" hidden>Select a milk...</option>
                            <option value="">None</option>
                            <option value="milk">Milk</option>
                            <option value="soy">Soy</option>
                            <option value="almond">Almond</option>
                            <option value="oat">Oat</option>
                        </select>
                    </div>
                    <div class="select-input">
                        <label for="flavour">Add extra flavouring:</label>
                        <select name="flavour" id="flavour">
                            <option value="" hidden>Select a flavour...</option>
                            <option value="">None</option>
                            <option value="mango">Mango Syrup</option>
                            <option value="strawberry">Strawberry Syrup</option>
                            <option value="vanilla">Vanilla Extract</option>
                        </select>
                    </div>
                    <!-- OPTIONAL TODO: select input for flavour subcategories -->
                </div>
                <div>
                    <p>Want toppings?</p>
                    <div class="select-input">
                        <label for="topping-one">First topping:</label>
                        <select name="topping-one" id="topping-one">
                            <option value="" hidden>Select a topping...</option>
                            <option value="">None</option>
                            <option value="pearl">Tapioca Pearls</option>
                            <option value="coconut">Coconut Jelly</option>
                            <option value="foam">Cream Cheese Foam</option>
                        </select>
                    </div>
                    <!-- TODO: hide topping additions unless the previous has been selected -->
                    <div class="select-input">
                        <label for="topping-two">Second topping:</label>
                        <select name="topping-two" id="topping-two" disabled>
                            <option value="" hidden>Select another topping...</option>
                            <option value="">None</option>
                            <option value="pearl">Tapioca Pearls</option>
                            <option value="coconut">Coconut Jelly</option>
                            <option value="foam">Cream Cheese Foam</option>
                        </select>
                    </div>
                    <div class="select-input">
                        <label for="topping-three">Third topping:</label>
                        <select name="topping-three" id="topping-three" disabled>
                            <option value="" hidden>Select a third topping...</option>
                            <option value="">None</option>
                            <option value="pearl">Tapioca Pearls</option>
                            <option value="coconut">Coconut Jelly</option>
                            <option value="foam">Cream Cheese Foam</option>
                        </select>
                    </div>
                </div>

                <div>
                    <Range name="ice"/>
                    <Range name="sugar"/>
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