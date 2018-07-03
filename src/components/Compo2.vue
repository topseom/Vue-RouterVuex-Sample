<template>
    <div>
        <ul v-if="list.length" style="list-style: none;padding-left: 0;">
            <li v-for="(item,index) in list" v-bind:key="index">
                {{ item.title }} 
            </li>
        </ul>
        <button v-on:click="movies">{{ text }}</button>
        <button v-on:click="clear">clear</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Compo2',
        created(){
            //console.log("create!");
            //this.test1();
            //this.movies();
        },
        data(){
            return {
                text: "Gen Movies!",
                list:[]
            };
	    },
        methods:{
            clickMe(){
                this.$data.text = "Clicked!";
            },
            test1(){
                console.log("test1!");
            },
            movies(){
                axios("https://raw.githubusercontent.com/topseom/data/master/movies.json").then(data=>{
                    this.list = data.data;
                }).catch(err=>{
                    console.log(err);
                });
            },
            clear(){
                this.$data.list = [];
            }
        }
    }
</script>