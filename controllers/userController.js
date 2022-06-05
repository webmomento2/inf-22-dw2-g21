const { getAll, createUser, doUpdate, getOne, doDelete  } = require("../services/userService");
const apikeyheader = "x-api-key";

const create = async (req, res, next) => {
    
    const apiKey = await req.body.apiKey;
    const username  = await req.body.username;
    const email  = await req.body.email;

    const newUser = await createUser(apiKey, username, email);
    if (newUser == false) {
        res.status(401).json({message: 'Não foi possível criar'})
    } else {
        console.log(newUser.dataValues);
        res.json(newUser);
    }
};

const list =  async (req, res, next) => {

    const users = await getAll();
    res.json(users);
     
 
};

const listOne = async (req, res, next) => {

    const apiKey = await req.get(apikeyheader);
    iduser = req.params.id;

    const user = await getOne(iduser, apiKey);

    if (user == false) {
        res.status(401).json({message: 'User não encontrado'})
    } else {
        console.log(user.dataValues);
        res.json(user);
    }

};

const update = async (req, res, next) =>{

    const apiKey = await req.get(apikeyheader);
    const iduser  = await req.params.id;
    const username = await req.body.username
    const email = await req.body.email

    if(await doUpdate(iduser, username, email, apiKey)){
        console.log('Success update');
        res.status(200).json({ message: "Success update"});
    }else{
        console.log('Fail update')
        res.status(401).json({ message: "Fail update"});
    }
}
    

const deleteOne = async (req, res, next) => {

    const id  = await req.params.id;
    const apiKey = await req.get(apikeyheader);

    if(await doDelete(id, apiKey)){
        console.log('Success deleted');
        res.status(200).json({ message: "Success deleted"});
    }else{
            console.log('Fail delete')
            res.status(401).json({ message: "Fail delete"});
    }
};

module.exports = {list, create, update, listOne, deleteOne};