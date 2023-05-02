<script>
export default {
    name: "SearchFilterUnit",
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: "Пожалуйста, выберите опцию" },
                { value: "a", text: "Это первая опция" },
                { value: "b", text: "Выбранная опция" },
                { value: { C: "3PO" }, text: "Эта опция со значением объекта" },
                { value: "d", text: "Эта одна отключена", disabled: true },
            ],
        };
    },
};
</script>

<template>
    <div>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <!-- <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-3"
        ></b-form-select>
        <div class="mt-3">
            Выбрано: <strong>{{ selected }}</strong>
        </div> -->
    </div>
</template>

<style scoped></style>
