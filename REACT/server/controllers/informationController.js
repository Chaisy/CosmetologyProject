const {Information} = require('../models/models')
const ApiError = require('../error/ApiError')

class InformationController {
    async getAll(req, res) {
        try {
            const informations = await Information.findAll()
            return res.json(informations)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async get(req, res) {
        try {
            const {id} = req.params
            const information = await Information.findOne({where: {id}})
            return res.json(information)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }   
    }
}

module.exports = new InformationController()