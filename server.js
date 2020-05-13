const Pool = require('pg').Pool;

// 1- Abrir conexão
// 2- Executar comando SQL
// 3- Fechar a conexão

const express = require('express');
const server = express();
server.use(express.json());

const pool = new Pool({
    user: 'mwdjwugnlerish',
    password: 'd4cb70cfcb644791928e2f5a590da4e69ba1fd6a138d49a9030900a120b7899a',
    host: 'ec2-52-87-135-240.compute-1.amazonaws.com',
    database: 'dbr99e9b5i24q9',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})


//SELECT SIMPLES (GET)
server.get('/livros', async function(request, response) {
    const result = await pool.query('SELECT * FROM livros');
    return response.json(result.rows);
})

//INSERT (POST)
//autor, titulo, anopublic, genero, lido
server.post('/livros', async function(request, response){
    const autor = request.body.autor;
    const titulo = request.body.titulo;
    const genero = request.body.genero;
    const anopublic = request.body.anopublic;

    const sql = `
    INSERT INTO livros (autor, titulo, anopublic, genero, lido) VALUES ($1, $2, $3, $4, false)
    `;

    await pool.query(sql, [autor, titulo, anopublic, genero]);
    return response.status(201).send();
});


//UPDATE (PUT)
server.put('/livros/:id', async function(req, res){
    const id = req.params.id;
    const autor = req.body.autor;
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const anopublic = req.body.anopublic;
    const lido = req.body.lido;

    const sql = `
    UPDATE livros SET autor = $1, titulo = $2, genero = $3, anopublic = $4, lido = $5 where id = $6
    `;

    await pool.query(sql, [autor, titulo, genero, anopublic, lido, id]);

    res.send();
});

//DELETE 
server.delete('/livros/:id', async function(req, res){
    const id = req.params.id;

    sql = 'DELETE FROM livros WHERE id = $1';

    await pool.query(sql, [id]);

    res.send();
})

//GET COM FILTRO
server.get('/livros/:id', async function(req, res){
    const id = req.params.id;
    const sql = 'SELECT * FROM livros WHERE id = $1';
    const retorno = await pool.query(sql, [id]);
    return res.json(retorno.rows);
    
});

server.listen(process.env.PORT || 3000);