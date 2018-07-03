<script>
import Vuex from 'vuex';
import Vue from 'vue';
import moduleCounter from '../modules/Counter.vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        counter:moduleCounter
    }
});

export default store;

</script>