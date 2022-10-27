const { pool } = require('./../utils/bd');

const create = async (obj) =>
    (await pool()).collection("equipo").insertOne(obj)
    
const find = async ({conditions = {}, projection = {}, sort = {}, limit = 50}) => {
    try {

    } catch(error) {
        
    }
}

const last = async() => {

}


module.exports = {create}