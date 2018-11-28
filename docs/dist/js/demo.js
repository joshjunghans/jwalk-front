window.onload = (function() {

    var Home = Vue.component('home', {
        template : '#template-home'
    });

    var Typography = Vue.component('typography', {
        template: '#template-typography'
    });

    var routes = [
        { path: '/', component : Home },
        { path: '/typography', component : Typography },
    ];

    console.log('hello');

    var router = new VueRouter({
        routes: routes
    });

    var app = new Vue({
        router
    }).$mount('#jwalk-demo')

})();