<script>
export default {
    name: "CardUnit",
};
</script>

<template>
    <b-card
        title="Заголовок карточки"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Изображение"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
    >
        <b-card-text>
            <b-list-group>
                <b-list-group-item class="border-0 p-0">
                    <span class="font-weight-bold">Population: </span>
                    998899
                </b-list-group-item>
                <b-list-group-item class="border-0 p-0">
                    <span class="font-weight-bold">Region: </span>
                    Europe
                </b-list-group-item>
                <b-list-group-item class="border-0 p-0">
                    <span class="font-weight-bold">Capital: </span>
                    Berlin
                </b-list-group-item>
            </b-list-group>
        </b-card-text>
    </b-card>
</template>

<style scoped></style>
