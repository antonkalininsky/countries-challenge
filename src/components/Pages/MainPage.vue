<script>
import NavElement from '../Elements/NavElement.vue';
import SearchElement from '../Elements/SearchElement.vue';
import ResultsElement from '../Elements/ResultsElement.vue';

export default {
    name: 'MainPage',   
    components: {
        NavElement,
        SearchElement,
        ResultsElement
    }
}
</script>

<template>
    <div>
        <NavElement />
        <SearchElement />
        <ResultsElement />
    </div>
</template>

<style scoped>
    
</style>