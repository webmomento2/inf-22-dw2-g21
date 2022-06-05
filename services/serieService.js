const Serie = require("../models/serieModels");
const { getByKey } = require("../services/userService");

async function getAll() {  
    /*const db = await teste(); //.then((value)=> console.log("value->", value)).catch(()=> false);
    console.log("db->", db);
    return db;*/
  
    const serie = await Serie.findAll();
    //console.log(filmes.every(serie => serie instanceof Serie)); // true
    //console.log("All filmes:", JSON.stringify(filmes, null, 2));
  
    return serie;
  
};

async function getOne(chave, key){
  
  const userId = await getByKey(key); 
  
  const serie = await Serie.findOne({ where: { id: `${chave}`, userId: `${userId.id}` } });

  if (serie === null) {
    console.log('Not found!');
    return false
  } else {
    return serie;
  }

};

async function createSerie(nome, ano, genero, apiKey) {
  
  const userId = await getByKey(apiKey);
  
  const serie = await Serie.create({
      
    nome: `${nome}`,
    ano: `${ano}`,
    genero: `${genero}`,
    userId: `${userId.id}` 
    
  })
  return serie;
}

async function doUpdate(id, nome, ano, genero, apiKey){

  const userId = await getByKey(apiKey);
  const umaserie = await Serie.findOne({ where: { id: `${id}`, userId: `${userId.id}` } });
  
  if (umaserie === null){
    return false;
  }else{
    if (nome != undefined) {
      Serie.update({ nome: `${nome}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    if (ano != undefined) {
      Serie.update({ ano: `${ano}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    if (genero != undefined) {
      Serie.update({ genero: `${genero}`}, { where: { id: `${id}`, userId: `${userId.id}` } })
    };
    return true;
  }
};

async function doDelete(id, apiKey){

  const userId = await getByKey(apiKey);
  const umaserie = await Serie.findOne({ where: { id: `${id}`, userId: `${userId.id}` } });
  
  if (umaserie === null){
    return false;
  }else{
    Serie.destroy({
      where: {
        id: `${id}`, userId: `${userId.id}`
      }
    });
    return true;
  }
};


module.exports = { getAll, createSerie, getOne, doUpdate, doDelete };