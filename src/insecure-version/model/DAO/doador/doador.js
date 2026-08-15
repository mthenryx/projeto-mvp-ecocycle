const knex = require('knex')

const knexDataBaseConfig = require('../../database_config/knexfile.js')

const knexConection = knex(knexDataBaseConfig.development)

const insertDoador = async function(doador) {
    try {
        let sql = `insert into tbl_doador (
                        nome, 
                        email, 
                        senha
                    ) values (
                        '${doador.nome}', 
                        '${doador.email}', 
                        '${doador.senha}'
                    )`

        let result = await knexConection.raw(sql)

        if(result){
            return result[0].insertId
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

const selectAllDoador = async function() {
    try {
        
        let sql = 'select * from tbl_doador'

        let result = await knexConection.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

const selectByIdDoador = async function(id) {
    try {
        let sql = `select * from tbl_doador where id = ${id}`

        let result = await knexConection.raw(sql)

        if(Array.isArray(result)){ 
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

const updateDoador = async function(doador) {
    try {
        let sql = `update tbl_doador set 
                        nome = '${doador.nome}',
                        email = '${doador.email}',           
                        senha = '${doador.senha}'
                    where id = ${doador.id};`

        let result = await knexConection.raw(sql)

        if(result){
            return true
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

const deleteDoador = async function(id) {
    try {
        let sql = `delete from tbl_doador where id = ${id};`

        let result = await knexConection.raw(sql)

        if(result){
            return true
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {
    insertDoador,
    selectAllDoador,
    selectByIdDoador,
    updateDoador,
    deleteDoador
}