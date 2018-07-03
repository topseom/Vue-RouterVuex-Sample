<template>
    <div>
        <h2>Hello About Page! {{ count }} - {{ checkCount }}</h2>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapState,mapGetters } = createNamespacedHelpers('counter');
    
    export default {
        name : "AboutPage",
        computed:{
            ...mapGetters([
                'checkCount'
            ]),
            ...mapState([
                'count'
            ])
        }
    }
</script>