//Import da biblioteca
const jwt = require("jsonwebtoken")
//Chave secreta para a criação do JWT
const SECRET = 'ecocycle2026'
//Tempo para validar o token do JWT (segundos)
const EXPIRES = 18000

//Criação do JWT (retorna um token)
const createJWT = async function(payLoad) {
    //Gera o Token
    //payload - a identificação do usuário autenticado
    //SECRET - a chave secreta
    //expiresIn - tempo de expiração do token
    const token = jwt.sign({"userID": payLoad,}, SECRET, {expiresIn: EXPIRES})

    return token
}

//Validação de autenticidade do JWT (Recebe o Token para validação)
const valideteJWT = async function(token) {

    let status = false

    //Valida a autenticidade do token
    jwt.verify(token, SECRET, async function(err, decode){
        
        if(!err){
            status = true
        }

        return status
    })
}

module.exports = {
    createJWT,
    valideteJWT
}

