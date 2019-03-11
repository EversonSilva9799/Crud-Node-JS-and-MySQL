
module.exports = function(app) {

    app.get('/noticias', function(req, res) {
        app.app.controllers.noticias.index(app, req, res);
    });

    app.get('/noticias/nova-noticia', function(req, res) {
        app.app.controllers.noticias.create(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.noticias.store(app, req, res);
    });

    app.get('/noticias/:id', function(req, res) {
        app.app.controllers.noticias.show(app, req, res);
    });


    app.get('/noticias/edit/:id', function(req, res) {
        app.app.controllers.noticias.edit(app, req, res);
    });

    app.post('/noticias/update/:id', function(req, res) {
        app.app.controllers.noticias.update(app, req, res);
    })

    app.get('/noticias/delete/:id', function(req, res) {
        app.app.controllers.noticias.destroy(app, req, res);
    });
}