const bancodedados = {
    identificadorInstrutor : 3,
    identificadorAula: 2,
    instrutores:[
        {
            id: 1,
            nome: 'Pedin',
            email: 'pedin@gmail.com' ,
            status: true,
        },
        {
            id: 2,
            nome: 'Gilvan',
            email: 'gilvan@gmail.com',
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
}


module.exports = bancodedados