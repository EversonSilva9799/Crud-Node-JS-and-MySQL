var app = require('./config/server');

app.listen(3000, function() {
   console.log( 'Server ON');
});


// app.get('/aluno/novo', function(req, res) {
//     res.render('aluno/create');
// });

// var alunos = [
//     {'matricula': 123, 'nome': 'Everson'},
//     {'matricula': 456, 'nome': 'Kemi'}
// ];

// app.get('/alunos/:mat', function(req, res) {
//    let mat = req.params.mat;
 
//   alunos.find(aluno => {
//    if (aluno.matricula == mat) {
//         res.send(aluno.nome);
//     } 
//   });

//   res.send("Não Encontrado");

// })

// app.get('/aluno/:mat', function(req, res) {
//    let mat = req.params.mat;

//   alunos.forEach(aluno => {
//    if (aluno.matricula == mat) {
//         res.send(aluno.nome);
//     } 
//   });

//   res.send("Não Encontrado");

// })






