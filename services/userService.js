const User = require("../models/userModels");


// function to get the secret associated to the key id
async function getSecret(keyId, done) {


  const auth = await User.findOne({ where: { apiKey: `${keyId}` } });
  if (auth === null) {
    return false;
  } else {
      return true;
  }

}

async function createUser(apiKey, username, email) {  
  try {
    const user = await User.create({
      apiKey: `${apiKey}`,
      username: `${username}`,
      email: `${email}`,
    })
    return user;
  } catch (error) {
    console.log("Autenticação já existe");
    return false;
  }
}

async function getAll() {  
  /*const db = await teste(); //.then((value)=> console.log("value->", value)).catch(()=> false);
  console.log("db->", db);
  return db;*/

  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));

  return users;

};


async function doUpdate(id, username, email, apiKey){
  
  const umuser = await User.findOne({ where: { id: `${id}`, apiKey: `${apiKey}` } });
  
  if (umuser === null){
    return false;
  }else{
    User.update(
      { username: `${username}`, email: `${email}`, apiKey: `${apiKey}`},
      { where: { id: `${id}` } }
    )
    return true;
  }
};

async function getOne(chave, key){
  
  
  const user = await User.findOne({ where: { id: `${chave}`, apiKey: `${key}` } });
 
  if (user === null) {
    console.log('Not found!');
    return false
  } else {
    return user;
  }
};

async function getByKey(chave){
  
  const user = await User.findOne({ where: { apiKey: `${chave}` } });

  if (user === null) {
    console.log('Not found!');
    return false
  } else {
    return user;
  }
};

async function doDelete(id, apiKey){

  
  const umuser = await User.findOne({ where: { id: `${id}`, apiKey: `${apiKey}` } });
  
  if (umuser === null){
    return false;
  }else{
    User.destroy({
      where: {
        id: `${id}`
      }
    });
    return true;
  }
};

 module.exports = { getSecret, createUser, getAll, doUpdate, getOne, getByKey, doDelete };