const knex = require('knex')

const knexDataBaseConfig = require('../../database_config/knexfile.js')

const knexConection = knex(knexDataBaseConfig.development)

const insertDoador = async function(doador) {
    try {

        let result = await knexConection.raw(sql)

        if(result){

        }else{
            return false
        }
        
    } catch (error) {
        return false
    }
}

const selectAllDoador = async function() {
    try {

        let result = await knexConection.raw(sql)

        if(result){

        }else{
            return false
        }
          
    } catch (error) {
        return false
    }
}

const selectByIdDoador = async function(id) {
    try {

        let result = await knexConection.raw(sql)

        if(result){

        }else{
            return false
        }
            
    } catch (error) {
        return false
    }
}

const updateDoador = async function(doador) {
    try {

        let result = await knexConection.raw(sql)

        if(result){

        }else{
            return false
        }
           
    } catch (error) {
        return false
    }
}

const deleteDoador = async function(id) {
    try {

        let result = await knexConection.raw(sql)

        if(result){

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