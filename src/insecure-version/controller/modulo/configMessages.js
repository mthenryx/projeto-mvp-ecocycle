const DEFAULT_MESSAGE = {
    api_description: 'API para controlar o projeto EcoCycle',
    development: 'Matheus Henry dos Santos',
    version: '1.0.7.26',
    status: Boolean,
    status_code: Number,
    response: {}
}

//Mensagens de sucesso

const SUCCESS_CREATED_ITEM = {
    status: true,
    status_code: 201,
    message: 'Recurso criado com sucesso'
}

const SUCCESS_RESPONSE = {
    status: true,
    status_code: 200,
    message: 'Operação bem-sucedida'
}

// Mensagens de erro

const ERROR_BAD_REQUEST = {
    status: false,
    status_code: 400,
    message: 'Não foi possível processar a requisição devido a erros de entrada de dados.'
}

const ERROR_NOT_REGISTER = {
    status: false,
    status_code: 401,
    message: 'Não foi possível processar a requisição pois o usuário não está autenticado.'
}

const ERROR_NOT_FOUND = {
    status: false,
    status_code: 404,
    message: 'Não foi possível processar a requisição pois o recurso solicitado não foi encontrado.'
}

const ERROR_INTERNAL_SERVER_MODEL = {
    status: false,
    status_code: 500,
    message: 'Não foi possível processar a requisição devido a um erro interno no servidor [MODEL]'
}

const ERROR_INTERNAL_SERVER_CONTROLLER = {
    status: false,
    status_code: 500,
    message: 'Não foi possível processar a requisição devido a um erro interno no servidor [CONTROLLER]'
}

module.exports = {
    DEFAULT_MESSAGE,
    SUCCESS_CREATED_ITEM,
    SUCCESS_RESPONSE,
    ERROR_BAD_REQUEST,
    ERROR_NOT_REGISTER,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_INTERNAL_SERVER_CONTROLLER
}