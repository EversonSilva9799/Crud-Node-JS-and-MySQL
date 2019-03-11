module.exports.index = function(app, req, res) {
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.Noticia(connection);
    
    Noticia.getNoticias(function(error, result) { 
        res.render('noticias/index', {noticias : result});
    });
}

module.exports.show = function(app, req, res) {
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.Noticia(connection);
    var id = req.params.id;
    
    Noticia.getNoticia(id, function(error, result) {
        res.render('noticias/show', {noticia : result});
    
    });  
}

module.exports.create = function(app, req, res) {
 
    res.render('noticias/create', {noticia : {}});
}

module.exports.store = function(app, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Campo Título é obrigatório').notEmpty();
    req.assert('resumo', 'Campo Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Campo Resumo deve estar entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Campo Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Campo Data é obrigatório').notEmpty();
    req.assert('noticia', 'Campo Noticia é obrigatório').notEmpty();

    var formInvalid = req.validationErrors();

    if(formInvalid ) {
        res.render('noticias/create', {erros : formInvalid, noticia: noticia});
        return;
    }

    
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.Noticia(connection);

    noticiasModel.salvarNoticia(noticia, function(erro, result) {
        res.redirect('/noticias');
    });
}

module.exports.destroy = function(app, req, res) {
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.Noticia(connection);
    var id = req.params.id;

    Noticia.destroy(id, function(error, result) {
        res.redirect('/noticias');
    })
}

module.exports.edit = function(app, req, res) {

    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.Noticia(connection);
    var id = req.params.id;

    Noticia.getNoticia(id, function(error, result) {
        res.render('noticias/edit', {noticia : result});
    });  
}

module.exports.update = function(app, req, res) {

    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.Noticia(connection);
    var noticia = req.body;
     
    var id = req.params.id;

   

    Noticia.update(id, noticia, function(error, result) {
      res.redirect("/noticias");
    });
}

