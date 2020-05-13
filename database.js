// yarn add pg

const Pool = require('pg').Pool;

// 1- Abrir conexão
// 2- Executar comando SQL
// 3- Fechar a conexão

const pool = new Pool({
    user: 'ukvjdbllpwdygt',
    password: '57adeb254b05a9047ce37f8ebc8b852b725b67677d93ccd4c067d9030af098e7',
    host: 'ec2-52-202-22-140.compute-1.amazonaws.com',
    database: 'dfu8cv97r5n43f',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

//Create Table
/* const sql = `
    CREATE TABLE IF NOT EXISTS livros(
        id serial primary key,
        autor varchar (50),
        titulo varchar (50),
        anopublic varchar (4),
        genero varchar (15),
        lido boolean
    )
`;
pool.query(sql, function (erro, resultado) {
    if (erro)
        throw erro

    console.log('Tabela criada com sucesso!');
}); */

//INSERT
/* const sql = `
    INSERT INTO livros (autor, titulo, anopublic, genero, lido)
        VALUES
            ('Julio Verne', 'Volta ao Mundo em 80 Dias', '1800', 'Ficção', true),
            ('Julio Verne', 'Viagem ao Centro da Terra', '1800', 'Ficção', true),
            ('Julio Verne', '20 Mil Léguas Submarinas', '1800', 'Ficção', true)
`;
pool.query(sql, function(erro, resultado) {
    if (erro)
        throw erro

    console.log('Inserido com sucesso');
}); */

// SELECT no arquivo server.js