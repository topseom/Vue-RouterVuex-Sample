<script>
    const moduleCounter = {
        namespaced: true,
        state: {
            count: 0
        },
        getters: {
            checkCount:(state)=>{
            if(state.count > 0){
                return "yes is more than 0!";
            }
            return "no is equal 0!";
            }
        },
        mutations: {
            increment (state){
                state.count++;
            },
            incrementBy (state,payload) {
                state.count+=payload.amount;
            },
            decrement (state) {
                state.count--;
            }
        },
        actions:{
            increment(context){
                context.commit('increment');
            },
            incrementBy(context,data){  
                context.commit('incrementBy',{amount:data.amount});
            },
            decrement(context){
                context.commit('decrement');
            }
        }
    }
    export default moduleCounter;
</script>