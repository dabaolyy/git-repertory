var data = [{
    component: () =>
        import ('@/components/example/HelloWorld.vue'),
    name: "HelloWorld"
}, {
    component: () =>
        import ('@/components/example/HelloWorld11.vue'),
    name: "HelloWorld11"
}, {
    component: () =>
        import ('login-form'),
    name: "login-form"
}]

module.exports = data;