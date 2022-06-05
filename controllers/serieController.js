const { getAll, createSerie, doUpdate, getOne, doDelete } = require("../services/serieService");
const apikeyheader = "x-api-key";

const list =  async (req, res, next) => {

    const series = await getAll();
    //console.log("data->", series);
    res.json(series);

};

const create = async (req, res, next) => {
    
    const nome  = await req.body.nome;
    const ano  = await req.body.ano;
    const genero  = await req.body.genero;
    const apiKey = await req.get(apikeyheader);

    const newSerie = await createSerie(nome, ano, genero, apiKey);
    console.log(newSerie.dataValues);
    res.json(newSerie);
};

const update = async (req, res, next) =>{

    const apiKey = await req.get(apikeyheader);
    const idserie  = await req.params.id;
    const nome = await req.body.nome
    const ano = await req.body.ano
    const genero = await req.body.genero

    if(await doUpdate(idserie, nome, ano, genero, apiKey)){
        console.log('Success update');
        res.status(200).json({ message: "Success update"});
    }else{
        console.log('Fail update')
        res.status(401).json({ message: "Fail update"});
    }
}

const listOne = async (req, res, next) => {

    const apiKey = await req.get(apikeyheader);
    idserie = req.params.id;

    const serie = await getOne(idserie, apiKey);

    if (serie == false) {
        res.status(401).json({message: 'Publicação não encontrada'})
    } else {
        console.log(serie.dataValues);
        res.json(serie);
    }
};

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