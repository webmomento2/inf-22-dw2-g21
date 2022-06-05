const Filme = require("../models/filmeModels");
const { getByKey } = require("../services/userService");

async function getAll() {  
  
    const filmes = await Filme.findAll();  
    return filmes;
  
};

async function getOne(chave, key){

  const userId = await getByKey(key); 
  
  const filme = await Filme.findOne({ where: { id: `${chave}`, userId: `${userId.id}` } });

  if (filme === null) {
    console.log('Not found!');
    return false
  } else {
    return filme;
  }
};

async function createFilme(nome, ano, genero, apiKey) {
  
  const userId = await getByKey(apiKey);
  
  const filme = await Filme.create({

    nome: `${nome}`,
    ano: `${ano}`,
    genero: `${genero}`,
    userId: `${userId.id}`
    
  })
  return filme;
}

async function doUpdate(id, nome, ano, genero, apiKey){

  const userId = await getByKey(apiKey);
  const umfilme = await Filme.findOne({ where: { id: `${id}`, userId: `${userId.id}` } });
  
  if (umfilme === null){
    return false;
  }else{
    if (nome != undefined) {
      Filme.update({ nome: `${nome}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    if (ano != undefined) {
      Filme.update({ ano: `${ano}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    if (genero != undefined) {
      Filme.update({ genero: `${genero}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    return true;
  }
};

async function doDelete(id, apiKey){

  const userId = await getByKey(apiKey);
  const umfilme = await Filme.findOne({ where: { id: `${id}`, userId: `${userId.id}` } });
  
  if (umfilme === null){
    return false;
  }else{
    Filme.destroy({
      where: {
        id: `${id}`, userId: `${userId.id}`
      }
    });
    return true;
  }
};


module.exports = { getAll, createFilme, getOne, doUpdate, doDelete };