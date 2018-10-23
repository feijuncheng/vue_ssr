module.exports = app => {
    const { router, controller } = app;
    console.log(2333)
    router.get('/', controller.home.index)
};