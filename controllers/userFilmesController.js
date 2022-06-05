const {getFilmes}  = require("../services/userFilmesService");
const apikeyheader = "x-api-key"

const list = async (req, res, next) => {

    const apiKey = await req.get(apikeyheader);
    const iduser = req.params.id;

    const filme = await getFilmes(iduser, apiKey);

    if (filme == false) {
        res.status(401).json({message: 'Não foi possível obter os dados'})
    } else {
        console.log(filme);
        res.json(filme);
    }

};

module.exports =  {list} ;