module.exports.index = function(app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.Noticia(connection);

    noticiasModel.get5Ultimas(function(error, result) {
        console.log(result);
        res.render('home/index', {noticias : result});
    });
    
}