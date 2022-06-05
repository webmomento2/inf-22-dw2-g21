const { getAll, createFilme, doUpdate, getOne, doDelete } = require("../services/filmeService");
const apikeyheader = "x-api-key"

const list =  async (req, res, next) => {

    const users = await getAll();
    //console.log("data->", users);
    res.json(users);

};

const create = async (req, res, next) => {

    const nome  = await req.body.nome;
    const ano  = await req.body.ano;
    const genero  = await req.body.genero;
    const apiKey = await req.get(apikeyheader);

    const newFilme = await createFilme(nome, ano, genero, apiKey);
    console.log(newFilme.dataValues);
    res.json(newFilme);
};

const listOne = async (req, res, next) => {

    const apiKey = await req.get(apikeyheader);
    idfilme = req.params.id;

    const filme = await getOne(idfilme, apiKey);

    if (filme == false) {
        res.status(401).json({message: 'Publicação não encontrada'})
    } else {
        console.log(filme.dataValues);
        res.json(filme);
    }

};

const update = async (req, res, next) =>{

    const apiKey = await req.get(apikeyheader);
    const idfilme  = await req.params.id;
    const nome = await req.body.nome
    const ano = await req.body.ano
    const genero = await req.body.genero

    if(await doUpdate(idfilme, nome, ano, genero, apiKey)){
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


module.exports = { list, create, update, listOne, deleteOne };