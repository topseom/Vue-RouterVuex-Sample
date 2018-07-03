<template>
    <div>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Compo1',
    props:{
        text : String
    }
}
</script>

<style scoped>
    .text{
        color:#070707;
    }
</style>