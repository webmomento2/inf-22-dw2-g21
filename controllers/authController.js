const {getSecret } = require('../services/userService');
const apikeyheader = "x-api-key"

const auth = async function (req, res, next) {
  var apiKey =await req.get(apikeyheader);

  if(await getSecret(apiKey)){
    console.log('Autenticado');
    next();
  }else{
    console.log('Usuário não autenticado ou Token nao é válido!')
    res.status(401).json({ message: "Token is not valid"});
  }
};

module.exports = auth;