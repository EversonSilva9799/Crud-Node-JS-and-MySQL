module.exports = function(app) {

    app.get('/admin', function(req, res) {
       app.app.controllers.admin.home_admin(app, req, res);
    });

    
}