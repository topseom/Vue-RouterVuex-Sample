<script>
    import HomePage from './pages/HomePage.vue';
    import AboutPage from './pages/AboutPage.vue';
    import VueRouter from 'vue-router';
    
    const routes = [
        { path:'/',component:HomePage },
        { path:'/about',component:AboutPage }
    ];
    
    export default new VueRouter({
         mode: 'history',
         base: __dirname,
         routes
    });
</script>