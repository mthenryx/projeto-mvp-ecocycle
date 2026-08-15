const configMessages = require('../modulo/configMessages.js')

const doadorDAO = require('../../model/DAO/doador/doador.js')

const validarDados = function(doador) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    if(doador.nome == undefined || 
       doador.nome == null      || 
       doador.nome == ''        || 
       doador.nome.length > 100        ||
       !isNaN(doador.nome)){
        customMessages.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
    }else if(doador.email == undefined || 
             doador.email == null      || 
             doador.email == ''        || 
             doador.email.length > 256        ||
             !isNaN(doador.nome)){
        customMessages.ERROR_BAD_REQUEST.field = '[EMAIL] INVÁLIDO'
    }else if(doador.senha == undefined || 
             doador.senha == null      || 
             doador.senha == ''        || 
             doador.senha.length > 20){
        customMessages.ERROR_BAD_REQUEST.field = '[SENHA] INVÁLIDO'
    }else{
        return false
    }

    return customMessages.ERROR_BAD_REQUEST
}

const tratarDados = function(doador) {
    doador.nome = doador.nome.replaceAll("'", "")
    doador.email = doador.email.replaceAll("'", "")
    doador.senha = doador.senha.replaceAll("'", "")

    return doador
}

const inserirNovoDoador = async function(doador, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            let validar = await validarDados(doador)

            if(validar){
                return validar
            }else{
                
                let result = await doadorDAO.insertDoador(await tratarDados(doador))

                if(result){
                    doador.id = result

                    customMessages.DEFAULT_MESSAGE.status      = customMessages.SUCCESS_CREATED_ITEM.status
                    customMessages.DEFAULT_MESSAGE.status_code = customMessages.SUCCESS_CREATED_ITEM.status_code
                    customMessages.DEFAULT_MESSAGE.message     = customMessages.SUCCESS_CREATED_ITEM.message
                    customMessages.DEFAULT_MESSAGE.response    = doador

                    return customMessages.DEFAULT_MESSAGE
                }else{
                    return customMessages.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return customMessages.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}

const listarDoadores = async function() {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let result = await doadorDAO.selectAllDoador()

        if(result){
            if(result.length > 0){
                customMessages.DEFAULT_MESSAGE.status                   = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code              = customMessages.SUCCESS_RESPONSE.status_code
                customMessages.DEFAULT_MESSAGE.response.count           = result.length
                customMessages.DEFAULT_MESSAGE.response.doador   = result

                return customMessages.DEFAULT_MESSAGE
            }else{
                return customMessages.ERROR_NOT_FOUND 
            }
        }else{
            return customMessages.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const buscarDoador = async function(id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if(id == undefined || String(id).replaceAll(' ', '') == '' || id == null ||  isNaN(id) || id <= 0) {
            customMessages.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return customMessages.ERROR_BAD_REQUEST 
        }else{
            let result = await doadorDAO.selectByIdDoador(id)

            if(result){
                if(result.length > 0){
                    customMessages.DEFAULT_MESSAGE.status          = customMessages.SUCCESS_RESPONSE.status
                    customMessages.DEFAULT_MESSAGE.status_code     = customMessages.SUCCESS_RESPONSE.status_code
                    customMessages.DEFAULT_MESSAGE.response.doador = result

                    return customMessages.DEFAULT_MESSAGE
                }else{
                    return customMessages.ERROR_NOT_FOUND
                }
            }else{
                return customMessages.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarDoador = async function(doador, id, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            let resultBuscarDoador = await buscarDoador(id)

            if(resultBuscarDoador.status){
                let validar = await validarDados(doador)

                if(!validar){
                    doador.id = Number(id)

                    let result = await doadorDAO.updateDoador(await tratarDados(doador))
                
                    if(result){
                        customMessages.DEFAULT_MESSAGE.status       = customMessages.SUCCESS_UPDATE_ITEM.status
                        customMessages.DEFAULT_MESSAGE.status_code  = customMessages.SUCCESS_UPDATE_ITEM.status_code
                        customMessages.DEFAULT_MESSAGE.message      = customMessages.SUCCESS_UPDATE_ITEM.message
                        customMessages.DEFAULT_MESSAGE.response     = doador

                        return customMessages.DEFAULT_MESSAGE 
                    }else{
                        return customMessages.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return validar
                }
            }else{
                return resultBuscarDoador
            }
        }else{
            return customMessages.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const deletarDoador = async function(id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let resultBuscarDoador = await buscarDoador(id)

        if (resultBuscarDoador.status) {
            let result = await doadorDAO.deleteDoador(id)

            if (result) {
                customMessages.DEFAULT_MESSAGE.status      = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code = customMessages.SUCCESS_RESPONSE.status_code
                customMessages.DEFAULT_MESSAGE.message     = customMessages.SUCCESS_RESPONSE.message

                return customMessages.DEFAULT_MESSAGE
            } else {
                return customMessages.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return resultBuscarDoador 
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}

module.exports = {
    inserirNovoDoador,
    listarDoadores,
    buscarDoador,
    atualizarDoador,
    deletarDoador
}