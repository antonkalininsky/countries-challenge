<script>
export default {
    name: "SearchInputUnit",
};
</script>

<template>
    <div class="input-group shadow-sm py-0 rounded">
        <span class="input-group-prepend">
            <div class="input-group-text bg-white border-0 px-3 text-secondary">
                <i class="fa fa-search"></i>
            </div>
        </span>
        <input
            class="form-control py-2 pl-0 border-0 text-mid"
            type="search"
            value=""
            placeholder="Search for a country..."
        />
    </div>
</template>

<style scoped></style>
