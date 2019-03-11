function Noticia(connection) {

    this._connection = connection;

    Noticia.prototype.getNoticias = function(callback) {
        return this._connection.query('SELECT * FROM noticias', callback);
    }

    Noticia.prototype.getNoticia = function(id, callback) {
        return this._connection.query('SELECT * FROM noticias WHERE id = '+ id, callback)
    }

    Noticia.prototype.salvarNoticia = function(noticia,callback) {
        return this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

    Noticia.prototype.get5Ultimas = function(callback) {
        return this._connection.query('SELECT * FROM noticias ORDER BY data_noticia DESC LIMIT 5', callback);
    }

    Noticia.prototype.destroy = function(id, callback) {
        return this._connection.query('DELETE FROM noticias WHERE id = '+ id, callback);
    }

    Noticia.prototype.update = function(id, noticia, callback) {
       //return this._connection.query('UPDATE FROM noticias SET nome= ? WHERE id='+id, noticia, callback);
       this._connection.query(`UPDATE noticias SET titulo='${noticia.titulo}', resumo='${noticia.resumo}', autor='${noticia.autor}', data_noticia='${noticia.data_noticia}', noticia='${noticia.noticia}' WHERE id='${id}'`, callback);
    }
}

module.exports = function() {
    return Noticia;
}