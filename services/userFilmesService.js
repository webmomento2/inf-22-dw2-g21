const Filme = require("../models/filmeModels");
const { getByKey } = require("../services/userService");

async function getFilmes(iduser, key) {  
  
    const userId = await getByKey(key); 

    if (userId.dataValues.id != iduser) {
        console.log('User não autoriazado')
        return false;
    } else {
        const filmes = await Filme.findAll({ where: { userId: `${iduser}`}});  
    
        if (filmes == null) {
            console.log('User não autoriazado')
            return false;
        } else {
            return filmes;
        }
    } 
  
};

module.exports = { getFilmes };