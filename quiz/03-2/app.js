Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    data: {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage: 'Bea go pa',


    }
})
