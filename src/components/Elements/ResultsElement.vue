<script>
import CardUnit from '../Units/CardUnit.vue';

export default {
    name: 'ResultsElement',   
    data() {
        return {
            num: 8
        }
    },
    components: {
        CardUnit
    }
}
</script>

<template>
    <b-container fluid>
        <b-row cols="4">
            <b-col v-for="card in num" :key="card" >
                <CardUnit />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
    
</style>