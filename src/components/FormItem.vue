<template>
    <div>
        <form v-on:submit="handleSubmit">
            <input name="text" placeholder="Enter Text" type="text" autocomplete="off" />
            <input name="number" placeholder="Enter Number" type="number" autocomplete="off" />
            <button>Submit</button>
        </form>
        <ul v-if="items.length">
            <li v-for="(item,index) in items" v-bind:key="index" >
                <h2>text : {{item.text}} | price : <span>{{item.number}}</span></h2>
                <button v-on:click="handleRemoveItem(index)">delete!</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"FormItem",
    created(){
        //console.log("this is created!");
    },
    data(){
        return{
            items:[]
        }
    },
    methods:{
        handleSubmit(e){
            e.preventDefault();
            if(e.target.text.value && e.target.number.value){
                this.$data.items.push({text:e.target.text.value,number:e.target.number.value});
                e.target.reset();
            }
        },
        handleRemoveItem(index){
            this.$data.items.splice(index,1);
        }
    }
}
</script>