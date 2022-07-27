const { Text } = require('../db');

const palindromo = (text) => {
    const Regex = /[^A-Za-z]/g; //igaul a /[\W]/g
    const stringReg = text.toLowerCase().replace(Regex, '');
    const reverseString = stringReg.split('').reverse().join('');
    return reverseString === stringReg ? true : false;
}

const generateTextReverse = async (req, res) => {
    try{
        const { text } = req.query;
        if(text){
            const reverseText = text.split("").reverse().join("");
            const palindro = palindromo(text);
            await Text.create({
                name: reverseText,
                palindromo: palindro
            })
            const textsReverse = await Text.findAll({
                order: [
                    ['id', 'DESC']
                ]
            });
            if(textsReverse.length){
                res.status(200).send(textsReverse)
            }
        }else{
            res.status(400).send({error: 'Text is required'});
        }
    }catch(error){
        res.send(error);
    }   
}


module.exports = {
    generateTextReverse,
    palindromo
}