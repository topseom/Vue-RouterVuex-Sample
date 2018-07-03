<template>
    <div>
        <HelloWorld v-bind:msg="title"/>
        <button v-on:click="countIncreaseBy({amount:10})" >Change</button>
        <Compo1 v-bind:text="subtitle" />
        <Compo2 />
        <FormItem />
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue';
    import Compo1 from '../components/Compo1.vue';
    import Compo2 from '../components/Compo2.vue';
    import FormItem from '../components/FormItem';
    
    import { createNamespacedHelpers } from 'vuex';
    const { mapActions } = createNamespacedHelpers('counter');

    export default {
        name:"HomePage",
        components:{
            HelloWorld,
            Compo1,
            Compo2,
            FormItem
        },
        data(){
            return{
            title:"Movie List!",
            subtitle:"This is vue component!"
            }
        },
        methods:{
            changeTitlte(){
                this.$data.title = "Movie Change!";
            },
            ...mapActions({
                countIncrease:'increment',
                countIncreaseBy:'incrementBy'
            })
        }
    }
</script>